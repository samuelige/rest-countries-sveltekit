<script>
// @ts-nocheck

    export let item;
</script>

<article class="w-full h-[21rem] dark:bg-darkBlue bg-white rounded-[0.3125rem] shadow-customLG" >
    <a href={`/${item?.name?.common?.toLowerCase()}`} class="w-full">
        <div class="h-[10rem] w-full">
            <img src={item?.flags?.png} loading="lazy" alt="country_img" class="w-full h-[10rem] object-cover" >
        </div>
        <div class="pt-[1.5rem] px-[1.5rem] pb-[2.87rem] text-darkBlueMD dark:text-white">
            <h6 class="text-lg font-extrabold">{item?.name?.common}</h6>
            <p class="font-semibold text-sm mt-4">Population: <span class="font-light">{item?.population || ""}</span></p>
            <p class="font-semibold text-sm mt-2">Region: <span class="font-light">{item?.region || ''}</span></p>
            <p class="font-semibold text-sm mt-2">Capital: <span class="font-light">{item?.capital ? item?.capital[0] : ""}</span></p>
        </div>
    </a>
</article>