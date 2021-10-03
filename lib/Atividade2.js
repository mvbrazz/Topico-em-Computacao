function gerarNumeroAleatorio(numeros){

    if(numeros.inicio < 0 || numeros.fim < 0){
        return -1;
    }
    else if(numeros.inicio >= numeros.fim){
        return -1;
    }
    else{
        return Math.random() * (numeros.fim - numeros.inicio) + numeros.inicio;
    }
    
}

module.exports = gerarNumeroAleatorio;


