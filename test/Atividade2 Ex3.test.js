const { test } = require("@jest/globals");

const calcularIMC = require('../lib/Atividade2 Ex3');
describe('Atv2 Ex3',()=>{
    test('Peso e altura válidos',()=>{
        let pessoa = {};
        pessoa.peso = 60;
        pessoa.altura = 1.75;
        var aux = 0;
        var IMC = calcularIMC(pessoa);
        if(IMC.imc > 0){
            aux = 1;
        }
        expect(aux).toBe(1);
    });

    test('Verificar classificação abaixo do peso', () => {
        let pessoa = {};
        pessoa.peso = 50;
        pessoa.altura = 1.75;
        var IMC = calcularIMC(pessoa);
                 
        expect(IMC.classificacao).toBe("abaixo do peso");  

    });

    test('Verificar classificação normal', () => {
        let pessoa = {};
        pessoa.peso = 60;
        pessoa.altura = 1.75;
        var IMC = calcularIMC(pessoa);
                 
        expect(IMC.classificacao).toBe("normal");  

    });

    test('Verificar classificação acima do peso', () => {
        let pessoa = {};
        pessoa.peso = 80;
        pessoa.altura = 1.75;
        var IMC = calcularIMC(pessoa);
                 
        expect(IMC.classificacao).toBe("acima do peso");  

    });

    test('Verificar classificação obeso', () => {
        let pessoa = {};
        pessoa.peso = 95;
        pessoa.altura = 1.75;
        var IMC = calcularIMC(pessoa);
                 
        expect(IMC.classificacao).toBe("obeso");  

    });

    test('Verifica IMC', () => {
        let pessoa = {};
        pessoa.peso = 60;
        pessoa.altura = 1.75;
        var IMC = calcularIMC(pessoa);
                 
        expect(IMC.imc).toBe(19.591836734693878);  

    });


})