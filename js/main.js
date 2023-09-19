'use strict'

/*
1- crear html: select, btn, texto vamos a jugar (al arrancar la pagina) y parrafos resultados
2- dar clases a todo y traerlo a JS --> crear constantes

3 -  jugadora seleciona option en select y da CLICK al boton:
     aparece TEXTO en cuadro vamos a jugar que dice:
            - Empate: SI coinciden
            - Has Ganado! : si gana usuaria
            - Has Perdido! falle usuaria
    
4 - crear eventos y funciones manejadoras para BTN JUGAR

* recoger RESULTADO SELECT: const value= select.value;
  parrafo.innerHTML= value;

* hacer numeros aleatorios para computer:
    -const numAlea = funcion numAleatorio (1 al 9)
                    número aleatorio <= 3 -> piedra
                    número aleatorio >= 7 -> papel
                    número aleatorio 4 - 6 -> tijera ¿ELSE?

    - CONDICIONES = si el numero usuaria === numero computer --> EMPATE
                    si num usuaria
                    si num usuaria


                    pidera> tijera
                    tijar>papel
                    papel>piedra

function handleClick(event) {
   - funcion generar num aleatorio cuando btnPlayfuncion 
   - comparar select.value  con resultado numero aleatorio
}
    
cuando la usuaria selecciona una opcion y le da a jugar al btn, se genera un nuemro aleatorio y entran los condicionales --> se pinta en parrafo result si GANA, PIERDE, EMPATA
*/

/*
BONUS: Se acumulan los resultados hasta 10 vueltas
*/

//constantes
const select = document.querySelector('.js-select');
const btnPlay = document.querySelector('.js-btnPlay');
const result = document.querySelector('.js-result');
const pPlayer = document.querySelector('.js-player');
const pComputer = document.querySelector('.js-computer');


//funciones

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
    }

function final () {
    if (result === 'Has ganado'){
        pPlayer.innerHTML += 1;
        console.log('ganas');
    }
    if (result === 'Has perdido'){
        console.log('pierdes');
       pComputer.innerHTML += 1;
    }
}

function getResult () {
const resultUsuaria = select.value;
const randonNumber = getRandomNumber (9);
console.log(randonNumber);

    if (randonNumber <= 3) { //piedra
        if (resultUsuaria === 'piedra') {
            result.innerHTML = 'Empate';
        } else if (resultUsuaria === 'papel') {
            result.innerHTML = 'Has Perdido';
        } else if (resultUsuaria === 'tijera') {
            result.innerHTML = 'Has ganado';
        }
    }
    else if (randonNumber >= 7) { //papel
        if (resultUsuaria === 'piedra') {
            result.innerHTML = 'Has Perdido';
        } else if (resultUsuaria === 'papel') {
            result.innerHTML = 'Empate';
        } else if (resultUsuaria === 'tijera') {
            result.innerHTML = 'Has ganado';
        }
    }
    else if (randonNumber >= 4 && randonNumber <= 6) { //tijera
        if (resultUsuaria === 'piedra') {
            result.innerHTML = 'Has ganado';
        } else if (resultUsuaria === 'papel') {
            result.innerHTML = 'Has perdido';
        } else if (resultUsuaria === 'tijera') {
            result.innerHTML = 'Empate';
        }
    }
    
}
       
function handleClick(event) {
    event.preventDefault();   
    getResult ();
    final();
    }

//eventos
btnPlay.addEventListener('click', handleClick);


/***bonus***
 *  a los 10 clicks se acaba la partida -- se resetea
 *  se 
 * ***/

function reset () {
    result.innerHTML = 'Empieza de nuevo';    
}

let end = 0; // Inicializamos end en 0
const resetGame = document.querySelector('.js-reset');
const pEnd = document.querySelector('.js-pEnd');

btnPlay.addEventListener('click', () => {
    if (end < 11) { 
        end++; 
        console.log(`end: ${end}`); 
        if (end === 11) {
            resetGame.classList.remove('hidden');
            pEnd.classList.remove('hidden');
            reset();
            console.log("¡El juego se detiene!");
        }
    }
});
resetGame.addEventListener('click', () => {
    location.reload(); 
});



