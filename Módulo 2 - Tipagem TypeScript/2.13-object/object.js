"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Uso simples do tipo object (Objeto)
const pessoa = {
    nome: 'Juan',
    sobrenome: 'Ferreira',
    idade: '20',
    cargo: 'Software Developer',
};
console.log(pessoa);
// Object como parâmetro de função, objeto funcionario como parâmetro da função onbording01
function onbording01(funcionario) {
    return `Seja muito bem vindo(a) ${funcionario.nome}!`;
}
;
console.log(onbording01({ nome: 'Juan Ferreira' }));
;
function onbording02(pessoa) {
    return `Seja bem vindo(a) ${pessoa.nome}! Sua função aqui será de ${pessoa.funcao}`;
}
;
console.log(onbording02({ nome: 'Juan Ferreira', funcao: 'Software Developer' }));
function onbording03(pessoa) {
    return (`Seja bem vindo(a) ${pessoa.nome}! Sua função aqui será de ${pessoa.funcao}. A linguagem com a qual você irá trabalhar será ${pessoa.linguagem}`);
}
console.log(onbording03({ nome: 'Juan Ferreira', funcao: 'Software Developer', linguagem: 'JS/TS' }));
function onbording04(pessoa) {
    return (`Seja bem vindo(a) ${pessoa.nome}! Sua função aqui será de ${pessoa.funcao}. A linguagem com a qual você irá trabalhar será ${pessoa.linguagem}.`);
}
console.log(onbording04({ nome: 'Juan Ferreira', funcao: 'Software Developer', linguagem: 'JS/TS' }));
function onbording05(pessoa) {
    return (`Seja bem vindo(a) ${pessoa.nome}! Sua função aqui será de ${pessoa.funcao}. A linguagem com a qual você irá trabalhar será ${pessoa.linguagem}. Seu e-mail será: ${pessoa.email}`);
}
;
console.log(onbording05({ nome: 'Juan Ferreira', funcao: 'Software Developer', linguagem: 'JS/TS', email: 'jp@gmail.com' }));
;
;
const filho = {
    nome: 'Juan',
    sobrenome: 'Ferreira',
    idade: 20
};
console.log(filho);
const usuario = {
    nome: 'Juan Ferreira',
    email: 'userjp@gmail.com'
};
const admin = {
    nome: 'Willian Lawrense',
    email: 'adminwl@gmail.com',
    admin: true
};
function acessarSistema(usuario) {
    return usuario;
}
console.log(acessarSistema(usuario));
console.log(acessarSistema(admin));
