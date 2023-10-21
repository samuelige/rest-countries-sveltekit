<script>
    // @ts-nocheck
	import { useMutation } from "@sveltestack/svelte-query";

	import { search_icon } from "../../_shared/assets/icons";
	import CountryGrid from "./CountryGrid.svelte";
	import { fetchCountriesAction } from "../../api/countries.actions";
	import { onMount } from "svelte";
	import CustomLoader from "../../_shared/components/CustomLoader.svelte";

    let searchTerm = '';
    let selectedValue = '';

    let options = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    let countries = [];
    let initialData = [];

    const handleEditEmployee  = useMutation((variables) => fetchCountriesAction(variables),
        {
            onSuccess: (response) => {
                countries = response;
                initialData = response;
            },    
        }
    );

    const handleChange = (event) => {
        selectedValue = event.target.value;

        $handleEditEmployee.mutate("region/" + selectedValue.toLowerCase());
        
    }

    const handleSearch = () => {
        if(searchTerm !== ""){
            countries = countries?.filter(item => item.name?.common?.toLowerCase().includes(searchTerm.toLowerCase())); 
        } else {
            countries = initialData;
        } 
    }

    onMount(async () => {
        $handleEditEmployee.mutate("all");
    });

</script>

<main class="w-full px-4 lg:px-8 mt-6 dark:bg-gray-900 bg-white lg:mt-12 xl-1:px-0">
    <div class="w-full flex flex-col xl-1:max-w-[80rem] xl-1:m-auto">
        <div class="text-sm flex flex-col md:flex-row md:justify-between md:items-center">
            <div class=" dark:bg-gray-900 'bg-white' w-full flex flex-row items-center text-grayXS  border-0  shadow-customSM h-12 md:h-14 md:w-[30rem] rounded-[0.3125rem] pt-[0.87rem] pb-[0.88rem] px-8">
                <img src={search_icon} alt="search_icon">
                <div class="relative ml-[1.63rem] flex-grow">
                    <input
                        type="text"
                        class="w-full outline-none"
                        bind:value={searchTerm}
                        placeholder="Search for a country…"
                        on:input={handleSearch}
                    />
                </div>
            </div>
    
            <select
                class="bg-white mt-10 md:mt-0 py-[1.13rem] pl-6 pr-[1.38rem] shadow-customSM w-[12.5rem] h-12 md:h-14 rounded-[0.3125rem] text-darkBlueMD border-0 outline-none "
                bind:value={selectedValue}
                on:change={handleChange}
                >
                <option value="" disabled selected>Filter by Region</option>
                {#each options as option (option)}
                    <option value={option}>{option}</option>
                {/each}
            </select>
        </div>

        <div class="mt-[1.75rem] lg:mt-12">
            {#if $handleEditEmployee.isLoading}
                <CustomLoader/>
            {:else}
                <CountryGrid data={countries}/>
            {/if}
        </div>
    </div> 
</main>