<script>
    import { pointsToWin_, nCards_, nPlayers_, timePlayer_, argument_, roundsArray_ } from "../store";
    import { onMount } from "svelte";

    import { animals } from "../resources/animals";
    import { flags } from "../resources/flags";
    import { forms } from "../resources/forms";


    onMount(() => {
        createRoundArray()
    });

    let nPlayers = $nPlayers_;

    let nCards = $nCards_;

    let pointsToWin = $pointsToWin_;

    let argument = $argument_;

    let nRounds = Math.ceil($pointsToWin_*$nPlayers_/($nCards_/2));

    let roundsArray;

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
        roundsArray = [];

        for(let i = 0; i < nRounds; i++){
            roundsArray.push(createRound());
        }
        
        $roundsArray_ = roundsArray
        console.log($roundsArray_);
    }
    
</script>

<main>
    
</main>

<style>

</style>
