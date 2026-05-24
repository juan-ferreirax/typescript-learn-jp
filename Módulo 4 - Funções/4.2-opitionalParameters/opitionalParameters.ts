// Optional Parameter (Parâmetros Opicionais)
// Tem que vir sempre depois de parâmetros obrigatórios na definição de uma função
const informarDadosPessoais = (nome: string, id: number, email?: string) => {
  if (email != undefined) {
    console.log(nome, id, email);
  } else {
        console.log(nome, id);
    }
};
informarDadosPessoais('juan', 20);
informarDadosPessoais('juan', 20, 'userjp@gmail.com');

// Valor opcional no type

type Pessoa = {
    nome: string;
    sobrenome: string;
    idade?: number;
}

const pessoa: Pessoa = {
    nome: 'Juan',
    sobrenome: 'Ferreira'
};
console.log(pessoa);