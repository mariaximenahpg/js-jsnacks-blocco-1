// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Lista invitati:
const guestName = ["Marco", "Luca", "Luisa", "Federica"];
// Richiedo nome all'utente e pongo le condizioni:
const userName = prompt("Inserisci qui il tuo nome!");
let check = false;
for (let i = 0; i < guestName.length; i++) {
    if (userName === guestName[i]) {
        check = true;
        break;
    }
}
if (check) {
    alert("Benvenuto alla festa!");
} else {
    alert("Non sei il benvenuto!");
}