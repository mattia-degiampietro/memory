<script>
    import { players_,activePage_ } from '../store';

    let tempPl = $players_;

    let winPoints = [];

    let classification = [[], [], []]

    let j = 0;

    setTimeout(() => {
        console.log(tempPl);
    }, 0);

    for(let i = 0; i < tempPl.length; i++){
        if(!winPoints.includes(tempPl[i].points)){
            winPoints.push(tempPl[i].points);
        }
    }

    winPoints.sort();
    winPoints.reverse();

    for(let i = 0; i < winPoints.length; i++){
        for(let j = 0; j < tempPl.length; j++){
            if(tempPl[j].points === winPoints[i]){
                classification[i].push(tempPl[j]);
            }
        }
    }




</script>

<main>

    <h1 class="text-center">Classifica</h1>

    <div class="row justify-content-center">
        <div class="col-6">
            <div class="text-center oro rounded">
                <h2>1° posto</h2>
                {#each classification[0] as item}
                    <h3>{item.name}</h3>
                    <p>{item.points} punti</p>
                {/each}
            </div>
            
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-sm col-6 m-2 text-center argento rounded">
            <h2>2° posto</h2>
            {#each classification[1] as item}
                <h3>{item.name}</h3>
                <p>{item.points} punti</p>
            {/each}
        </div>
        <div class="col-sm col-6 m-2 text-center bronzo rounded">
            <h2>3° posto</h2>
            {#each classification[2] as item}
                <h3>{item.name}</h3>
                <p>{item.points} punti</p>
            {/each}
        </div>
    </div>
    <div class="text-center m-3">
        <button class="text-center p-2 rounded new-game" on:click={() => {$activePage_ = 'start'}}>
            Nuova partita
        </button>
    </div>
    <div class="text-center m-3">
        <button class="text-center p-2 rounded restart" on:click={() => {$activePage_ = 'memory'}}>
            Rivincita
        </button>
    </div>
    

</main>

<style>
    .oro{
        background-color: gold;
    }

    .argento{
        background-color: silver;
    }

    .bronzo{
        background-color: #cd7f32;
    }

    .new-game{
        background-color: blue;
        color: white;
        font-size: 20px;
    }

    .restart{
        background-color: orange;
        color: white;
        font-size: 20px;
    }
</style>