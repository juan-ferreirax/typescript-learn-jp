"use strict";
// Lista de parâmetros de tipos genéricos
// Uso de colchetes angulares <>
// Escrita de código mais flexível e reutilizável
Object.defineProperty(exports, "__esModule", { value: true });
const moradia = {
    piso: 'cinco',
    apartamento: 2
};
console.log(moradia);
async function fetchJson(url) {
    const response = await fetch(url);
    const headers = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });
    const data = await response.json();
    return {
        data: data,
        status: response.status,
        statusText: response.statusText,
        headers
    };
}
(async () => {
    const response = await fetchJson("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.title);
})();
