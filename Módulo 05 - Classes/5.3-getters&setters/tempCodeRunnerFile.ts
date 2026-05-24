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

const estudante_01 = new Estudante_01('Juan', 7, 'Sistemas de Informação');
console.log(estudante_01.getCurso);
estudante_01.setCurso = 'Ciência da Computação';
console.log(estudante_01.getCurso);