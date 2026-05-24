/* sintaxe 
class<nome_classe> {
    campo1;
    campo2;
    campo3;
    construtor {
    }
    metodo;
} 
*/

// Exemplo de classe
class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa: Pessoa = new Pessoa('Kyryll', 'Flins');
console.log(pessoa.nomeCompleto());

// Classe sem construtor
class Estudante {
    nome: string;
    matricula: number;
}

// Criação do objeto
const estudante = new Estudante();

// Iniciando o objeto
estudante.nome = 'Adryan';
estudante.matricula = 40028922;

// Acessando os campos
console.log(`Nome: ${estudante.nome}`);
console.log(`Matrícula: ${estudante.matricula}`);



// Classe com construtor
class Estudante_02 {
    nome: string;
    matricula: number;

    // Construtor da classe
    constructor(nome: string, matricula: number) {
        this.nome = nome;
        this.matricula = matricula;
    }

    // Métodos personalizados
    exibirInformacoes(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
    }
}

// Iniciando objeto e acessando atributos
const estudante_02 = new Estudante_02('Washington', 9876);
estudante_02.exibirInformacoes();