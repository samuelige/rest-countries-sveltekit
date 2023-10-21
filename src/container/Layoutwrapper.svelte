<script>
// @ts-nocheck

    import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
    import toast, { Toaster } from 'svelte-french-toast';
	import Header from './Header.svelte';

    const mutationCache = new MutationCache({
        onError: (error, _variables, _context, mutation) => {
            console.log("error", error);
            // If this mutation has an onError defined, skip this
            if (mutation.options.onError) return;
            // any error handling code...
            toast.error(`Something went wrong: ${error.message}`);
        }
    });

    const queryCache = new QueryCache({
        onError: (error, query) => {
            // any error handling code...
            toast.error(`Something went wrong: ${error.message}`);
        }
    });

    const queryClient = new QueryClient({ mutationCache, queryCache });
</script>

<QueryClientProvider client={queryClient}>
    <Toaster />
    <Header/>
    <slot />
    
</QueryClientProvider>

