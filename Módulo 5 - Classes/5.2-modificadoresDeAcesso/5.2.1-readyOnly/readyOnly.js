"use strict";
// Modificador de Acesso readyonly (Somente leitura)
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    dataNascimento;
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const f1 = new Funcionario(new Date(2026, 4, 3));
const funcionario = {
    nome: 'Alberto',
    cracha: 6789,
};
// funcionario.cracha = 9876;
// Não é possível atribuir a 'cracha' porque é uma propriedade de somente leitura.
