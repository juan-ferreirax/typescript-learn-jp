"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// sintaxe function nome(...rest: type[]) {}
// '...' rest parameter
const somarNumeros = (...numeros) => {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
};
console.log(somarNumeros(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(somarNumeros(1, 2, 3, 4, 5));
const exibeNome = (...nomes) => {
    nomes.forEach((nome) => {
        if (nome[0] == 'p') {
            console.log(`O nome ${nome} começa com P.`);
        }
    });
};
exibeNome('joão', 'lucas', 'pedro', 'luan', 'leandro', 'paulo');
// Rest parameter '...' em classes
class Produtos {
    exibirProdutos(...produtos) {
        console.log(produtos.join(", "));
    }
}
const exibirProdutosInformatica = new Produtos();
console.log('Os produtos de informática são: ');
exibirProdutosInformatica.exibirProdutos('mouse', 'teclado', 'monitor');
