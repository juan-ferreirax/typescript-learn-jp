// Exemplo de Sintaxe: let itens: string[] = ['a', 'b'];
// Declaração com colchetes
let frutas: string[] = ['🍍','🍊','🍎','🍉','🥭'];
console.log(frutas[3])

// Declaração com notação Array Object (Objeto Array)
let fruits: Array<string> = ['🍍','🍊','🍎','🍉','🥭'];
console.log(fruits[1]);

// Adição de strings com método 'push'
let idiomas: Array<string> = ['Português','Inglês','Espanhol','Grego']
console.log(idiomas)
idiomas.push('Latin')
console.log(`São ${idiomas.length} idiomas: ${idiomas}`);

// Array com Spread Operator, tipo um autocomplete
let listaNumeros = [0, 1, 2, 3, 4, 5]
listaNumeros = [...listaNumeros, 6, 7, 8, 9, 10]
console.log(listaNumeros)

// Array com laço de iteração
const linguagens: string[] = ['Java', 'Python', 'PHP', 'C#'];

function exibeLinguagens(linguagens:string[]) {
    for (let i = 0; i < linguagens.length; i++) {
        console.log(linguagens[i]);
    }
}

exibeLinguagens(linguagens)