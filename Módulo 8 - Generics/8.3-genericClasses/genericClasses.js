"use strict";
// Pode trabalhar com vários tipos de dados
// Espaços reservados para os tipos de suas propriedades, métodos e parâmetros
// Reutilizar o mesmo código
// Utiliza de colchetes angulares <>
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    item;
    constructor(item) {
        this.item = item;
    }
    getItem() {
        return this.item;
    }
    setitem(item) {
        this.item = item;
    }
}
// Uso de apenas uma classe genérica para tipos diferentes
const boxString = new Box('string');
const boxNumber = new Box(35);
console.log(`Recebeu uma "${boxString.getItem()}" e um number "${boxNumber.getItem()}"`);
// Exemplo de estudantes
class Estudante {
    id;
    nome;
    setIdNome(id, nome) {
        this.id = id;
        this.nome = nome;
    }
    retornaValores() {
        console.log(`ID: ${this.id}
             Nome: ${this.nome}`);
    }
}
// Tipos genéricos ao instânciar o objeto
// No caso T e U recebem seus tipos na criação da instância
// definidos dentro dos colchetes angulares <>
const estudante1 = new Estudante();
const estudante2 = new Estudante();
estudante1.setIdNome('1', 'Marcio');
console.log(estudante1);
estudante2.setIdNome(2, 'lucas');
console.log(estudante2);
