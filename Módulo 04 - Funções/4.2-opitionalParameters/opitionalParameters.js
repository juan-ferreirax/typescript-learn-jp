"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Optional Parameter (Parâmetros Opicionais)
// Tem que vir sempre depois de parâmetros obrigatórios na definição de uma função
const informarDadosPessoais = (nome, id, email) => {
    if (email != undefined) {
        console.log(nome, id, email);
    }
    else {
        console.log(nome, id);
    }
};
informarDadosPessoais('juan', 20);
informarDadosPessoais('juan', 20, 'userjp@gmail.com');
const pessoa = {
    nome: 'Juan',
    sobrenome: 'Ferreira'
};
console.log(pessoa);
