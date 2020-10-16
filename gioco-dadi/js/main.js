/**
 * GIOCO DEI DADI
 *
   Generare un numero random da 1  a 6,
   sia per il giocatore sia per il computer
   Stabilire il vincitore, 
   in base a chi fa il punteggio più alto.
 */

//  Start variables

// Gen. numeri random giocatore e pc
var giocatore = Math.floor(Math.random() * 6) + 1;
console.log(giocatore);

var pc = Math.floor(Math.random() * 6) + 1;
console.log(pc);

// Vincitore
if (giocatore > pc) {
  console.log('Vince il giocatore');
}
else if (giocatore < pc) {
  console.log('Vince il pc');
}
else {
  console.log('Pareggio');
}
