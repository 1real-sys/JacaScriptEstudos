for(var i = 0; i <=10 ; i++){
    let linha = "";
    for(var j = 0; j < i; j++){
        linha += "*";
    }
    console.log(linha)
}




for(numero = 2; numero <= 50; numero++){
    let ehPrimo = true;
    for( let divisor = 2; divisor < numero; divisor++ ){
        if(numero % divisor === 0){
            ehPrimo = false;
            break
        }
    }

    if(ehPrimo){
        console.log(numero + " é primo")
    }
}
