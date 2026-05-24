// Get
class Quadrado {
    private altura: number = 12;
    private largura: number = 10;

    get calcularQuadrado(): number {
        return this.altura * this.largura;
    }
}

console.log(new Quadrado().calcularQuadrado);

// Set
class Pessoa {
    nome!: string; // definite assignment assertion (Confia que vai ter valor kkkkk)

    retornaNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}
const pessoa = new Pessoa();
pessoa.retornaNomePessoa('Fulano de Tal'); // atualização genérica sem SET
console.log(pessoa.nome);

// Getter mais explicado
class Estudante {
    nome: string = 'Fulano de Tal';
    idade!: number;
    matricula!: number;

    get nomeEstudante() {
        return this.nome;
    }
}

const estudante = new Estudante();
const nome = estudante.nomeEstudante; // GET acessor sem ()
console.log(nome);

// Set e Get mais explicado
class Estudante_01 {
    nome: string;
    periodo: number;
    curso: string;

    constructor(nome: string, periodo: number, curso: string) {
        this.nome = nome;
        this.periodo = periodo;
        this.curso = curso;
    }

    public get getCurso() {
        return this.curso;
    }

    public set setCurso(setCurso: string) {
        this.curso = setCurso;
    }

}

const estudante_01 = new Estudante_01('Juan', 7, 'Ciência da Computação');
console.log(estudante_01.getCurso); // GET call
estudante_01.setCurso = 'Sistemas de Informação'; // SET calll
console.log(estudante_01.getCurso);