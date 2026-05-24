"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Herança
class Animal {
    mover(distancia = 0) {
        console.log(`Ele moveu ${distancia} metros.`);
    }
}
class Dog extends Animal {
    latir() {
        console.log('Au Au');
    }
}
const dog = new Dog();
dog.mover(10);
dog.latir();
// Herança com atributos privados
class Pessoa {
    nome;
    sobrenome;
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    retornarNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    apresentarPessoa() {
        return `Olá, meu nome é ${this.nome} ${this.sobrenome}`;
    }
}
class Funcionario extends Pessoa {
    funcao;
    constructor(nome, sobrenome, funcao) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }
    apresentaFuncionario() {
        return `${super.apresentarPessoa()} e sou ${this.funcao}`;
    }
}
const funcionario = new Funcionario('Juan', 'Ferreira', 'Desenvolvedor de Software');
console.log(funcionario.apresentaFuncionario());
