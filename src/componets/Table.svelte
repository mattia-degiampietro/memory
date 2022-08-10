<script>
    import { pointsToWin_, nCards_, nPlayers_, timePlayer_, argument_, roundArray_ } from "../store";

    let j = 0;

</script>

<main>
    <div class="container">
        {#each $roundArray_ as row}
            <div class="row">
                {#each row as card}
                    <div class="col card-container m-2 p-0">
                        <div class="ccard w-100 h-100">
                            <div class="card-front d-flex flex-column justify-content-between align-items-center w-100 h-100 mb-0 p-3">
                                <div></div>   
                                <img src="{card.src}" alt="">
                                <p>{card.name}</p>
                            </div>
                            <div class="card-back w-100 h-100">

                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</main>

<style>
    .bordi{
        border: 1px solid gray;
    }
    
    .card-container p{
        font-size: 3.2vw;
        margin-bottom: 0px;
        font-weight: 500;
        
    }

    .card-container{
        border: 1px solid black;
        border-radius: 10px;
        max-height: 28vh;
        height: 30vw;
        width: 10vh;
        
    }

    .card-front img{

        max-width: 80%;
        max-height: 80%;
    }

    .ccard{
        position: relative;
    }

    .card-front, .card-back{
        position: absolute;
    }
    .card-front{
        z-index: 1;
    }
</style>