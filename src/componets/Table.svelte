<script>
    import { nCards_, nPlayers_, timePlayer_, argument_, roundArray_ } from "../store";

    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let j = 0;

    let clickCounter = 0;

    let root;

    let tempElement;


    let cardd;

    let correctCounter = 0;

    function sendStatus(bool = false){
        dispatch('status', {
            result: bool
        });
    }

    function onclick(){
        if(this.dataset.actived === 'true' && clickCounter < 2){
            setTimeout(() => {
                console.log("click");
                this.classList.remove('no-background');
                this.children[0].classList.remove('hide');

                if(clickCounter === 0){
                    tempElement = this;
                    clickCounter = 1;
                }else if(clickCounter === 1){
                    clickCounter = 2;
                    if(tempElement.dataset.name === this.dataset.name){
                        console.log("esatto");
                        
                        setTimeout(() => {           
                            this.classList.remove('border');
                            this.classList.remove('border-secondary');

                            tempElement.classList.remove('border');
                            tempElement.classList.remove('border-secondary');

                            tempElement.style.border = '2px solid green';
                            this.style.border = '2px solid green';
                        }, 100);


                        setTimeout(() => {
                            sendStatus(true);
                            this.classList.add('hide');
                            tempElement.classList.add('hide');
                            clickCounter = 0;
                        }, 1500);
                        
                    }else{
                        console.log("sbagliato");

                        setTimeout(() => {           
                            this.classList.remove('border');
                            this.classList.remove('border-secondary');

                            tempElement.classList.remove('border');
                            tempElement.classList.remove('border-secondary');

                            tempElement.style.border = '2px solid red';
                            this.style.border = '2px solid red';
                        }, 100);

                        setTimeout(() => {
                            sendStatus(false);
                            this.classList.add('border');
                            this.classList.add('border-secondary');

                            tempElement.classList.add('border');
                            tempElement.classList.add('border-secondary');

                            this.classList.add('no-background');
                            this.children[0].classList.add('hide');
                            tempElement.classList.add('no-background');
                            tempElement.children[0].classList.add('hide');
                            tempElement.dataset.actived = 'true';
                            this.dataset.actived = 'true';
                            clickCounter  = 0;
                        }, 1000);
                        
                    }
                }
                this.dataset.actived = false;


            }, 50);
            
            
            }
        
    }

    setTimeout(() => {
      cardd = root.querySelectorAll('.cardd');
    }, 1000);
   

</script>

<main>
    <div class="container w-md-50 cont d-flex flex-column justify-content-between" bind:this="{root}">
        {#each $roundArray_ as row, y}
            <div class="row">
                {#each row as card}
                    <div 
                    class="col border border-secondary m-2 rounded d-flex justify-content-center align-items-center cardd no-background" 
                    style="background-color: #{card.background};"
                    data-name={card.name}
                    data-actived='true'
                    on:click={onclick}>
                        <div class="row hide">
                            <div class="col col-12 text-center">
                                <img src="{card.src}" alt="" class="">
                            </div>
                        </div>
                        
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</main>

<style>
    .cont{
        height: 100vh;
    }

    img{
        width: 100%;
    }

    .cardd{
        padding: 1vw 2vw;
        height: 22vh;
    }

    .hide{
        visibility: hidden;
    }

    .no-background{
        background-color: white !important;
    }

</style>