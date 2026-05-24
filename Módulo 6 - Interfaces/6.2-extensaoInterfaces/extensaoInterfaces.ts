// Extensão de interfaces
interface Pessoa  {
    nome: string;
    idade: number;
}

interface Funcionario extends Pessoa {
    id: number;
}

const colaborador: Funcionario = {
    id: 4002,
    nome: 'matthew',
    idade: 28
};

console.log(colaborador);

// Omição de atributo
interface Desenvolvedor extends Omit<Pessoa, 'idade'> { // Omit<Pessoa, 'idade' | 'something'>
    idade: string;
    linguagemProgramacao: string;
}

const dev: Desenvolvedor = {
    nome: 'Dankan',
    idade: '25',
    linguagemProgramacao: 'TypeScript'
};

console.log(dev);