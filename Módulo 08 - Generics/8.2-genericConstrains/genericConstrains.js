"use strict";
// Restrição de objetos
Object.defineProperty(exports, "__esModule", { value: true });
;
// T extendendo Pessoa, garante que o tipo genérico T
// esteja em conformidade com a interface Pessoa
const obterMaiorIdade = (pessoas, idade) => {
    return pessoas.filter((pessoa) => pessoa.idade > idade);
};
const pessoas = [
    { nome: 'Anderson', idade: 35 },
    { nome: 'Mario', idade: 28 },
    { nome: 'Cinthya', idade: 34 },
    { nome: 'Lucas', idade: 22 },
    { nome: 'Marcos', idade: 43 },
];
console.log(obterMaiorIdade(pessoas, 30));
// Ex de restrição de passagem de objeto
// function juntarObjetos<U, V>(objeto1: U, objeto2: V) {
//     return {
//         ...objeto1,
//         ...objeto2,
//     };
// }
// // Não impede que seja passado non-objects
// const pessoa = juntarObjetos({nome: 'Fulano'}, 38);
// console.log(pessoa);
// function juntarObjetos2<U extends object, V extends object>(objeto1: U, objeto2: V) {
//     return {
//         ...objeto1,
//         ...objeto2,
//     };
// }
// O argumento do tipo 'number' não é atribuível ao parâmetro do tipo 'object'.
// U e V sendo restringindos.
// const pessoa2 = juntarObjetos2({nome: 'Fulano'}, 38);
// console.log(pessoa2);
