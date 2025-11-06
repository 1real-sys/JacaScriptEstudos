const usuario = "admin";
const senha = "123";

if (usuario === "admin" && senha === "123") {
    console.log("Login bem-sucedido!");
} else {
    console.log("Usuário ou senha inválidos");
}

let nota = 10.0;
if(nota >=9.5)  {
    console.log(nota = "A");
} else if(nota >= 8.0) {
    console.log(nota = "B");
} else if(nota >= 6.0) {
    console.log(nota = "C");
} else if (nota >= 4.0) {
    console.log(nota = "D");
} else {
    console.log(nota = "F");
}
console.log("Nota convertida:", nota);