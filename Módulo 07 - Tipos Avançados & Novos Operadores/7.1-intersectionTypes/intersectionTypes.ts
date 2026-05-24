// Combinação de vários tipos existentes
// Possui todas as caracteristicas do tipo existentes
// Operador &

interface Pessoa {
    nome: string;
    idade: number;
}

interface Endereco {
    rua: string;
    cep: string;
}

type pessoaEndereco = Pessoa & Endereco;

const pessoa: pessoaEndereco = {
    nome: 'jack',
    idade: 28,
    rua: 'wayland',
    cep: '39400-000'
};

console.log(pessoa);

// Interseção não se limita a dois conjuntos

interface dadosConta {
    banco: string;
    agencia: number;
    id: number;
}

interface Cliente {
    nome: string;
    idade: number;
    email: string;
}

interface pessoaFisica {
    cpf: string;
}

type dadosCliente = dadosConta & Cliente & pessoaFisica

const cliente1: dadosCliente = {
    banco: 'Itaú',
    agencia: 8873,
    id: 872943,
    nome: 'Patrick',
    idade: 28,
    email: 'patrick@gmail.com',
    cpf: '123.456.789-00'
};

console.log(cliente1);
