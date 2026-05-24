"use strict";
// Não podem ser instânciadas
// Feita para ser herdada
// Funcionalidades ou propriedades compartilhadas em grupos de classes semelhantes
// Podem conter implementações de funções
// Permite a reutilização de código entre grupos de objetos semelhantes
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    nome;
    sobrenome;
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    get getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    emitirContraCheque() {
        return `${this.getNomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}
class FuncionarioCLT extends Funcionario {
    salario;
    constructor(nome, sobrenome, salario) {
        super(nome, sobrenome);
        this.salario = salario;
    }
    retornarSalario() {
        return this.salario;
    }
}
class FuncionarioPJ extends Funcionario {
    valorHora;
    horasTrabalhadas;
    constructor(nome, sobrenome, valorHora, horasTrabalhadas) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }
    retornarSalario() {
        return this.valorHora * this.horasTrabalhadas;
    }
}
const funcionario1 = new FuncionarioCLT('João', 'Silva', 1612.22);
const funcionario2 = new FuncionarioPJ('Carlos', 'Oliveira', 150, 26);
console.log(funcionario1.emitirContraCheque()); // 1612.22
console.log(funcionario2.emitirContraCheque()); // 150 * 26 = 3900
