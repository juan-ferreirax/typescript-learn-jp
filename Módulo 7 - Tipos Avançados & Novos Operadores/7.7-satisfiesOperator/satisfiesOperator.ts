// Capacidade de atribuir tipos mais específicos
// Impor uma restrição numa variável sem alterar o seu tipo

// União de tipos
type Cidade = NomeCidade | CidadeCoordenadas;

type NomeCidade = "São Paulo" | "BH" | "Salvador" | "Minas Novas" | "Diamantina";

type CidadeCoordenadas = {
    x: number;
    y: number;
};

type Pessoa = {
    localNascimento: Cidade;
    localAtual: Cidade;
};

// Garante em tempo de compilação que o objeto é compatível com Pessoa.
// Não faz cast em runtime — preserva o tipo inferido (ex.: "BH" como literal).
// Diferente do casting 'as', evita que o código quebre em runtime
// Útil para reforçar contrato sem perder precisão dos literais (TS 4.9+)
const pessoa = {
    localNascimento: "BH",
    localAtual: {x: 10, y: 20}
} satisfies Pessoa;

// Sem satisfies ocorre erro pois métodos de string não existem para uniões
console.log(pessoa.localNascimento.toUpperCase());

// Usado na criação de conexões
declare function createConnection(
  host: string,
  port: string,
  reconnect: boolean,
  poolsize: number
): void;

type Configuration = {
  host: string;
  port: string | number;
  tryReconnect: boolean | (() => boolean);
  poolSize?: number;
};

const config = {
  host: "localhost",
  port: 3306,
  tryReconnect: () => true,
  poolSize: 10,
} satisfies Configuration;

function connect() {
  let { host, port, tryReconnect } = config;
  createConnection(host, `${port}`, tryReconnect(), 10);
}