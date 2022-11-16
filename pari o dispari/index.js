let startButton = document.getElementById('start-generate');
startButton.addEventListener('click',
    function(){
        // numero scelto dall'utente
        let inputUser = document.getElementById('user-data');
        console.log(inputUser.value);
        // Numero casuale pc
        let pcGenerate1 = random(1, 50);
        console.log(pcGenerate1);

        let sommaNumeriPcENumeriUtente = inputUser.value + pcGenerate1;

        if(sommaNumeriPcENumeriUtente % 2 === 0){
            console.log(`Pari`);
        }else{
            console.log(`Dispari`);
        }
        inputUser.value = ''
    }

)



// Funzioni 


function random(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}