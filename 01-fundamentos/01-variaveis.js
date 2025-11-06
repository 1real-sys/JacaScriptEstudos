// ============================================
// VARIÁVEIS EM JAVASCRIPT
// ============================================

// 1. VAR (antiga, evite usar)
var nome = "João";
console.log("Usando var:", nome);

// 2. LET (para variáveis que mudam)
let idade = 25;
console.log("Idade inicial:", idade);
idade = 26; // Pode mudar
console.log("Idade atualizada:", idade);

// 3. CONST (para valores que não mudam)
const PI = 3.14159;
console.log("Valor de PI:", PI);
// PI = 3.14; // ❌ Isso daria erro!

// ============================================
// TIPOS DE DADOS
// ============================================

// String (texto)
let saudacao = "Olá, mundo!";
let aspasSimples = 'Também funciona';
let template = `Posso usar variáveis aqui: ${nome}`;
console.log(template);

// Number (números)
let inteiro = 42;
let decimal = 3.14;
let negativo = -10;
console.log("Números:", inteiro, decimal, negativo);

// Boolean (verdadeiro/falso)
let estaChovendo = false;
let estaSol = true;
console.log("Está chovendo?", estaChovendo);

// Null (vazio intencional)
let valorNulo = null;
console.log("Valor nulo:", valorNulo);

// Undefined (não definido)
let indefinido;
console.log("Indefinido:", indefinido);

// ============================================
// EXERCÍCIOS PRÁTICOS
// ============================================

// TODO: Crie variáveis para armazenar:
// 1. Seu nome completo
// 2. Sua idade
// 3. Se você gosta de JavaScript (true/false)
// 4. Sua comida favorita

// Exemplo de solução (comente e faça o seu):
const meuNome = "Seu Nome Aqui";
const minhaIdade = 20;
const gostoDeJS = true;
const comidaFavorita = "Pizza";

console.log("\n=== MEUS DADOS ===");
console.log(`Nome: ${meuNome}`);
console.log(`Idade: ${minhaIdade}`);
console.log(`Gosta de JS: ${gostoDeJS}`);
console.log(`Comida favorita: ${comidaFavorita}`);
