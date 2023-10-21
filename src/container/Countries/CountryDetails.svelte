<script>
    // @ts-nocheck
	import { useQuery } from "@sveltestack/svelte-query";
	import { left_arrow_icon } from "../../_shared/assets/icons";
	import { fetchSingleCountryAction } from "../../api/countries.actions";
	import { goto} from "$app/navigation";
	import CustomLoader from "../../_shared/components/CustomLoader.svelte";

    export let data;
	const { countryName } = data;

    const countryNameData = useQuery(['single_country', countryName], fetchSingleCountryAction,
        {
            refetchOnWindowFocus: false,
            enabled: !!countryName
        }
    );

    $: ({ isLoading} = $countryNameData);

</script>
    <div class="w-full px-7 lg:px-12  mt-10 dark:bg-gray-900 bg-white lg:mt-20 xl-1:px-0 lg:pb-16 xl-1:pb-0">
        <div class="w-full flex flex-col xl-1:max-w-[80rem] xl-1:m-auto">
            {#if isLoading}
                <CustomLoader/>
            {:else}
                <div class="w-full flex flex-col">
                    <button class="w-[6.5rem] flex flex-row justify-between items-center pl-6 pr-[1.44rem] pb-[0.37rem] pt-[0.38rem] shadow-customXL border-0 outline-0 rounded-sm" on:click={() => goto('/')}>
                        <img src={left_arrow_icon} loading="lazy" alt="left_arrow_icon">
                        <span class="text-darkBlueMD font-light text-sm">Back</span>
                    </button>
    
    
                    <div class="mt-16 flex flex-col lg:flex-row lg:justify-between lg:items-center">
                        <div class="w-full h-[14.3125rem] rounded-[0.35738rem] md:h-[25.0625rem] md:rounded-[0.62538rem] lg:w-[26rem] xl:w-[34.98219rem]">
                            <img class="w-full object-cover h-[14.3125rem] rounded-[0.35738rem] md:h-[25.0625rem] md:rounded-[0.62538rem]" src={$countryNameData?.data?.data[0]?.flags?.png} alt="" srcset="">
                        </div>
                        <div class="mt-11 lg:mt-0 text-darkBlueMD lg:w-[31.375rem] xl:w-[34.375rem] xl-1:w-[37.375rem]">
                            <h1 class="text-[1.375rem] font-extrabold md:text-[2rem]">{$countryNameData?.data?.data[0]?.name?.common}</h1>
    
                            <div class="flex flex-col lg:flex-row lg:justify-between lg:mt-[1.44rem]">
                                <div class="mt-4 text-sm font-semibold leading-8 md:text-base md:leading-8 lg:mt-0">
                                    <p>Native Name: <span class="font-light">{$countryNameData?.data?.data[0].name?.official}</span></p>
                                    <p>Population: <span class="font-light">{$countryNameData?.data?.data[0]?.population}</span></p>
                                    <p>Region: <span class="font-light">{$countryNameData?.data?.data[0]?.region}</span></p>
                                    <p>Sub Region: <span class="font-light">{$countryNameData?.data?.data[0]?.subregion}</span></p>
                                    <p>Capital: <span class="font-light">{$countryNameData?.data?.data[0]?.capital}</span></p>
                                </div>
            
                                <div class="mt-8 text-sm font-semibold leading-8 lg:mt-0">
                                    <p>Top Level Domain: <span class="font-light">{$countryNameData?.data?.data[0].tld}</span></p>
                                    <p>Currencies: <span class="font-light">{#each Object.values($countryNameData?.data?.data[0]?.currencies) as currency} {currency.name + "," || ""} {/each}</span></p>
                                    <p>Languages: <span class="font-light">{#each Object.values($countryNameData?.data?.data[0]?.languages) as languages} {languages + "," || ""} {/each}</span></p>
                                </div>
                            </div>
    
                            {#if $countryNameData?.data?.data[0]?.borders}
                                <div class="mt-[2.13rem] mb-16 lg:mb-0">
                                    <h3 class="text-base font-semibold">Border Countries</h3>
                                    <div class="mt-4 flex flex-row gap-[0.63rem] flex-wrap empty:hidden">
                                        {#each $countryNameData?.data?.data[0]?.borders as items}
                                            <div class="rounded-sm pl-[1.88rem] pr-[1.87rem] py-[0.38rem] bg-white text-xs shadow-customXS">
                                                {items}
                                            </div>
                                        {/each}
                                        
                                    </div>
                                </div>
                            {/if}
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>

