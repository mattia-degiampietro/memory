<script>
    import { pointsToWin_, nCards_, nPlayers_, timePlayer_, argument_, roundArray_ } from "../store";
    import { onMount } from "svelte";

    import { animals } from "../resources/animals";
    import { flags } from "../resources/flags";
    import { forms } from "../resources/forms";


    onMount(() => {
        createRound();
        createRoundArray();
    });

    let nPlayers = $nPlayers_;

    let nCards = $nCards_;

    let pointsToWin = $pointsToWin_;

    let argument = $argument_;

    let nRounds = Math.ceil($pointsToWin_*$nPlayers_/($nCards_/2));

    let roundArray = [[]];

    let rows = 0;

    let cols = 0;

    let round = [{src: '', name: ''}];

    function getRandomProperty(obj) {
        const values = Object.values(obj);

        return values[Math.floor(Math.random() * values.length)];
    }   

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function createRound(){
        round = [];
        switch(argument){
            case 'forms':
                for(let i = 0, temp = {src: '', name: ''}; i < nCards/2; i++){
                    temp = getRandomProperty(forms);
                    while(round.includes(temp)){
                        temp = getRandomProperty(forms);
                    }
                    round.push(temp);   
                }
                
                
            break;

            case 'animals':
                for(let i = 0, temp = {src: '', name: ''}; i < nCards/2; i++){
                    temp = getRandomProperty(animals);
                    while(round.includes(temp)){
                        temp = getRandomProperty(animals);
                    }
                    round.push(temp);   
                }
            break;

            case 'flags':
                for(let i = 0, temp = {src: '', name: ''}; i < nCards/2; i++){
                    temp = getRandomProperty(flags);
                    while(round.includes(temp)){
                        temp = getRandomProperty(flags);
                    }
                    round.push(temp);   
                }
            break;
        }

        round = [...round, ...round];
        shuffle(round);
        shuffle(round);
        shuffle(round);
        shuffle(round);
        shuffle(round);
        shuffle(round);
        shuffle(round);
        shuffle(round);
        shuffle(round);
        shuffle(round);
        console.log(round);

        return round;
    }
    

    function createRoundArray(){

        let tempRound = createRound();

        roundArray = [[], []];

        switch(nCards){
            case(12):
                rows = 3;
                cols = 4;
            break;

            case(16):
                rows = 4;
                cols = 4;
            break;
            
            case(20):
                rows = 4;
                cols = 5;
            break;
            
            case(24):
                rows = 4;
                cols = 6;
            break;
            
            case(28):
                rows = 4;
                cols = 7;
            break;
            
        }

        for(let i = 0, j = 0; i < rows; i++){
            roundArray.push([])
            for(let k = 0; k < cols; k++, j++){
                roundArray[i].push(round[j]);
            }
        }
        
        $roundArray_ = roundArray;
        console.log($roundArray_);
    }
    
</script>

<main>
    
</main>

<style>

</style>
