"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo de Sintaxe: let itens: string[] = ['a', 'b'];
// Declaração com colchetes
let frutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(frutas[3]);
// Declaração com notação Array Object (Objeto Array)
let fruits = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(fruits[1]);
// Adição de strings com método 'push'
let idiomas = ['Português', 'Inglês', 'Espanhol', 'Grego'];
console.log(idiomas);
idiomas.push('Latin');
console.log(`São ${idiomas.length} idiomas: ${idiomas}`);
// Array com Spread Operator, tipo um autocomplete
let listaNumeros = [0, 1, 2, 3, 4, 5];
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10];
console.log(listaNumeros);
// Array com laço de iteração
const linguagens = ['Java', 'Python', 'PHP', 'C#'];
function exibeLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}
exibeLinguagens(linguagens);
