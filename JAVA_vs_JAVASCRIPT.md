# ☕ JAVA vs 🟨 JAVASCRIPT - Comparação Direta

## ⚠️ IMPORTANTE: São linguagens DIFERENTES!

Apesar do nome parecido, Java e JavaScript são **completamente diferentes**:
- **Java**: Linguagem compilada, orientada a objetos, tipagem estática
- **JavaScript**: Linguagem interpretada, multi-paradigma, tipagem dinâmica

**Analogia:** Java está para JavaScript assim como Carro está para Carpete (só o nome que é parecido! 😄)

---

## 📝 SINTAXE BÁSICA

### 1. Imprimir no Console

```java
// JAVA
System.out.println("Hello World");
System.out.print("Sem quebra de linha");
```

```javascript
// JAVASCRIPT
console.log("Hello World");
console.log("Valor:", variavel);  // Pode passar múltiplos argumentos
```

---

## 🔤 VARIÁVEIS

### 2. Declaração de Variáveis

```java
// JAVA - Tipagem estática (precisa declarar o tipo)
int idade = 25;
String nome = "João";
double preco = 19.99;
boolean ativo = true;
final double PI = 3.14159;  // Constante

// Não pode mudar o tipo!
idade = "25";  // ❌ ERRO!
```

```javascript
// JAVASCRIPT - Tipagem dinâmica (não precisa declarar tipo)
let idade = 25;
let nome = "João";
let preco = 19.99;
let ativo = true;
const PI = 3.14159;  // Constante

// Pode mudar o tipo! (mas não é recomendado)
idade = "25";  // ✅ Funciona (mas evite isso)
```

---

## 🔢 TIPOS DE DADOS

### 3. Tipos Primitivos

```java
// JAVA
int numero = 42;
long numeroGrande = 1000000L;
float decimal = 3.14f;
double decimalPreciso = 3.14159;
char letra = 'A';
boolean verdadeiro = true;
String texto = "Olá";  // ⚠️ String é CLASSE (não primitivo!), mas parece primitivo
```

```javascript
// JAVASCRIPT (apenas 7 tipos primitivos)
let numero = 42;                    // number
let decimal = 3.14;                 // number (mesmo tipo!)
let texto = "Olá";                  // string
let verdadeiro = true;              // boolean
let nulo = null;                    // null
let indefinido = undefined;         // undefined
let simbolo = Symbol("id");         // symbol (ES6)
```

---

## ➕ OPERADORES

### 4. Operadores Matemáticos

```java
// JAVA
int a = 10;
int b = 3;
int soma = a + b;           // 13
int subtracao = a - b;      // 7
int multiplicacao = a * b;  // 30
int divisao = a / b;        // 3 (divisão inteira!)
int resto = a % b;          // 1
double divisaoReal = (double) a / b;  // 3.333... (precisa cast)
```

```javascript
// JAVASCRIPT
let a = 10;
let b = 3;
let soma = a + b;           // 13
let subtracao = a - b;      // 7
let multiplicacao = a * b;  // 30
let divisao = a / b;        // 3.333... (sempre retorna decimal)
let resto = a % b;          // 1
let potencia = a ** b;      // 1000 (10³)
```

---

## 🔀 CONDICIONAIS

### 5. If/Else

```java
// JAVA
int idade = 20;

if (idade >= 18) {
    System.out.println("Maior de idade");
} else if (idade >= 13) {
    System.out.println("Adolescente");
} else {
    System.out.println("Criança");
}

// Operador ternário
String resultado = (idade >= 18) ? "Adulto" : "Menor";
```

```javascript
// JAVASCRIPT (praticamente igual!)
let idade = 20;

if (idade >= 18) {
    console.log("Maior de idade");
} else if (idade >= 13) {
    console.log("Adolescente");
} else {
    console.log("Criança");
}

// Operador ternário
let resultado = (idade >= 18) ? "Adulto" : "Menor";
```

### 6. Switch

```java
// JAVA
int dia = 3;
String nomeDia;

switch (dia) {
    case 1:
        nomeDia = "Segunda";
        break;
    case 2:
        nomeDia = "Terça";
        break;
    case 3:
        nomeDia = "Quarta";
        break;
    default:
        nomeDia = "Inválido";
        break;
}
```

```javascript
// JAVASCRIPT (igual!)
let dia = 3;
let nomeDia;

switch (dia) {
    case 1:
        nomeDia = "Segunda";
        break;
    case 2:
        nomeDia = "Terça";
        break;
    case 3:
        nomeDia = "Quarta";
        break;
    default:
        nomeDia = "Inválido";
        break;
}
```

---

## 🔁 LOOPS

### 7. For Loop

```java
// JAVA
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}

// For-each
int[] numeros = {1, 2, 3, 4, 5};
for (int num : numeros) {
    System.out.println(num);
}
```

```javascript
// JAVASCRIPT
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-of (equivalente ao for-each)
let numeros = [1, 2, 3, 4, 5];
for (let num of numeros) {
    console.log(num);
}

// forEach (método de array)
numeros.forEach(num => console.log(num));
```

### 8. While

```java
// JAVA
int i = 0;
while (i < 5) {
    System.out.println(i);
    i++;
}

// Do-While
do {
    System.out.println(i);
    i++;
} while (i < 5);
```

```javascript
// JAVASCRIPT (igual!)
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-While
do {
    console.log(i);
    i++;
} while (i < 5);
```

---

## 🔧 FUNÇÕES/MÉTODOS

### 9. Declaração de Funções

```java
// JAVA - Métodos em classes
public class MinhaClasse {
    
    // Método sem retorno
    public void saudar() {
        System.out.println("Olá!");
    }
    
    // Método com parâmetros e retorno
    public int somar(int a, int b) {
        return a + b;
    }
    
    // Método estático
    public static double calcularMedia(double a, double b) {
        return (a + b) / 2;
    }
}
```

```javascript
// JAVASCRIPT - Funções standalone

// Declaração tradicional
function saudar() {
    console.log("Olá!");
}

// Função com parâmetros e retorno
function somar(a, b) {
    return a + b;
}

// Arrow function (ES6)
const calcularMedia = (a, b) => (a + b) / 2;

// Function expression
const multiplicar = function(a, b) {
    return a * b;
};
```

---

## 📚 ARRAYS/LISTAS

### 10. Arrays

```java
// JAVA
int[] numeros = {1, 2, 3, 4, 5};
String[] frutas = new String[3];
frutas[0] = "Maçã";
frutas[1] = "Banana";
frutas[2] = "Laranja";

// Tamanho fixo!
System.out.println(numeros.length);  // 5

// ArrayList (tamanho dinâmico)
ArrayList<String> lista = new ArrayList<>();
lista.add("Item 1");
lista.add("Item 2");
lista.remove(0);
```

```javascript
// JAVASCRIPT - Arrays são sempre dinâmicos
let numeros = [1, 2, 3, 4, 5];
let frutas = ["Maçã", "Banana", "Laranja"];

// Tamanho dinâmico!
console.log(numeros.length);  // 5

// Métodos úteis
frutas.push("Uva");        // Adiciona no final
frutas.pop();              // Remove do final
frutas.shift();            // Remove do início
frutas.unshift("Morango"); // Adiciona no início
```

---

## 🎯 OBJETOS/CLASSES

### 11. Orientação a Objetos

```java
// JAVA - Precisa de classe
public class Pessoa {
    // Atributos
    private String nome;
    private int idade;
    
    // Construtor
    public Pessoa(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // Getters e Setters
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    // Método
    public void apresentar() {
        System.out.println("Olá, sou " + nome);
    }
}

// Uso
Pessoa pessoa = new Pessoa("João", 25);
pessoa.apresentar();
```

```javascript
// JAVASCRIPT - Objeto literal (mais simples)
let pessoa = {
    nome: "João",
    idade: 25,
    
    apresentar() {
        console.log(`Olá, sou ${this.nome}`);
    }
};

pessoa.apresentar();

// OU classe (ES6+)
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    apresentar() {
        console.log(`Olá, sou ${this.nome}`);
    }
}

let pessoa2 = new Pessoa("Maria", 30);
pessoa2.apresentar();
```

---

## 🆕 DIFERENÇAS IMPORTANTES

### 12. String

```java
// JAVA
String nome = "João";
String sobrenome = "Silva";
String completo = nome + " " + sobrenome;  // Concatenação
int tamanho = nome.length();
char primeira = nome.charAt(0);
String maiuscula = nome.toUpperCase();
```

```javascript
// JAVASCRIPT
let nome = "João";
let sobrenome = "Silva";
let completo = nome + " " + sobrenome;     // Concatenação
let completo2 = `${nome} ${sobrenome}`;    // Template string (melhor!)
let tamanho = nome.length;                 // Propriedade, não método!
let primeira = nome[0];                    // Acesso direto
let maiuscula = nome.toUpperCase();
```

### 13. Null vs Undefined

```java
// JAVA - Apenas null
String texto = null;
// undefined não existe!
```

```javascript
// JAVASCRIPT - null E undefined
let texto = null;          // Vazio intencional
let indefinido;            // Não inicializado (undefined)
let naoExiste = undefined; // Raramente usado assim
```

---

## 📊 TABELA RESUMO

| Recurso | Java | JavaScript |
|---------|------|------------|
| **Tipagem** | Estática (obrigatória) | Dinâmica (opcional) |
| **Execução** | Compilada (JVM) | Interpretada (Node/Browser) |
| **Print** | `System.out.println()` | `console.log()` |
| **Variável** | `int x = 10;` | `let x = 10;` |
| **Constante** | `final int X = 10;` | `const X = 10;` |
| **Array** | `int[] arr = {1,2,3};` | `let arr = [1,2,3];` |
| **Função** | Método em classe | Função standalone |
| **Objeto** | Precisa de classe | Objeto literal OK |
| **String** | Imutável | Imutável |
| **Main** | `public static void main()` | Não precisa! |
| **Ponto e vírgula** | Obrigatório | Opcional (mas use!) |

---

## 🎯 EXEMPLO COMPLETO LADO A LADO

### JAVA:
```java
public class Calculadora {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        
        System.out.println("Soma: " + somar(a, b));
        System.out.println("Média: " + calcularMedia(a, b));
    }
    
    public static int somar(int x, int y) {
        return x + y;
    }
    
    public static double calcularMedia(int x, int y) {
        return (x + y) / 2.0;
    }
}
```

### JAVASCRIPT:
```javascript
// Não precisa de classe ou main!
let a = 10;
let b = 5;

console.log("Soma:", somar(a, b));
console.log("Média:", calcularMedia(a, b));

function somar(x, y) {
    return x + y;
}

function calcularMedia(x, y) {
    return (x + y) / 2;
}
```

---

## 💡 CONCLUSÃO

**Semelhanças:**
- ✅ Sintaxe de if/else, loops, switch
- ✅ Operadores matemáticos e lógicos
- ✅ Conceitos de OOP (classes, objetos)

**Diferenças:**
- ❌ Java é **mais rígido** (tipagem estática)
- ❌ JavaScript é **mais flexível** (tipagem dinâmica)
- ❌ Java roda na **JVM**, JavaScript no **navegador/Node.js**
- ❌ Java é **compilado**, JavaScript é **interpretado**

**Se você sabe Java, vai achar JavaScript FÁCIL! Mas cuidado com as diferenças! 😄**
