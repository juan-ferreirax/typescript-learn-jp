"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const humano = {
    idade: 22,
    idioma: 'PT-BR'
};
// Erro ao fazer uma asserção errada
// Certo seria usar Type Annotations
// const humano2: Humano = humano
// Seria alertado a falta de 'nome'
const humano2 = humano;
//console.log((humano2.nome.toUpperCase())); // Cannot read properties of undefined (reading 'toUpperCase'
// Pra decisão de retorno
function exibirPrecoFinal(preco, desconto, formato) {
    const precoComDesconto = preco * (1 - desconto);
    return formato ? `R$ ${precoComDesconto}` : precoComDesconto;
}
const precoFinal = exibirPrecoFinal(100, 0.4, true);
// const precoFinal = <number>exibirPrecoFinal(100, 0.4, false);
console.log(precoFinal);
