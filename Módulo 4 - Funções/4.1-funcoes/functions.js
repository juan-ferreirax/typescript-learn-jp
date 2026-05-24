"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Função Simples (named functions)
function somarNumeros(num1, num2) {
    return num1 + num2;
}
;
console.log(somarNumeros(8, 4));
// Função Anônima (Functions Expression)
const saudacao = function (mensagem) {
    return mensagem;
};
console.log(saudacao('Hi devs!'));
// Arrow Function Expression
const saudacao03 = (message) => {
    return message;
};
console.log(saudacao03('Hello devs!'));
// Function Constructor
const saudacao04 = new Function('Message', 'return `Fala ${Message}`');
console.log(saudacao04('Galera!'));
