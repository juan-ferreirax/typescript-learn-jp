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