// Herança
class Animal {
    public mover(distancia = 0) {
        console.log(`Ele moveu ${distancia} metros.`);
    }
}

class Dog extends Animal {
    public latir() {
        console.log('Au Au');
    }
}

const dog = new Dog();
dog.mover(10);
dog.latir();

// Herança com atributos privados
class Pessoa {
    private nome: string;
    private sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    public retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    public apresentarPessoa(): string {
        return `Olá, meu nome é ${this.nome} ${this.sobrenome}`;
    }
}

class Funcionario extends Pessoa {
    private funcao: string;

    constructor(nome: string, sobrenome: string, funcao: string) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }

    public apresentaFuncionario(): string {
        return `${super.apresentarPessoa()} e sou ${this.funcao}`;
    }
}

const funcionario = new Funcionario('Juan', 'Ferreira', 'Desenvolvedor de Software');
console.log(funcionario.apresentaFuncionario());