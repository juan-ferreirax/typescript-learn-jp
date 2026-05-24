"use strict";
// Exemplo de Sintaxe: function exemploFuncao(mensagem): void {}
Object.defineProperty(exports, "__esModule", { value: true });
// Retorno de função
function logError(message) {
    console.log(message); // TS reconhece o retorno void quando não definido explicitamente
    // return erroMessage; // retorno do tipo string
}
logError('Mensagem de erro!');
// Com Arrow Function, constante armazena função com retorno void explicito
const errorMessage = (message) => {
    console.log(message);
};
errorMessage('Error message!');
// Uso de void em variáveis, pode receber null e undefined quando permitido
let variavelVoid;
// variavelVoid = 1;
variavelVoid = null; // Permitido com "strictNullChecks": false em tsconfig.json
variavelVoid = undefined; // Permitido com "strictNullChecks": false em tsconfig.json
