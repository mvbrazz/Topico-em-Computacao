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

})