// Contrato sintático;
// Entidade deve obedecer;
// Definem propriedades, métodos e eventos;
// Declaram os membros;
// Fornece uma estrutura padrão para as classes derivadas seguirem;
// Parâmetros 'opcionais' na interface (?) 
// permitem a criação de objetos sem esse atributo em especifíco;
// Parâmetros 'readyonly' na interface não permite redefinição desse atributos nos objetos;
// Implements keyword usada quando uma classe vai implementar uma interface

type Pessoa1 = {
    nome: string;
    sobrenome: string;
}

interface Pessoa2 {
    nome: string;
    sobrenome: string;
}

const pessoaType: Pessoa1 = {
    nome: 'Pedro',
    sobrenome: 'Santos'
};

const pessoaInterface: Pessoa2 = {
    nome: 'Augusto',
    sobrenome: 'Lemos'
};

function exibirNome(pessoa: Pessoa2): string {
    return `
    Nome: ${pessoa.nome}
    Sobrenome: ${pessoa.sobrenome}
    `;
}

console.log(pessoaType);
console.log(exibirNome(pessoaInterface));

// Implements
interface Animal {
    nome: string;
    idade: number;
    estarVivo: boolean;
    comer(comida: string): void;
}

class Gato implements Animal {
    nome: string;
    idade: number;
    estarVivo: boolean;

    constructor(nome: string, idade: number, estarVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estarVivo = estarVivo;
    }

    public comer(comida: string): void {
        console.log(`O gato ${this.nome} está comendo ${comida}`);
    }
}

const gato1 = new Gato('Tusk', 3, true);
console.log(gato1);
gato1.comer('Peixe');