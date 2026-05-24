// Pode trabalhar com vários tipos de dados
// Espaços reservados para os tipos de suas propriedades, métodos e parâmetros
// Reutilizar o mesmo código
// Utiliza de colchetes angulares <>

class Box<T> {
    item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem() {
        return this.item;
    }

    setitem(item: T) {
        this.item = item;
    }
}

// Uso de apenas uma classe genérica para tipos diferentes
const boxString = new Box<string>('string');
const boxNumber = new Box<number>(35);
console.log(`Recebeu uma "${boxString.getItem()}" e um number "${boxNumber.getItem()}"`);

// Exemplo de estudantes
class Estudante<T, U> {
    id: T;
    nome: U;

    setIdNome(id: T, nome: U): void {
        this.id = id;
        this.nome = nome;
    }

    retornaValores(): void {
        console.log(
            `ID: ${this.id}
             Nome: ${this.nome}`);
    }
}

// Tipos genéricos ao instânciar o objeto
// No caso T e U recebem seus tipos na criação da instância
// definidos dentro dos colchetes angulares <>
const estudante1 = new Estudante<string, string>();
const estudante2 = new Estudante<number, string>();

estudante1.setIdNome('1', 'Marcio');
console.log(estudante1);
estudante2.setIdNome(2, 'lucas');
console.log(estudante2);