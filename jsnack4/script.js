// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

let sum=0;
const numbers=[2,3,1,9,6,3,7,9,2,4,1];
let oddnumbers=0;
for(let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
    if(i!=0 && i%2===0) {
    sum += numbers[i];
    }
}
console.log("Totale somma numeri in posizione dispari=", sum);
