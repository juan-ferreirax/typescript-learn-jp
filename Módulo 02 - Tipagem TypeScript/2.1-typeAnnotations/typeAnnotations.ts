// Exemplo de Sintaxe: let nome: string = 'Juan';
// Variáveis
let nome: string = 'Fulano de Tal';
console.log(nome);

// Arrays
let animais: string[] = ['Gato', 'Cachorro', 'Lobo', 'Puma'];
console.log(animais);

// Objetos
let carro: {
    nome: string;
    ano: number;
    preco: number;
};

carro = {nome: 'Chevetão brabo', ano: 1998, preco: 80000};
console.log(carro);

// Funções
function multiplicarNumeros(num1: number, num2: number) {
    return num1 * num2;
}

console.log(multiplicarNumeros(4, 8));