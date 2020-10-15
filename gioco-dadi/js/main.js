/**
 * GIOCO DEI DADI
 *
   Generare un numero random da 1  a 6,
   sia per il giocatore sia per il computer
   Stabilire il vincitore, 
   in base a chi fa il punteggio più alto.
 */

//  Start variables
var numeroRandom = ('Inserisci numR1 0 numR2');

var giocatore, pc = parseInt(prompt('Inserisci un numero da 1 a 6'));

// Gen. numeri random giocatore
var giocatore = Math.floor(Math.random() * 6) + 1;
console.log(giocatore);

// Gen. numeri random pc
var pc = Math.floor(Math.random() * 6) + 1;
console.log(pc);

// Totale
var totale = giocatore + pc;

// Controllo se numR1 o 2
var risultato;

if (totale % 2 == 0) {
  risultato = 'numR1';
}
else {
  risultato = 'numR2';
}

// Controllo vincitore
if (numeroRandom == risultato) {
  console.log('Hai vinto per punteggio più alto');
}
else {
  console.log('Vince per punteggio più alto il pc');
}

