for(var i = 0; i <=10 ; i++){
    let linha = "";
    for(var j = 0; j < i; j++){
        linha += "*";
    }
    console.log(linha)
}




for(var numero = 2; numero <= 50; numero++){
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

let numero1 = 5
let fatorial = 1
let contador = numero1;

while(contador > 1){
    fatorial *= contador;
    contador--;

}

console.log(`Fatorial de ${numero1} = ${fatorial}`);



for(let t = 1; t <= 100; t++){
    if(t % 5 ===0 && t % 3 === 0){
        console.log(t + " FizzBuzz");
    } else if (t % 5 === 0){
        console.log(t + " Buzz");
    } else if (t % 3 === 0){
        console.log(t + " Fizz");
    }else{
        console.log( t + " Not a fizz or buzz");
    }
}
