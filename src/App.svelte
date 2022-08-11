<script>
    import CreateCards from "./componets/CreateCards.svelte";
    import Memory from "./pages/Memory.svelte";
import Result from "./pages/Result.svelte";
import Start from "./pages/Start.svelte";
import Tutorial from "./pages/Tutorial.svelte";
    
    import { activePage_ } from './store';

</script>

<main>
    {#if $activePage_ === 'start'}
        <Start />
    {:else if   $activePage_ === 'tutorial'}
        <Tutorial />
    {:else if   $activePage_ === 'memory'}
        <Memory />
    {:else if   $activePage_ === 'result'}
        <Result />
    {/if}   
</main>

<style>

</style>
