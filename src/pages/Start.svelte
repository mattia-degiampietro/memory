<script>
    import { activePage_, players_, argument_, nCards_, timePlayer_ } from '../store';

    let butt;

    let textIn = 'Giocatore ' + ((($players_.length + 1)<=3) && $players_.length + 1 || 3);

    function onSubmit(){
        $players_.push({
            name: textIn,
            points: 0
        });

        $players_ = $players_;

        defInput();
        console.log($players_);

        if($players_.length >=3){
            butt.classList.add('disabled');
        }
    }

    function defInput(){
        textIn = 'Giocatore ' + ((($players_.length + 1)<=3) && $players_.length + 1 || 3);
    }

</script>

<main>
<h1 class="text-center">Memory</h1>

<div class="row my-2 mx-2 border border-success rounded-4 justify-content-center align-items-center">
    {#each $players_ as player, y}
        <div class="col-auto bg-success text-light m-2 p-2 rounded-3">
            {player.name}
        </div>
    {/each}
</div>

<div class="row my-2 mx-2 border border-success rounded-4">
    <div class="col-sm-6 d-flex flex-column  justify-content-center align-items-center my-2">
        <h4 class="text-success">Crea giocatore</h4>
        <p class="text-success">da 1 a 3 gicoatori</p>
        <input type="text" class="form-control border-success text-center w-75" bind:value={textIn}>
    </div>
    <div class="col-sm-6 d-flex justify-content-center align-items-center my-2">
        <button class="btn btn-outline-success btn-lg" on:click={onSubmit} bind:this={butt}>Aggiungi</button>
    </div>
</div>

<div class="row my-2 mx-2 justify-content-evenly">
    <div class="col-sm-6  p-0">
        <div class="d-flex flex-column justify-content-center align-items-center border border-success rounded-4 me-sm-2 pb-2 my-2">
            <h4 class="text-success">Numero di carte</h4>
            <select class="form-select form-select w-75 text-center border-success" bind:value={$nCards_}>
                <option value={12}>12</option>
                <option value={16}>16</option>
                <option value={20}>20</option>
                <option value={24}>24</option>
                <option value={28}>28</option>  
            </select>
        </div>
    </div>

    <div class="col-sm-6 p-0">
        <div class="d-flex flex-column justify-content-center align-items-center border border-success rounded-4 ms-sm-2 pb-2 my-2">
            <h4 class="text-success">Tema</h4>
            <select class="form-select form-select w-75 text-center border-success" bind:value={$argument_}>
                <option value="animals">Animali</option>
                <option value="forms">Forme</option>
                <option value="flags">Bandiere</option>
            </select>
        </div>
    </div>
</div>

<div class="row my-2 mx-2 justify-content-evenly">
    <div class="col-sm-6  p-0">
        <div class="d-flex flex-column justify-content-center align-items-center border border-success rounded-4 me-sm-2 pb-2 my-2">
            <h4 class="text-success">Tempo per rispondere</h4>
            <p class="text-success">da 2 a 25 secondi</p>
            <input type="number" class="form-control border-success text-center w-25" min="2" max="25" bind:value={$timePlayer_}>
            <input type="range" class="form-range w-75 text-success " min="2" max="25" bind:value={$timePlayer_}>
        </div>
    </div>
</div>

<div class="row my-2 mx-2 justify-content-center align-items-center my-4">
    <div class="col-sm-6 text-center">
        
        <button class="btn btn-success btn-lg w-50" class:disabled={$players_.length === 0} on:click={() => {$activePage_ = 'memory'}}>Gioca!</button>
        {#if $players_.length === 0}
            <p class="text-success">devi inserire almeno un giocatore</p>
        {/if}
    </div>
</div>

</main>

<style>

</style>