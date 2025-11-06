// ============================================
// LOOPS (LAÇOS DE REPETIÇÃO)
// ============================================

console.log("=== FOR LOOP ===");

// Exemplo básico: contar de 1 a 5
for (let i = 1; i <= 5; i++) {
    console.log(`Contagem: ${i}`);
}

// Exemplo: tabuada
console.log("\n=== TABUADA DO 5 ===");
for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}

// ============================================
// WHILE LOOP
// ============================================

console.log("\n=== WHILE LOOP ===");

let contador = 1;
while (contador <= 5) {
    console.log(`While: ${contador}`);
    contador++;
}

// ============================================
// DO-WHILE LOOP
// ============================================

console.log("\n=== DO-WHILE LOOP ===");

let numero = 1;
do {
    console.log(`Do-While: ${numero}`);
    numero++;
} while (numero <= 5);

// ============================================
// BREAK e CONTINUE
// ============================================

console.log("\n=== BREAK (parar o loop) ===");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Encontrou o 5, parando!");
        break; // Para o loop
    }
    console.log(i);
}

console.log("\n=== CONTINUE (pular iteração) ===");
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Pulando o 3...");
        continue; // Pula para próxima iteração
    }
    console.log(i);
}

// ============================================
// LOOPS COM ARRAYS
// ============================================

console.log("\n=== PERCORRENDO ARRAYS ===");

let frutas = ["Maçã", "Banana", "Laranja", "Uva"];

// Método 1: for tradicional
console.log("For tradicional:");
for (let i = 0; i < frutas.length; i++) {
    console.log(`${i + 1}. ${frutas[i]}`);
}

// Método 2: for...of (mais moderno)
console.log("\nFor...of:");
for (let fruta of frutas) {
    console.log(`- ${fruta}`);
}

// Método 3: forEach (método de array)
console.log("\nforEach:");
frutas.forEach((fruta, index) => {
    console.log(`${index + 1}. ${fruta}`);
});

// ============================================
// EXERCÍCIOS PRÁTICOS
// ============================================

console.log("\n=== EXERCÍCIOS ===");

// 1. Somar números de 1 a 100
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log("Soma de 1 a 100:", soma);

// 2. Números pares de 0 a 20
console.log("\nNúmeros pares:");
for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

// 3. Contagem regressiva
console.log("\nContagem regressiva:");
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("🚀 DECOLAR!");

// TODO: Faça você mesmo:
// - Criar um padrão de asteriscos (*)
// - Encontrar números primos até 50
// - Calcular fatorial de um número
// - FizzBuzz (1-100: múltiplos de 3="Fizz", 5="Buzz", ambos="FizzBuzz")
