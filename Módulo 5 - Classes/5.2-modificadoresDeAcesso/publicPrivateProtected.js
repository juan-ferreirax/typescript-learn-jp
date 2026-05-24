"use strict";
// public, private, protected
Object.defineProperty(exports, "__esModule", { value: true });
// public, é o padrão quando não definido explicitamente
class Estudante {
    nome;
    matricula;
}
const estudante = new Estudante();
estudante.nome = 'Paulo';
estudante.matricula = 9876;
console.log(`Nome: ${estudante.nome}, Matrícula: ${estudante.matricula}.`);
// Private
class Estudante_02 {
    nome;
    matricula;
    idade;
    constructor(nome, matricula, idade) {
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
    }
    informacoesAluno() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Idade: ${this.idade}`);
    }
}
const estudante_02 = new Estudante_02('Washington', 9876, 22);
estudante_02.informacoesAluno(); // Acesso ao atributo private via método public
// console.log(estudante_02.idade); // A propriedade 'idade' é acessível apenas na classe 'Estudante_02'.
// Protected
class Pessoa {
    nome;
    idade;
    matricula;
    constructor(nome, idade, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }
    exibirInformacoes() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Idade: ${this.idade}`);
        if (this.matricula != undefined) {
            console.log(`Matrícula: ${this.matricula}`);
        }
    }
}
class Estudante_03 extends Pessoa {
    constructor(nome, idade, matricula) {
        super(nome, idade);
        this.matricula = matricula;
    }
}
const estudante_03 = new Estudante_03('Josh', 23);
const estudante_04 = new Estudante_03('Lohen', 25, 5432);
estudante_03.exibirInformacoes();
estudante_04.exibirInformacoes();
