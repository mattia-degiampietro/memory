<script>
    import Players from "../componets/Players.svelte";
    import CreateCards from "../componets/CreateCards.svelte";
    import Table from "../componets/Table.svelte";
    import Message from "../componets/Message.svelte";
    import Timebar from "../componets/Timebar.svelte";

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

    <Message />

    <Timebar />

</main>

<style></style>