<script>
    import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@sveltestack/svelte-query';
    import { toasts, ToastContainer, FlatToast, BootstrapToast }  from "svelte-toasts";

    const mutationCache = new MutationCache({
        onError: (error, _variables, _context, mutation) => {
            console.log("error", error);
            // If this mutation has an onError defined, skip this
            if (mutation.options.onError) return;
            // toasts.add({
            //     title: 'Error',
            //     description: `Something went wrong: ${error.message}`,
            //     duration: 10000, // 0 or negative to avoid auto-remove
            //     placement: 'top-right',
            //     type: 'error',
            //     theme: 'light',
            // });
            // any error handling code...
            // toast.error(`Something went wrong: ${error.message}`);
        }
    });

    const queryCache = new QueryCache({
        onError: (error, query) => {
            // toasts.add({
            //     title: 'Error',
            //     description: `Something went wrong: ${error.message}`,
            //     duration: 10000, // 0 or negative to avoid auto-remove
            //     placement: 'top-right',
            //     type: 'error',
            //     theme: 'light',
            // });
            // any error handling code...
            // toast.error(`Something went wrong: ${error.message}`);
          
        }
    });

    // const queryClient = new QueryClient({ mutationCache, queryCache });
    const queryClient = new QueryClient()
</script>

<QueryClientProvider>
    <!-- <ToastContainer placement="top-right" let:data={data}>
        <FlatToast {data} /> Provider template for your toasts
        <slot />
      </ToastContainer> -->

      <slot />
    
</QueryClientProvider>

