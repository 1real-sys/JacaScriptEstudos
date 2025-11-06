// ============================================
// ARRAYS (LISTAS) EM JAVASCRIPT
// ============================================

console.log("=== CRIANDO ARRAYS ===");

// Criação básica
let frutas = ["Maçã", "Banana", "Laranja"];
let numeros = [1, 2, 3, 4, 5];
let misto = [1, "texto", true, null]; // Pode misturar tipos

console.log("Frutas:", frutas);
console.log("Números:", numeros);

// Acessar elementos (índice começa em 0)
console.log("\n=== ACESSANDO ELEMENTOS ===");
console.log("Primeira fruta:", frutas[0]);
console.log("Segunda fruta:", frutas[1]);
console.log("Última fruta:", frutas[frutas.length - 1]);

// ============================================
// PROPRIEDADES E MÉTODOS BÁSICOS
// ============================================

console.log("\n=== PROPRIEDADES ===");
console.log("Tamanho do array:", frutas.length);

// Adicionar elementos
console.log("\n=== ADICIONAR ELEMENTOS ===");
frutas.push("Uva");          // Adiciona no final
console.log("Depois do push:", frutas);

frutas.unshift("Morango");   // Adiciona no início
console.log("Depois do unshift:", frutas);

// Remover elementos
console.log("\n=== REMOVER ELEMENTOS ===");
let ultimaFruta = frutas.pop();        // Remove do final
console.log("Removeu:", ultimaFruta);
console.log("Array agora:", frutas);

let primeiraFruta = frutas.shift();    // Remove do início
console.log("Removeu:", primeiraFruta);
console.log("Array agora:", frutas);

// ============================================
// MÉTODOS IMPORTANTES
// ============================================

let nums = [1, 2, 3, 4, 5];

console.log("\n=== MÉTODOS ÚTEIS ===");

// includes - verifica se existe
console.log("Tem número 3?", nums.includes(3));
console.log("Tem número 10?", nums.includes(10));

// indexOf - encontra posição
console.log("Posição do 3:", nums.indexOf(3));
console.log("Posição do 10:", nums.indexOf(10)); // -1 se não existe

// slice - copia parte do array
let parte = nums.slice(1, 4);
console.log("Slice(1,4):", parte);

// splice - remove/adiciona elementos
let cores = ["vermelho", "azul", "verde", "amarelo"];
cores.splice(1, 2, "roxo", "laranja"); // Remove 2 a partir do índice 1 e adiciona
console.log("Depois do splice:", cores);

// join - transforma em string
console.log("Join:", frutas.join(", "));

// reverse - inverte ordem
let invertido = [1, 2, 3, 4, 5].reverse();
console.log("Invertido:", invertido);

// sort - ordena
let desordenado = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("Ordenado:", desordenado.sort((a, b) => a - b));

// ============================================
// PERCORRENDO ARRAYS
// ============================================

console.log("\n=== PERCORRENDO ARRAYS ===");

let animais = ["Cachorro", "Gato", "Pássaro"];

// For tradicional
console.log("For tradicional:");
for (let i = 0; i < animais.length; i++) {
    console.log(`${i}: ${animais[i]}`);
}

// For...of
console.log("\nFor...of:");
for (let animal of animais) {
    console.log(`- ${animal}`);
}

// forEach
console.log("\nforEach:");
animais.forEach((animal, index) => {
    console.log(`${index}: ${animal}`);
});

// ============================================
// EXERCÍCIOS PRÁTICOS
// ============================================

console.log("\n=== EXERCÍCIOS ===");

// 1. Criar lista de compras
let compras = ["Arroz", "Feijão", "Macarrão"];
compras.push("Açúcar");
compras.push("Café");
console.log("Lista de compras:", compras);

// 2. Somar todos os números
let valores = [10, 20, 30, 40, 50];
let soma = 0;
for (let valor of valores) {
    soma += valor;
}
console.log("Soma total:", soma);

// 3. Encontrar o maior número
let numArray = [5, 12, 8, 130, 44];
let maior = numArray[0];
for (let num of numArray) {
    if (num > maior) {
        maior = num;
    }
}
console.log("Maior número:", maior);

// TODO: Faça você mesmo:
// - Criar um array de suas músicas favoritas
// - Filtrar apenas números pares
// - Criar uma função que remove duplicatas
// - Criar um sistema de notas (média, maior, menor)
