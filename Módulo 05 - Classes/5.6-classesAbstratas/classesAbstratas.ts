// Não podem ser instânciadas
// Feita para ser herdada
// Funcionalidades ou propriedades compartilhadas em grupos de classes semelhantes
// Podem conter implementações de funções
// Permite a reutilização de código entre grupos de objetos semelhantes

abstract class Funcionario {
    private nome: string;
    private sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    abstract retornarSalario(): number;
    get getNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    emitirContraCheque(): string {
        return `${this.getNomeCompleto} - Salário: ${this.retornarSalario()}`;
    }
}

class FuncionarioCLT extends Funcionario {
    private salario: number;

    constructor(nome: string, sobrenome: string, salario: number) {
        super(nome, sobrenome);
        this.salario = salario;
    }

    public retornarSalario(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    private valorHora: number;
    private horasTrabalhadas: number;

    constructor(nome: string, sobrenome: string, valorHora: number, horasTrabalhadas: number) {
        super(nome, sobrenome);
        this.valorHora = valorHora;
        this.horasTrabalhadas = horasTrabalhadas;
    }

    public retornarSalario(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const funcionario1 = new FuncionarioCLT('João', 'Silva', 1612.22);
const funcionario2 = new FuncionarioPJ('Carlos', 'Oliveira', 150, 26);

console.log(funcionario1.emitirContraCheque()); // 1612.22
console.log(funcionario2.emitirContraCheque()); // 150 * 26 = 3900