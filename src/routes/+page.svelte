<script>
    // @ts-nocheck
	import { useMutation, useQuery } from "@sveltestack/svelte-query";
	import { fetchCountriesAction } from "../api/countries.actions";
	import axios from "axios";
	import { onMount } from "svelte";

  let countries = [];

    // const queryResult = useQuery('todos', fetchCountriesAction)

    // const result = useQuery(['repoData', "all"], fetchCountriesAction);

    // const result = useQuery('repoData', () => {
    //     return fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(res => res.json())
    // },
    // {
    //     refetchOnWindowFocus: false,
    // }
    // );

    // $: ({ isLoading, data, error, refetch, isFetching } = $result);

    // const { data: countriesData, isLoading: loading } = useQuery(['countries', "all"],
    // fetchCountriesAction,
        // {
        //     refetchOnWindowFocus: false,
        // }
    // );

  //   const getPostById = async id => {
  //   const { data } = await axios.get(
  //     `https://jsonplaceholder.typicode.com/posts/${id}`
  //   )
  //   return data
  // }
  // const post = useQuery(
  //   ['post', 1],
  //   () => getPostById(1).then(res => console.log("data", res)),
    
  // )

    // console.log("countriesData", $result)
    // console.log("countriesData", $post)

    // const usersUrl = 'https://jsonplaceholder.typicode.com/users'
    // const queryResult = useQuery('users', () =>
    //   fetch(usersUrl).then(res => res.json())
    // )

    // console.log("queryResult", $queryResult)

    const handleEditEmployee  = useMutation((variables) => fetchCountriesAction(variables),
    {
      onSuccess: (response) => {
        countries = response;
        // const { data : {status} } = response;
        

        // if(status === "success"){
        //   setSpinner(false);
        //   toast.success(`Successfully updated `);

        //   queryClient.invalidateQueries('single_employee');
        //   queryClient.invalidateQueries('all_employee');
        //   setOpenEditEmployee((prev) => !prev)
        // }
      },

      // onError: (error) => {
      //   toast.error(`Something went wrong: ${error.message}`)
      // }
          
    }
  );

  // $: ({ isLoading, data, error} = $handleEditEmployee);


  onMount(async () => {
    $handleEditEmployee.mutate("all");
  });
</script>


<h1 class="text-red-700 font-extrabold">Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- <ul>
  {#each countries as user}
    <li>{user.name.common}</li>
  {/each}
</ul> -->

{#if $handleEditEmployee.isLoading}
  <span>Loading...</span>
{:else}
<div>
  <ul>
    {#each countries as user}
    <li>{user.name.common}</li>
  {/each}
  </ul>
</div>
{/if}
