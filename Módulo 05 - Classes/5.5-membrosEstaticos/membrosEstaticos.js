"use strict";
// Verificar regras de negócio
// Verificar restrição de outra classe
// Implementar Factory method #60 descrição do vídeo
// Abstract factory #60 descrição do vídeo
// Quando a propriedade não deve mudar
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    static contratacoes = 0; // Propriedade estática
    nome;
    funcao;
    constructor(nome, funcao) {
        this.nome = nome;
        this.funcao = funcao;
        Funcionario.contratacoes++;
    }
}
const funcionario1 = new Funcionario('nome1', 'Adminstrativo');
const funcionario2 = new Funcionario('nome2', 'Financeiro');
console.log(`Número de instâncias de Funcionário: ${Funcionario.contratacoes}`);
// Método estático
class Funcionario2 {
    static contratacoes = 0; // Propriedade estática
    nome;
    funcao;
    constructor(nome, funcao) {
        this.nome = nome;
        this.funcao = funcao;
        Funcionario2.contratacoes++;
    }
    static retornarContratacoes() {
        return this.contratacoes;
    }
}
const funcionario01 = new Funcionario2('nome1', 'Adminstrativo');
const funcionario02 = new Funcionario2('nome2', 'Adminstrativo');
const funcionario03 = new Funcionario2('nome3', 'Adminstrativo');
// Chamada de método estático
console.log(`Número de instâncias de Funcionário2: ${Funcionario2.retornarContratacoes()}`);
class Dog {
    nome;
    idade;
    raca;
    static cachorrosVendidos = 0;
    constructor(nome, idade, raca) {
        this.nome = nome;
        this.idade = idade;
        this.raca = raca;
        Dog.cachorrosVendidos++;
    }
}
const dog1 = new Dog('Bob', 3, ['Husk']);
const dog2 = new Dog('Bolinha', 1, ['Caramelo']);
const dog3 = new Dog('Spike', 4, ['Dalmata']);
const dog4 = new Dog('Scooby', 5, ['Pastor Alemão']);
console.log(`Quantidade de cachorros vendidos: ${Dog.cachorrosVendidos}`);
