<script>
    import { players_, totalPoints_, activePage_, nCards_, message_, timeMessage_, timePlayer_, time_ } from '../store';

    export let move;

    export let count;

    let result = [];

    let pointsCounter = 0;

    let totalPoints = $nCards_/2;

    let activePlayer = 0;

    let totalPlayers = $players_.length;

    let time = 0;

    let intervalID;

    function startTime(){
        intervalID = setInterval(() => {time += 10}, 10);
    }

    function stopTime(){  
        clearInterval(intervalID);
        time = 0;
    }

    function changePlayer(){
        if(activePlayer < totalPlayers-1){
            activePlayer++;
        }else{
            activePlayer = 0;
        }

        turns();
    }

    setTimeout(() => {
        if($players_.length > 1){
            startTime();
        }
    }, $timeMessage_);

    $: if(time >= $timePlayer_*1000){
        stopTime();
        changePlayer();
        setTimeout(() => {
            startTime();
        }, $timeMessage_);
    }

    $: $time_ = time;

    function resultUpdate(mo, co){
        if(mo === true || mo === false){
            //codice da eseguire ad ogni mossa
            console.log($players_);
            
            
            if($players_.length > 1){
                stopTime();
            }

            if(mo){
                $players_[activePlayer].points++;

                console.log($players_[activePlayer].name + 'ha fatto un punto e ora ne ha ' + $players_[activePlayer].points)

                pointsCounter++;

                if($players_.length > 1){
                    startTime();
                }

                if(pointsCounter >= totalPoints){
                    $activePage_ = 'result';
                }

            }else if(!mo){

                changePlayer();
                setTimeout(() => {
                    if($players_.length > 1){
                        startTime();
                    }
                }, $timeMessage_);

            }

            

            result.push(mo);
            console.log(result);  

        }

        
        
    }

    function turns(activePl){
        $message_ = 'È il turno di ' + $players_[activePlayer].name;
    }

    $: {turns()};

    $: {resultUpdate(move, count)};

</script>

<main class="position-fixed top-0 start-0 w-100 ply">
    <div class="d-flex flex-row w-100 justify-content-evenly">
        {#each $players_ as player, y}
            <div class="p-1 rounded-bottom border bg-primary" class:bg-secondary={(activePlayer === y) && true || false}>
                {player.name}: {player.points}
            </div>
        {/each}
    </div>
</main>

<style>
    .ply{
        margin: 10px;
    }
</style>