// Type Assertion as / <>
type Humano = {
    nome: string;
    idade: number;
    idioma: string;
}

const humano = {
    idade: 22,
    idioma: 'PT-BR'
};

// Erro ao fazer uma asserção errada
// Certo seria usar Type Annotations
// const humano2: Humano = humano
// Seria alertado a falta de 'nome'
const humano2 = humano as Humano;
//console.log((humano2.nome.toUpperCase())); // Cannot read properties of undefined (reading 'toUpperCase'

// Pra decisão de retorno
function exibirPrecoFinal(preco: number, desconto: number, formato: boolean): string | number {
    const precoComDesconto = preco * (1 - desconto);

    return formato ? `R$ ${precoComDesconto}`: precoComDesconto;
}

const precoFinal = exibirPrecoFinal(100, 0.4, true) as string;
// const precoFinal = <number>exibirPrecoFinal(100, 0.4, false);
console.log(precoFinal);