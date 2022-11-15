// Ciedere all'utente di inserire una parola

// let parola = myFunction(prompt());

// console.log(parola);
// Realizzare una struttura che analizzi la parola per capire se è palindroma

// function myFunction(palindromaTest) {
//     let testoSplit = palindromaTest.split('');
//     return palindromaTest;

// }

// Faccio inserire la parola all'utente
let par = prompt();
// splitto la parola
let vatt = par.split('');
console.log(vatt);
// inverto le lettere della parola
let parolaDivisa = vatt.reverse();
console.log(parolaDivisa);
// riunisco le lettere
let parolaInvertita = parolaDivisa.join('');
console.log(parolaInvertita);
// Creo la condizione
if(par == parolaInvertita){
    console.log(`La parola ${par} è palindroma`);
  } else {
    console.log(`La parola ${par} non è palindroma`);
  }
  