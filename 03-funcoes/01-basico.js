// ============================================
// FUNÇÕES EM JAVASCRIPT
// ============================================

console.log("=== DECLARAÇÃO DE FUNÇÕES ===");

// Função simples
function saudar() {
    console.log("Olá, mundo!");
}

saudar(); // Chamando a função

// Função com parâmetros
function saudarPessoa(nome) {
    console.log(`Olá, ${nome}!`);
}

saudarPessoa("João");
saudarPessoa("Maria");

// Função com retorno
function somar(a, b) {
    return a + b;
}

let resultado = somar(5, 3);
console.log("Soma:", resultado);

// Múltiplos parâmetros
function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;
}

console.log("Média:", calcularMedia(7, 8, 9));

// ============================================
// ARROW FUNCTIONS (funções de seta)
// ============================================

console.log("\n=== ARROW FUNCTIONS ===");

// Forma tradicional
const multiplicar = function(a, b) {
    return a * b;
};

// Arrow function
const multiplicarArrow = (a, b) => {
    return a * b;
};

// Arrow function simplificada (uma linha)
const multiplicarSimples = (a, b) => a * b;

console.log("Multiplicação:", multiplicarSimples(4, 5));

// Um parâmetro (sem parênteses)
const dobrar = x => x * 2;
console.log("Dobro de 7:", dobrar(7));

// ============================================
// PARÂMETROS PADRÃO
// ============================================

console.log("\n=== PARÂMETROS PADRÃO ===");

function criarUsuario(nome, idade = 18, cidade = "São Paulo") {
    console.log(`Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`);
}

criarUsuario("João");
criarUsuario("Maria", 25);
criarUsuario("Pedro", 30, "Rio de Janeiro");

// ============================================
// EXEMPLOS PRÁTICOS
// ============================================

console.log("\n=== EXEMPLOS PRÁTICOS ===");

// 1. Verificar se é par
function ehPar(numero) {
    return numero % 2 === 0;
}

console.log("8 é par?", ehPar(8));
console.log("7 é par?", ehPar(7));

// 2. Calcular área de círculo
function calcularAreaCirculo(raio) {
    const PI = 3.14159;
    return PI * raio ** 2;
}

console.log("Área do círculo (raio 5):", calcularAreaCirculo(5));

// 3. Converter temperatura
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

console.log("25°C em Fahrenheit:", celsiusParaFahrenheit(25));

// 4. Validar idade
function podeDirigir(idade) {
    if (idade >= 18) {
        return "Pode dirigir!";
    } else {
        return `Faltam ${18 - idade} anos`;
    }
}

console.log(podeDirigir(20));
console.log(podeDirigir(15));

// ============================================
// EXERCÍCIOS
// ============================================

console.log("\n=== EXERCÍCIOS ===");

// TODO: Crie as seguintes funções:

// 1. Função que retorna o maior de dois números
function maior(a, b) {
    return a > b ? a : b;
}
console.log("Maior entre 10 e 20:", maior(10, 20));

// 2. Função que calcula desconto
function calcularDesconto(preco, percentualDesconto) {
    let desconto = preco * (percentualDesconto / 100);
    return preco - desconto;
}
console.log("R$100 com 20% desconto:", calcularDesconto(100, 20));

// 3. Função que verifica se string é vazia
const estaVazio = str => str.length === 0;
console.log("String vazia?", estaVazio(""));
console.log("String vazia?", estaVazio("texto"));

// TODO: Faça você mesmo:
// - Função para calcular IMC
// - Função para verificar se número é primo
// - Função para contar vogais em uma string
// - Função para inverter uma string
