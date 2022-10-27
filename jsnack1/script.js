// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const aWord = prompt("Scrivi una parola");
console.log(aWord);

const bWord = prompt("Scrivi un'altra parola");
console.log(bWord);
// Pongo condizione
if ( aWord.length > bWord.length) {
    console.log(bWord, aWord)
} else if ( aWord.length < bWord.length) {
    console.log(aWord, bWord)
} else {
    console.log("Le parole hanno la stessa lunghezza")
}