// Uso simples do tipo object (Objeto)
const pessoa = {
    nome: 'Juan',
    sobrenome: 'Ferreira',
    idade:'20',
    cargo:'Software Developer',
};

console.log(pessoa);

// Object como parâmetro de função, objeto funcionario como parâmetro da função onbording01
function onbording01(funcionario: {nome: string}) {
    return `Seja muito bem vindo(a) ${funcionario.nome}!`;
};

console.log(onbording01({nome: 'Juan Ferreira'}));

// object nomeados, nomeando o tipo do objeto pessoa
// com o nome da interface(Pessoa)
interface Pessoa {
    nome: string;
    funcao: string;
};

function onbording02(pessoa: Pessoa) {
    return `Seja bem vindo(a) ${pessoa.nome}! Sua função aqui será de ${pessoa.funcao}`;
};

console.log(onbording02({nome:'Juan Ferreira', funcao:'Software Developer'}));

// object como type alias
type Pessoa3 = {
    nome: string;
    funcao: string;
    linguagem: string;
}

function onbording03(pessoa: Pessoa3) {
    return (`Seja bem vindo(a) ${pessoa.nome}! Sua função aqui será de ${pessoa.funcao}. A linguagem com a qual você irá trabalhar será ${pessoa.linguagem}`);
}

console.log(onbording03({nome:'Juan Ferreira', funcao:'Software Developer', linguagem: 'JS/TS'}));

// Usando optional no object
interface Pessoa4 {
    nome: string;
    funcao: string;
    linguagem: string;
    email?: string;
}

function onbording04(pessoa: Pessoa4) {
    return (`Seja bem vindo(a) ${pessoa.nome}! Sua função aqui será de ${pessoa.funcao}. A linguagem com a qual você irá trabalhar será ${pessoa.linguagem}.`);
}

console.log(onbording04({nome:'Juan Ferreira', funcao:'Software Developer', linguagem: 'JS/TS'}));

// Propriedade 'readonly' para não modificar um objeto
interface Pessoa5 {
    nome: string;
    funcao: string;
    linguagem: string;
    readonly email: string; // Não pode ser gravada durante a verificação de tipo
}

function onbording05(pessoa: Pessoa5) {
    return (`Seja bem vindo(a) ${pessoa.nome}! Sua função aqui será de ${pessoa.funcao}. A linguagem com a qual você irá trabalhar será ${pessoa.linguagem}. Seu e-mail será: ${pessoa.email}`);
};

console.log(onbording05({nome:'Juan Ferreira', funcao:'Software Developer', linguagem: 'JS/TS', email: 'jp@gmail.com'}));

// Tipos de extensão (herança) 
interface Mae {
    nome: string;
};

interface Pai {
    sobrenome: string;
};

interface Filho extends Mae, Pai {
    idade: number;
}

const filho: Filho = {
    nome: 'Juan',
    sobrenome: 'Ferreira',
    idade: 20
};

console.log(filho);

// Tipos de interseções
interface Gato {
    tipo: string
}

interface Cachorro {
    tipo: string
}

type Animal = Gato & Cachorro

// Generic Objects
type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: boolean
}

const usuario: Usuario = {
    nome: 'Juan Ferreira',
    email: 'userjp@gmail.com'
};

const admin: Admin = {
    nome: 'Willian Lawrense',
    email: 'adminwl@gmail.com',
    admin: true
};

function acessarSistema<T>(usuario: T): T {
    return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admin>(admin));