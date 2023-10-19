<script>
// @ts-nocheck

	import CountryCard from "../../_shared/components/CountryCard.svelte";

    export let data;
</script>

<div class="flex flex-col gap-y-10 md:grid md:grid-cols-3 md:gap-x-10 xl:grid-cols-4 xl-1:gap-[4.69rem]">
    {#each data as items}
        <CountryCard item={items}/>
    {/each}
</div>