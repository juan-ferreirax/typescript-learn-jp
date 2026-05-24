"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Get
class Quadrado {
    altura = 12;
    largura = 10;
    get calcularQuadrado() {
        return this.altura * this.largura;
    }
}
console.log(new Quadrado().calcularQuadrado);
// Set
class Pessoa {
    nome; // definite assignment assertion (Confia que vai ter valor kkkkk)
    retornaNomePessoa(setNomePessoa) {
        this.nome = setNomePessoa;
    }
}
const pessoa = new Pessoa();
pessoa.retornaNomePessoa('Fulano de Tal'); // atualização genérica sem SET
console.log(pessoa.nome);
// Getter mais explicado
class Estudante {
    nome = 'Fulano de Tal';
    idade;
    matricula;
    get nomeEstudante() {
        return this.nome;
    }
}
const estudante = new Estudante();
const nome = estudante.nomeEstudante; // GET acessor sem ()
console.log(nome);
// Set e Get mais explicado
class Estudante_01 {
    nome;
    periodo;
    curso;
    constructor(nome, periodo, curso) {
        this.nome = nome;
        this.periodo = periodo;
        this.curso = curso;
    }
    get getCurso() {
        return this.curso;
    }
    set setCurso(setCurso) {
        this.curso = setCurso;
    }
}
const estudante_01 = new Estudante_01('Juan', 7, 'Ciência da Computação');
console.log(estudante_01.getCurso); // GET call
estudante_01.setCurso = 'Sistemas de Informação'; // SET calll
console.log(estudante_01.getCurso);
