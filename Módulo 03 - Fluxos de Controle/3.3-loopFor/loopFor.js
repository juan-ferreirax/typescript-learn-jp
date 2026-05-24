"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// loop básico
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// loop for ... of, itera valores
const arrayNumeros = [0, 10, 20, 30, 40];
for (let i of arrayNumeros) {
    console.log(i);
}
// loop for ... in, itera chaves/indices
const arrayNumeros2 = [5, 4, 3, 2, 1, 0];
for (let i in arrayNumeros2.sort()) {
    console.log(i);
}
