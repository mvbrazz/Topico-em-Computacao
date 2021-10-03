function calcularIMC(pessoa) { 

    var imc = 0;
    let IMCStatus = {};
        IMCStatus.classificacao = "";
        IMCStatus.imc = 0;

        if(pessoa.peso <= 0 || pessoa.altura <= 0){
            IMCStatus.imc = -1;
        }      
        else{
            IMCStatus.imc = pessoa.peso / (pessoa.altura * pessoa.altura);   
            if(IMCStatus.imc < 18.5)
                IMCStatus.classificacao = "abaixo do peso";
            else if(IMCStatus.imc < 25)
                IMCStatus.classificacao = "normal";
            else if(IMCStatus.imc < 30)
                IMCStatus.classificacao = "acima do peso";
            else
                IMCStatus.classificacao = "obeso";  
       
            return IMCStatus;
        }
        return IMCStatus;
 
}

module.exports = calcularIMC;