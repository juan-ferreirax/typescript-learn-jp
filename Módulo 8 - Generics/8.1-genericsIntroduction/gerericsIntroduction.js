"use strict";
// Reutilizar funções, classes e interfaces
// Variedade de tipos de dados
// Consumir esses componentes e usar seus próprios tipos
// Flexibilidade e escalabilidade a longo prazo
Object.defineProperty(exports, "__esModule", { value: true });
function retornarElementosRandomicos(items) {
    let itemRandomico = Math.floor(Math.random() * items.length);
    return items[itemRandomico];
}
console.log(retornarElementosRandomicos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(retornarElementosRandomicos(['MG', 'SP', 'BA', 'SC', 'TO', 'MT']));
