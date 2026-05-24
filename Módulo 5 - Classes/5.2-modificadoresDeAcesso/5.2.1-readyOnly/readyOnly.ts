// Modificador de Acesso readyonly (Somente leitura)

class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

const f1 = new Funcionario(new Date(2026, 4, 3));
// f1.dataNascimento = new Date(1986, 4, 21); 
// // Não é possível atribuir a 'dataNascimento' porque é uma propriedade de somente leitura.
// Precisa instanciar a classe pra poder usar, pois só o construtor tem acesso.

// Com interface
interface IFuncionario {
    nome: string;
    cracha: number;
}

const funcionario: Readonly<IFuncionario> = {
    nome: 'Alberto',
    cracha: 6789,
};

// funcionario.cracha = 9876;
// Não é possível atribuir a 'cracha' porque é uma propriedade de somente leitura.