/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

//numero di chilometri che vuole percorrere 
//l’età del passeggero

let promptChilometriDaPercorrere = prompt("quanti chilometri vuoi percorrere"); //ok
let promptEtaPasseggero = prompt("quanti anni hai?");                           //ok
const prezzoViaggio = 0.21;                                                     //ok
const prezzoTotale =  (promptChilometriDaPercorrere * prezzoViaggio)       //calcolo prezzo del viaggio


promptChilometriDaPercorrere = parseInt (promptChilometriDaPercorrere);       //controllo se sono dei numeri
promptEtaPasseggero = parseInt(promptEtaPasseggero);                          //controllo se sono dei numeri





if (isNaN(promptChilometriDaPercorrere)){
    alert("il numero inserito non è un numero")
} else{

}


if (isNaN(promptEtaPasseggero)){
    alert("il numero inserito non è un numero")
} else{

}

alert ("totale da pagare " + prezzoTotale + "€") //totale da pagare