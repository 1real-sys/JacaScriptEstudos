// ============================================
// OBJETOS EM JAVASCRIPT
// ============================================

console.log("=== CRIANDO OBJETOS ===");

// Objeto literal (mais comum)
let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "São Paulo",
    estudante: true
};

console.log(pessoa);

// Acessar propriedades
console.log("\n=== ACESSANDO PROPRIEDADES ===");
console.log("Nome:", pessoa.nome);           // Notação de ponto
console.log("Idade:", pessoa["idade"]);      // Notação de colchetes

// Modificar propriedades
pessoa.idade = 26;
pessoa.profissao = "Desenvolvedor";          // Adicionar nova propriedade
console.log("Pessoa atualizada:", pessoa);

// Deletar propriedades
delete pessoa.estudante;
console.log("Depois de deletar:", pessoa);

// ============================================
// OBJETOS COM MÉTODOS (FUNÇÕES)
// ============================================

console.log("\n=== OBJETOS COM MÉTODOS ===");

let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2023,
    cor: "Prata",
    
    // Método (função dentro do objeto)
    ligar: function() {
        console.log("🚗 Carro ligado!");
    },
    
    // Forma mais moderna (sem function)
    desligar() {
        console.log("🚗 Carro desligado!");
    },
    
    // Método que usa propriedades do objeto
    mostrarInfo() {
        console.log(`${this.marca} ${this.modelo} (${this.ano}) - ${this.cor}`);
    }
};

carro.ligar();
carro.desligar();
carro.mostrarInfo();

// ============================================
// THIS - REFERÊNCIA AO PRÓPRIO OBJETO
// ============================================

console.log("\n=== USANDO THIS ===");

let conta = {
    titular: "Maria",
    saldo: 1000,
    
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor}. Saldo atual: R$${this.saldo}`);
    },
    
    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente!");
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor}. Saldo atual: R$${this.saldo}`);
        }
    },
    
    verSaldo() {
        console.log(`Saldo de ${this.titular}: R$${this.saldo}`);
    }
};

conta.verSaldo();
conta.depositar(500);
conta.sacar(300);
conta.sacar(2000);

// ============================================
// OBJETOS ANINHADOS
// ============================================

console.log("\n=== OBJETOS ANINHADOS ===");

let usuario = {
    nome: "Pedro",
    idade: 30,
    endereco: {
        rua: "Av. Paulista",
        numero: 1000,
        cidade: "São Paulo",
        estado: "SP"
    },
    contatos: {
        email: "pedro@email.com",
        telefone: "11-99999-9999"
    }
};

console.log("Cidade:", usuario.endereco.cidade);
console.log("Email:", usuario.contatos.email);

// ============================================
// ARRAYS DE OBJETOS
// ============================================

console.log("\n=== ARRAYS DE OBJETOS ===");

let produtos = [
    { id: 1, nome: "Notebook", preco: 3000 },
    { id: 2, nome: "Mouse", preco: 50 },
    { id: 3, nome: "Teclado", preco: 150 }
];

console.log("Produtos:");
produtos.forEach(produto => {
    console.log(`- ${produto.nome}: R$${produto.preco}`);
});

// Buscar produto específico
let produtoBuscado = produtos.find(p => p.id === 2);
console.log("Produto encontrado:", produtoBuscado);

// ============================================
// DESTRUCTURING (DESESTRUTURAÇÃO)
// ============================================

console.log("\n=== DESTRUCTURING ===");

let livro = {
    titulo: "JavaScript",
    autor: "Fulano",
    ano: 2023,
    paginas: 300
};

// Extrair propriedades
const { titulo, autor, ano } = livro;
console.log(`${titulo} por ${autor} (${ano})`);

// ============================================
// EXERCÍCIOS PRÁTICOS
// ============================================

console.log("\n=== EXERCÍCIOS ===");

// 1. Criar objeto aluno com notas
let aluno = {
    nome: "Carlos",
    matricula: "2023001",
    notas: [7.5, 8.0, 9.0],
    
    calcularMedia() {
        let soma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return soma / this.notas.length;
    },
    
    situacao() {
        let media = this.calcularMedia();
        return media >= 7 ? "Aprovado" : "Reprovado";
    }
};

console.log(`Aluno: ${aluno.nome}`);
console.log(`Média: ${aluno.calcularMedia()}`);
console.log(`Situação: ${aluno.situacao()}`);

// 2. Sistema de e-commerce
let carrinho = {
    itens: [],
    
    adicionar(produto) {
        this.itens.push(produto);
        console.log(`${produto.nome} adicionado ao carrinho`);
    },
    
    calcularTotal() {
        return this.itens.reduce((total, item) => total + item.preco, 0);
    },
    
    mostrarCarrinho() {
        console.log("\n=== CARRINHO ===");
        this.itens.forEach(item => {
            console.log(`- ${item.nome}: R$${item.preco}`);
        });
        console.log(`Total: R$${this.calcularTotal()}`);
    }
};

carrinho.adicionar({ nome: "Camiseta", preco: 50 });
carrinho.adicionar({ nome: "Calça", preco: 120 });
carrinho.mostrarCarrinho();

// TODO: Faça você mesmo:
// - Criar objeto filme (titulo, diretor, ano, avaliacoes[])
// - Sistema de biblioteca (livros, emprestar, devolver)
// - Calculadora como objeto (somar, subtrair, etc)
