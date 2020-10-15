
/** ESERCIZIO MAIL 
 * - Chiedi all'utente la sua email
 * - Controlla che sia nella lista di chi può accedere
 * - Stampa un messaggio appropriato sull'esito del controllo.
 */

//  Start variables

//  Domanda all'utente
var email = parseInt(prompt('Quale è la tua mail?'));
var message1;
var message2;
 
// Lista mail
var list = ['antonio.petr@hotmail.com', 'giorgiafas.30@gmail.com', 'lucasdev.05@alice.it'];
console.log(list);

// Accesso lista e conrollo
console.log(list.length);
console.log('Controllo che sia presente nella lista...') + message1;

message1 = 'Controllo completato mail presente';
message2 = 'Controllo completato mail non presente';

document.getElementById('mail').innerHTML = message1;

document.getElementById('mail').innerHTML = message2;