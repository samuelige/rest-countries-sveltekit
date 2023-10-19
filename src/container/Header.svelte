<script>
	import { darkmode_icon, lightmode_icon } from "../_shared/assets/icons";
	import { isDarkMode } from "../store/store";

    const switchMode = () => {
        isDarkMode.update(value => !value);

        if ($isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        
    }

</script>

<header class="px-4 lg:px-8 xl-1:px-0 w-full flex flex-col h-[5rem] shadow-customMD  justify-center text-darkBlueMD dark:bg-darkBlueSM dark:text-white">
    <div class="flex flex-row justify-between items-center w-full xl-1:max-w-[80rem] xl-1:m-auto">
        <h1 class="text-sm md:text-2xl font-extrabold">Where in the world?</h1>
        <button on:click={switchMode} class="outline-one border-0 flex flex-row items-center space-x-2 text-xs md:text-base font-semibold">
            {#if $isDarkMode}
            <div class="w-4 h-4 md:w-6 lg:h-6">
                <img src={darkmode_icon} alt="mode-icon" class="w-full object-fill">
            </div>
            
            {:else}
            <div class="w-4 h-4 md:w-6 lg:h-6">
                <img src={lightmode_icon} alt="mode-icon" class="w-full object-fill">
            </div>
            {/if}
            <span>Dark Mode</span>
        </button>
    </div>
</header>