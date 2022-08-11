<script>
    import Players from "../componets/Players.svelte";
    import CreateCards from "../componets/CreateCards.svelte";
    import Table from "../componets/Table.svelte";

    let move;

    let count = 0;

    let func = (event) => {
        move = event.detail.result;
        console.log(move);
        count++;
    }

    

</script>

<main>
    <CreateCards />

    <Table on:status={func} />

    <Players bind:move bind:count />

</main>

<style></style>