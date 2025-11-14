

for(var i = 0; i < 3; i++){
    let letName = "Juliano";
    console.log("letName:", letName)
    console.log("i dentro do for:", i)
}

//console.log(letName); erro

for(var i = 0; i < 3; i++){
    var varName = "Lucas";
    console.log("varName:", varName)
    console.log("i dentro do for:", i)
}

console.log(varName);

console.log("É igual?", "1" === 1 ? "Igual" : "Não é igual" );