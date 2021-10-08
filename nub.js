/*
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

let promptChilometriDaPercorrere = prompt("quanti chilometri vuoi percorrere"); //ok
let promptEtaPasseggero = prompt("quanti anni hai?");                           //ok
const prezzoViaggio = 0.21;                                                     //ok
const prezzoTotale =  (promptChilometriDaPercorrere * prezzoViaggio)       //calcolo prezzo del viaggio

promptChilometriDaPercorrere = parseInt (promptChilometriDaPercorrere);       //controllo se sono dei numeri
promptEtaPasseggero = parseInt(promptEtaPasseggero);                          //controllo se sono dei numeri

if (isNaN(promptChilometriDaPercorrere)){                                   //controllo se sono dei numeri
    alert("il numero inserito non è un numero")
} else{
}


if (isNaN(promptEtaPasseggero)){                                           //controllo se sono dei numeri
    alert("il numero inserito non è un numero");
} 

/* elementi selezionati singolarmente

if (promptEtaPasseggero <=18);{
    alert (`totale da pagare ${ prezzoTotale - (prezzoTotale * 20 / 100 )} €`)
}

if (promptEtaPasseggero >=65);{
    alert (`totale da pagare ${ prezzoTotale - (prezzoTotale * 40 / 100 )} €`)
}

alert ("totale da pagare " + prezzoTotale + "€"); //totale da pagare

*/




if (promptEtaPasseggero <=18 ){
    alert (`totale da pagare ${ prezzoTotale - (prezzoTotale * 20 / 100 )} €`)
}
else if (promptEtaPasseggero >=65 ){
    alert (`totale da pagare ${ prezzoTotale - (prezzoTotale * 40 / 100 )} €`)
}
else {
    alert ("totale da pagare " + prezzoTotale + "€")
}


