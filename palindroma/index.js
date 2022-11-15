

// Faccio inserire la parola all'utente
// let par = prompt();
// // splitto la parola
// let vatt = par.split('');
// console.log(vatt);
// // inverto le lettere della parola
// let parolaDivisa = vatt.reverse();
// console.log(parolaDivisa);
// // riunisco le lettere
// let parolaInvertita = parolaDivisa.join('');
// console.log(parolaInvertita);
// // Creo la condizione
// if(par == parolaInvertita){
//     console.log(`La parola ${par} è palindroma`);
//   } else {
//     console.log(`La parola ${par} non è palindroma`);
//   }


myFunction()

//   Versione in function
function myFunction() {
    // Faccio inserire la parola Desiderata
    let par = prompt();
    // Splitto la parola
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
  
}
  