// Exemplo de Sintaxe: enum Idioma { Portugues, Ingles }
// Enum numérico (number) (recomendado)
enum Idioma {
    Português,
    Inglês,
    Espanhol,
    Russo,
    Grego
}

console.log(Idioma)

// Enum string (string) (não recomendado)
enum Sigla {
    "Português" = "PT-BR",
    "Inglês" = "EN",
    "Espanhol" = "ES",
    "Russo" = "RU",
    "Grego" = "EL"
}

console.log(Sigla)

// Acesso ao valor de um enum por meio de chave (Usando const)
const enum Comida {
    Churrasco = 'Churrasco',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Lanche = 'Lanche',
    Sanduiche = 'Sanduiche'
}

function comida(c: Comida) {
    return 'Comidas apetitosas!'
}

console.log(comida(Comida.Churrasco))
//console.log(comida(5)) // Pra não atribuir um tipo errado, pois não alerta
// Quando usar enums ?

enum Tarefa {
    Todo,
    Progress,
    Done
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!'
};

if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluída!')
}