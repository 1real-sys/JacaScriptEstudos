function calcularImc(altura, peso){
    const imc = peso / (altura * altura);
    return imc;
}

const altura = 1.80;
const peso = 90;

console.log(`Você tem a altura ${altura}m e peso ${peso}kg, portanto seu IMC é ${calcularImc(altura, peso).toFixed(2)}`);

function numPrimo(num){
    
    if(num < 2){
        return false
    }

    let divisor = 2;
        if(num % divisor === 0 ){
            return false;
        }
    return true;
            
}


console.log(numPrimo(7))



function contarVogais(texto) {
    const vogais = "aeiouAEIOU";
    let contador = 0;
    
    for (let i = 0; i < texto.length; i++) {
        if (vogais.includes(texto[i])) {
            contador++;
        }
    }
    
    return contador;
}

console.log("Vogais em 'JavaScript':", contarVogais("JavaScript"));

function inverterString(texto) {
    let invertida = "";
    
    for (let i = texto.length - 1; i >= 0; i--) {
        invertida += texto[i];
    }
    
    return invertida;
}

console.log("Invertida:", inverterString("JavaScript"));  // "tpircSavaJ"
