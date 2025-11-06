// ============================================
// IF / ELSE - ESTRUTURAS CONDICIONAIS
// ============================================

console.log("=== IF / ELSE BÁSICO ===");

// Exemplo 1: Verificar maioridade
let idade = 20;

if (idade >= 18) {
    console.log("Você é maior de idade!");
} else {
    console.log("Você é menor de idade.");
}

// Exemplo 2: Múltiplas condições
let nota = 7.5;

if (nota >= 9) {
    console.log("Excelente!");
} else if (nota >= 7) {
    console.log("Bom!");
} else if (nota >= 5) {
    console.log("Regular");
} else {
    console.log("Reprovado");
}

// ============================================
// OPERADOR TERNÁRIO (forma curta)
// ============================================

console.log("\n=== OPERADOR TERNÁRIO ===");

let temperatura = 25;
let clima = temperatura > 25 ? "Quente" : "Frio";
console.log(`Temperatura: ${temperatura}°C - ${clima}`);

// Equivalente a:
// if (temperatura > 25) {
//     clima = "Quente";
// } else {
//     clima = "Frio";
// }

// ============================================
// COMBINANDO CONDIÇÕES
// ============================================

console.log("\n=== CONDIÇÕES COMPOSTAS ===");

let temCNH = true;
let idadeMotorista = 25;

if (idadeMotorista >= 18 && temCNH) {
    console.log("Pode dirigir!");
} else if (idadeMotorista >= 18 && !temCNH) {
    console.log("Tem idade mas precisa tirar CNH");
} else {
    console.log("Não pode dirigir ainda");
}

// ============================================
// EXERCÍCIOS PRÁTICOS
// ============================================

console.log("\n=== EXERCÍCIOS ===");

// 1. Verificar se um número é positivo, negativo ou zero
let numero = -5;
if (numero > 0) {
    console.log("Positivo");
} else if (numero < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 2. Calculadora simples
let num1 = 10;
let num2 = 5;
let operacao = "+";

if (operacao === "+") {
    console.log("Resultado:", num1 + num2);
} else if (operacao === "-") {
    console.log("Resultado:", num1 - num2);
} else if (operacao === "*") {
    console.log("Resultado:", num1 * num2);
} else if (operacao === "/") {
    console.log("Resultado:", num1 / num2);
} else {
    console.log("Operação inválida");
}

// TODO: Faça você mesmo:
// - Sistema de login (usuario === "admin" && senha === "123")
// - Conversor de notas (A, B, C, D, F)
// - Verificar se um ano é bissexto
