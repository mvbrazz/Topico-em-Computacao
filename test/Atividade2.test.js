const { test } = require("@jest/globals");

const gerarNumeroAleatorio = require('../lib/Atividade2');
describe('Atv2 Ex1',()=>{
    test('Inicio e fim não negativo',()=>{
        let numeros = {};
        numeros.inicio = 0;
        numeros.fim = 10;
        numeros.aleatorio = gerarNumeroAleatorio(numeros);
        var aux;
        if(numeros.aleatorio > -1){
            aux = true;   
        }
        else{
            aux = false;
        }
        expect(aux).toBe(true);
    });
    test('Inicio e fim não iguais',()=>{
        let numeros = {};
        numeros.inicio = 0;
        numeros.fim = 10;
        numeros.aleatorio = gerarNumeroAleatorio(numeros);
        var aux;
        if(numeros.aleatorio > -1){
            aux = true;   
        }
        else{
            aux = false;
        }
        expect(aux).toBe(true);
    });
    test('Intervalo é entre 200 a 3000',()=>{
        let numeros = {};
        numeros.inicio = 200;
        numeros.fim = 3000;
        numeros.aleatorio = gerarNumeroAleatorio(numeros);
        var aux;
        if(numeros.aleatorio >= 200 && numeros.aleatorio <= 3000){
            aux = true;   
        }
        else{
            aux = false;
        }
        expect(aux).toBe(true);
    });
})
