"use strict";
// Capacidade de atribuir tipos mais específicos
// Impor uma restrição numa variável sem alterar o seu tipo
Object.defineProperty(exports, "__esModule", { value: true });
// Garante em tempo de compilação que o objeto é compatível com Pessoa.
// Não faz cast em runtime — preserva o tipo inferido (ex.: "BH" como literal).
// Diferente do casting 'as', evita que o código quebre em runtime
// Útil para reforçar contrato sem perder precisão dos literais (TS 4.9+)
const pessoa = {
    localNascimento: "BH",
    localAtual: { x: 10, y: 20 }
};
// Sem satisfies ocorre erro pois métodos de string não existem para uniões
console.log(pessoa.localNascimento.toUpperCase());
const config = {
    host: "localhost",
    port: 3306,
    tryReconnect: () => true,
    poolSize: 10,
};
function connect() {
    let { host, port, tryReconnect } = config;
    createConnection(host, `${port}`, tryReconnect(), 10);
}
