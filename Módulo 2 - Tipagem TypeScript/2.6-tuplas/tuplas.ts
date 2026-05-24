// Exemplo de Sintaxe: let tupla: [string, number] = ['texto', 1];
// Uso simples de tuplas
let pessoa: [string, number, string, string];
pessoa = ['Fulano de Tal', 20, 'UFVJM', 'Desenvolvedor de Software'];
console.log(pessoa)

// Acesso a valor em posição especifica(igual em arrays)
console.log(pessoa[3])

// Uso de tuplas com labels
let pessoa2: [nome: string, idade: number, instituicao: string, profissao: string] = ['Fulano de Tal', 20, 'UFVJM', 'Desenvolvedor de Software'];
console.log(pessoa2)

// Uso de tuplas com Spread Operators
let listafrutas: [string, ...string[]] = ['🍍','🍊','🍎','🍉','🥭'];
console.log(...listafrutas)

// Uso de tuplas heterogêneas
let listafrutas2: [number, boolean, ...string[]] = [5, true, ...listafrutas];
console.log(listafrutas2)

// Uso de tuplas como parâmetros em funções

function listarPessoas(nomes: string[], idades: number[]) {
    return [...nomes, ...idades];
}

let resultado = listarPessoas(['Rafael', 'Lucas', 'Vinícuis'], [26, 20, 24])
console.log(resultado)

// Labeled Tuplas com Spread Operators em uma função

type Nome = | [nome: string, sobrenome: string] | [nome: string, nomemeio: string, sobrenome: string]

function criarPessoas(...nome: Nome) {
    return[...nome]
}

console.log(criarPessoas('Emerson', 'Silva'))
console.log(criarPessoas('Emerson', 'da', 'Silva'))