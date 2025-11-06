// ============================================
// OPERADORES ARITMÉTICOS
// ============================================

let a = 10;
let b = 3;

console.log("=== OPERADORES ARITMÉTICOS ===");
console.log("Soma:", a + b);           // 13
console.log("Subtração:", a - b);      // 7
console.log("Multiplicação:", a * b);  // 30
console.log("Divisão:", a / b);        // 3.333...
console.log("Resto (módulo):", a % b); // 1
console.log("Potência:", a ** b);      // 1000

// Incremento e Decremento
let contador = 0;
contador++; // contador = contador + 1
console.log("Incremento:", contador);  // 1
contador--;
console.log("Decremento:", contador);  // 0

// ============================================
// OPERADORES DE COMPARAÇÃO
// ============================================

console.log("\n=== OPERADORES DE COMPARAÇÃO ===");
console.log("10 == '10':", 10 == '10');     // true (compara valor)
console.log("10 === '10':", 10 === '10');   // false (compara valor E tipo)
console.log("10 != '10':", 10 != '10');     // false
console.log("10 !== '10':", 10 !== '10');   // true
console.log("5 > 3:", 5 > 3);               // true
console.log("5 < 3:", 5 < 3);               // false
console.log("5 >= 5:", 5 >= 5);             // true
console.log("5 <= 4:", 5 <= 4);             // false

// ============================================
// OPERADORES LÓGICOS
// ============================================

console.log("\n=== OPERADORES LÓGICOS ===");
let temDinheiro = true;
let temTempo = false;

console.log("AND (&&):", temDinheiro && temTempo);  // false (ambos precisam ser true)
console.log("OR (||):", temDinheiro || temTempo);   // true (apenas um precisa ser true)
console.log("NOT (!):", !temDinheiro);              // false (inverte)

// ============================================
// EXERCÍCIOS
// ============================================

console.log("\n=== EXERCÍCIOS ===");

// 1. Calcule a área de um retângulo (base * altura)
let base = 5;
let altura = 10;
let area = base * altura;
console.log("Área do retângulo:", area);

// 2. Verifique se um número é par (use o operador %)
let numero = 8;
let ehPar = numero % 2 === 0;
console.log(`${numero} é par?`, ehPar);

// 3. Verifique se uma pessoa pode dirigir (idade >= 18)
let idadePessoa = 20;
let podeDirigir = idadePessoa >= 18;
console.log("Pode dirigir?", podeDirigir);

// TODO: Agora faça você mesmo:
// - Calcule a média de 3 notas
// - Verifique se alguém é maior de idade E tem CNH (use &&)
// - Calcule o IMC (peso / altura²)
