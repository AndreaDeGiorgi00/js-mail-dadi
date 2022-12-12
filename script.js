/*ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato*/



//SELEZIONO IL BLOCCO DOVE STAMPARE I RISULTATI

let target = document.getElementById("gioco-dadi")


//vengono lanciati i dadi e stampati in pagina

const giocatore = Math.floor((Math.random() * 6 ) + 1);

target.innerHTML +=`<p> dal lancio del giocatore è uscito :  ${giocatore} </p>` ;
const computer = Math.floor((Math.random() * 6 ) + 1);
target.innerHTML += `<p> dal lancio del computer è uscito :  ${computer} </p>` ;
console.log(computer);

//confronto i due lanci 

if (giocatore > computer){
    console.log("ha vinto giocatore 1");
    target.innerHTML +=  ` <p> ha vinto il giocatore  </p>`
}else if (giocatore < computer) {
    console.log("ha vinto il computer");
    target.innerHTML +=  ` <p> ha vinto il computer  </p>`
    
}else{
    console.log("pareggio");
    target.innerHTML +=  ` <p> c'è stato un pareggio </p>`
}

