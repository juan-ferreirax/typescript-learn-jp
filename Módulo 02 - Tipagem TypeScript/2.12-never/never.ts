// never usado normalmente em throw exeptions e quando não retorna valor

// Never usado em Throw Exception
function error(message: string): never {
    throw new Error(message);
}

console.log(error('Erro 01'));

// Never inferido automaticamente
function rejectmessage() {
    return error('Erro 02');
}

console.log(rejectmessage());

// Função que contenha loop infinito retorna tipo 'never'
const loopInfinito = function loop() {
    while (true) {
        console.log('Hi devs!');
    }
}

//console.log(loopInfinito());

// Diferença entre os tipos: 'never' e 'void'
// Never não pode ter valor atribuído a ele, void ainda pode ter null e undefined
// const somethingVoid: void = null;
// const somethingNever: never = null; // O tipo 'null' não pode ser atribuído ao tipo 'never'.

// console.log(somethingVoid);
// console.log(somethingNever);