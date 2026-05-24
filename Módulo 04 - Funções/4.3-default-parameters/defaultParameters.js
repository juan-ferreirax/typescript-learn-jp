"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo simples de default parameter, tem que vir no final da declaração da função igual optional
const desconto = (preco, desconto = 0.2) => {
    console.log(`O valor do produto é R$${preco} e com o desconto de ${desconto * 100}% fica por R$${preco - preco * desconto}`);
};
desconto(80);
