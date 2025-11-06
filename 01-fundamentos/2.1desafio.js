const nota1 = 7.1;
const nota2 = 6.3;
const nota3 = 8.0;

const media = (nota1 + nota2 + nota3) / 3;

console.log(`A média é: ${media.toFixed(2)}`);  // 7.13


let idadePessoa = 18;
const temCNH = true;
const podeDirigir = idadePessoa >= 18 && temCNH;

console.log(`Pode dirigir?: ${podeDirigir}`);

const peso = 80;
const altura = 1.8;
const imc = peso / (altura**2);

console.log(`IMC : ${imc.toFixed(2)}`); 