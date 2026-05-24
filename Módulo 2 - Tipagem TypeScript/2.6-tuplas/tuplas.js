"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo de Sintaxe: let tupla: [string, number] = ['texto', 1];
// Uso simples de tuplas
let pessoa;
pessoa = ['Fulano de Tal', 20, 'UFVJM', 'Desenvolvedor de Software'];
console.log(pessoa);
// Acesso a valor em posição especifica(igual em arrays)
console.log(pessoa[3]);
// Uso de tuplas com labels
let pessoa2 = ['Fulano de Tal', 20, 'UFVJM', 'Desenvolvedor de Software'];
console.log(pessoa2);
// Uso de tuplas com Spread Operators
let listafrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listafrutas);
// Uso de tuplas heterogêneas
let listafrutas2 = [5, true, ...listafrutas];
console.log(listafrutas2);
// Uso de tuplas como parâmetros em funções
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Rafael', 'Lucas', 'Vinícuis'], [26, 20, 24]);
console.log(resultado);
function criarPessoas(...nome) {
    return [...nome];
}
console.log(criarPessoas('Emerson', 'Silva'));
console.log(criarPessoas('Emerson', 'da', 'Silva'));
