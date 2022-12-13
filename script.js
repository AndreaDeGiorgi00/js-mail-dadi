/*ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato*/



//SELEZIONO IL BLOCCO DOVE STAMPARE I RISULTATI

const target = document.getElementById("gioco-dadi")


//vengono lanciati i dadi e stampati in pagina

const giocatore = Math.floor((Math.random() * 6 ) + 1);

target.innerHTML +=`<p> dal lancio del giocatore è uscito :  ${giocatore} </p>` ;
const computer = Math.floor((Math.random() * 6 ) + 1);
target.innerHTML += `<p> dal lancio del computer è uscito :  ${computer} </p>` ;


//confronto i due lanci 

if (giocatore > computer){
    
    target.innerHTML +=  ` <p> ha vinto il giocatore  </p>`
   
}else if (giocatore < computer) {
    
    target.innerHTML +=  ` <p> ha vinto il computer  </p>`
    
}else{
    
    target.innerHTML +=  ` <p> c'è stato un pareggio </p>`
   
}

// !---------------------------------------------------------------

/*ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/


//fare la lista di email autorizzate

const emailAuto = ["andrea@gmail.com" , "Mario@gmail.com" , "topolino@gmail.com"];

//seleziono il blocco della email in imput e il bottone e il testo

const btn = document.getElementById("bottone");
const email = document.getElementById("email");
const txt = document.getElementById("testo");
// creao una variabile per controllare se la email è valida
let variabile = false

btn.addEventListener("click", function(){

    
    
    for (let i = 0 ; i < emailAuto.length ; i++){
        
       if (emailAuto[i] === email.value) {
        //accesso concesso quindi cambio la variabile 
        variabile = true;
        };

    };

    const testo = variabile ? "accesso consentito" : "accesso negato";
    txt.innerText = testo;

    //riporto la variabile allo stato iniziale 
    variabile = false
});
