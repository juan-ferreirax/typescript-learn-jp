"use strict";
// Exemplo de Sintaxe: let valor: unknown = 123;
// //Tipo Unknown
// let valorVariavel: unknown
Object.defineProperty(exports, "__esModule", { value: true });
// valorVariavel = "abc";
// valorVariavel = 123;
// valorVariavel = [];
// valorVariavel = true;
// //console.log(valorVariavel)
// //Erro de atribuição
// let valor: unknown
// let valor1: number = valor;
// let valor2: string = valor;
// let valor3: any = valor; // Unexpected any. Specify a different type.
// let valor4: boolean = valor;
// // Diferença de 'any' e 'unknown'
// let somethingAny: any; // Any desliga a verificação de tipos (alerta via regra de linter)
// let somethingUnknown: unknown; // Unknown força verificação de tipo para evitar quebra do código
// console.log(somethingAny.toFixed());
// // Type Narrowing (Estreitamento de tipo)
// if (typeof somethingUnknown === 'number') {
//     console.log(somethingUnknown.toFixed()); // Type Guard (somethingUnknown: number)
// }
