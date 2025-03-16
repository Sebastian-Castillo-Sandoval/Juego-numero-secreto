let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];//lista inicializada
let numeroMaximo = 10;

console.log(numeroSecreto);

function asigarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector (elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    
    console.log(intentos);
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asigarTextoElemento ('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez': 'veces'}`);
        document.getElementById ('reiniciar').removeAttribute ('disabled');

    } else {
        //El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asigarTextoElemento ('p', 'El número Secreto es menor');
        } else {
                asigarTextoElemento ('p', 'El número Secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //ya se sortearon todos los numeros posibles?
    if (listaNumerosSorteados.length == numeroMaximo){
        asigarTextoElemento ('p', 'ya se sortearon todos los numeros');
    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();          
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asigarTextoElemento('h1', 'Juego del numero secreto!');
    asigarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
} 

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabiliar el boton de juego nuevo
    document.querySelector('#reiniciar').setAttribute ('disabled', 'true');
}

condicionesIniciales();


