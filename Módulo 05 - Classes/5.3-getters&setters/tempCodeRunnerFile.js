"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const estudante_01 = new Estudante_01('Juan', 7, 'Sistemas de Informação');
console.log(estudante_01.getCurso);
estudante_01.setCurso = 'Ciência da Computação';
console.log(estudante_01.getCurso);
