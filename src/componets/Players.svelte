<script>
    import { players_ } from '../store';

    export let move;

    export let count;

    let result = [];

    let activePlayer = 0;

    let totalPlayers = $players_.length;

    function resultUpdate(mo, co){
        if(mo === true || mo === false){
            //codice da eseguire ad ogni mossa
            console.log($players_);

            if(mo){
                $players_[activePlayer].points++;

                console.log($players_[activePlayer].name + 'ha fatto un punto e ora ne ha ' + $players_[activePlayer].points)



            }else if(!mo){

                
                if(activePlayer < totalPlayers-1){
                    console.log('error', totalPlayers);
                    activePlayer++;
                }else{
                    activePlayer = 0;
                }

                turns();

            }

            

            result.push(mo);
            console.log(result);  

        }
        
    }

    function turns(activePl){
        console.log( 'è il turno di ' + $players_[activePlayer].name + ' che ha ' + $players_[activePlayer].points + ' punti.')
    }

    $: {turns()};

    $: {resultUpdate(move, count)};

</script>

<main class="position-fixed top-0 start-0 w-100">
    <div class="d-flex flex-row w-100 justify-content-evenly">
        {#each $players_ as player, y}
             <div class="p-1 rounded-bottom border bg-primary" class:bg-secondary={(activePlayer === y) && true || false}>
                {player.name}: {player.points}
             </div>
        {/each}
    </div>
</main>

<style>

</style>