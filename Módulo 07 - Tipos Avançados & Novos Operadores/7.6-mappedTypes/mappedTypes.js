"use strict";
// criar outros tipos sem precisar repetir todas as propriedades novamente
// permite criar variações de tipo com propriedades readyonly, optional etc
// type Exemplo<T> = {
//   [K in keyof T]: T[K];
// };
Object.defineProperty(exports, "__esModule", { value: true });
const usuarioMapped = {
    nome: 'Claudio',
    idade: 28,
};
console.log(usuarioMapped);
const usuario2 = {
    nome: 'Alberto',
    idade: 35,
    casado: true
};
// usuario2.nome = 'João'; // Não é possível atribuir a 'nome' porque é uma propriedade de somente leitura.
console.log(usuario2);
