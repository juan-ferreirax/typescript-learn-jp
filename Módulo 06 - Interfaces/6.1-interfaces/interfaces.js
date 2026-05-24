"use strict";
// Contrato sintático;
// Entidade deve obedecer;
// Definem propriedades, métodos e eventos;
// Declaram os membros;
// Fornece uma estrutura padrão para as classes derivadas seguirem;
// Parâmetros 'opcionais' na interface (?) 
// permitem a criação de objetos sem esse atributo em especifíco;
// Parâmetros 'readyonly' na interface não permite redefinição desse atributos nos objetos;
// Implements keyword usada quando uma classe vai implementar uma interface
Object.defineProperty(exports, "__esModule", { value: true });
const pessoaType = {
    nome: 'Pedro',
    sobrenome: 'Santos'
};
const pessoaInterface = {
    nome: 'Augusto',
    sobrenome: 'Lemos'
};
function exibirNome(pessoa) {
    return `
    Nome: ${pessoa.nome}
    Sobrenome: ${pessoa.sobrenome}
    `;
}
console.log(pessoaType);
console.log(exibirNome(pessoaInterface));
class Gato {
    nome;
    idade;
    estarVivo;
    constructor(nome, idade, estarVivo) {
        this.nome = nome;
        this.idade = idade;
        this.estarVivo = estarVivo;
    }
    comer(comida) {
        console.log(`O gato ${this.nome} está comendo ${comida}`);
    }
}
const gato1 = new Gato('Tusk', 3, true);
console.log(gato1);
gato1.comer('Peixe');
