"use strict";
// Compartilha do mesmo conceito em JavaScript
// Pode conter declarações e códigos
// Executado dentro do seu próprio escopo
// Não são visíveis fora do módulo
// Usa a instrução 'import'
Object.defineProperty(exports, "__esModule", { value: true });
const math_1 = require("./math");
console.log((0, math_1.somar)(10, 20));
console.log((0, math_1.subtrair)(10, 20));
console.log((0, math_1.multiplicar)(10, 20));
console.log((0, math_1.dividir)(10, 20));
