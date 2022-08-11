<script>
import CreateCards from "../componets/CreateCards.svelte";
import Table from "../componets/Table.svelte";

function func(event){
    alert(event.detail.result)
}

</script>

<main>
    <CreateCards />

    <Table on:status={func} />

</main>

<style></style>