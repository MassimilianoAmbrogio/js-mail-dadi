
/** ESERCIZIO MAIL 
 * - Chiedi all'utente la sua email
 * - Controlla che sia nella lista di chi può accedere
 * - Stampa un messaggio appropriato sull'esito del controllo.
 */

//  Start variables
var emails = ['antonio.petr@gmail.com', 'giorgiafas.30@gmail.com', 'lucasdev.05@gmail.com'];

//  Domanda all'utente
var emailUtente = prompt('Inserisci la tua email');
var emailFound = false;

for (var i = 0; i < emails.length; i++) {

    if (emails[i] == emailUtente) {
        emailFound = true;
    }
}

// Feedback
if (emailFound === true) {
    console.log('Puoi accedere');
}
else {
    console.log('Non puoi accedere');
}
 
