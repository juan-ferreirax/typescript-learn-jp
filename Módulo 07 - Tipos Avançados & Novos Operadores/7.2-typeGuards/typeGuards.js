"use strict";
// Restringir o tipo de uma variável
// typeof, instanceof, in
Object.defineProperty(exports, "__esModule", { value: true });
function valores(a, b) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else {
        throw new Error("Os parâmetros passados precisam ser de tipos iguais");
    }
}
console.log(valores('Max', 'Verstappen'));
console.log(valores(15, 10));
// console.log(valores('Maça', 8));
// instanceof
class Carro {
    marca;
    modelo;
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}
class Moto {
    ano;
    placa;
    constructor(ano, placa) {
        this.ano = ano;
        this.placa = placa;
    }
}
const detalhesVeiculo = (veiculo) => {
    if (veiculo instanceof Carro) {
        return `A marca do carro é ${veiculo.marca} e o modelo é ${veiculo.modelo}`;
    }
    else if (veiculo instanceof Moto) {
        return `O ano da moto é ${veiculo.ano} e a placa é ${veiculo.placa}`;
    }
};
const carro = new Carro('Ferrari', 'XT8000');
console.log(carro);
const moto = new Moto(2018, 'HQ8735');
console.log(moto);
class Peixe {
    grupo;
    corPeixe;
    constructor(grupo, corPeixe) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}
class Passaro {
    grupo;
    corPena;
    constructor(grupo, corPena) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}
function nadar(grupo) {
    console.log(`O ${grupo} está nadando.`);
}
function voar(grupo) {
    console.log(`O ${grupo} está voando.`);
}
function mover(animal) {
    if ('corPeixe' in animal) {
        nadar(animal.grupo);
    }
    else if ('corPena' in animal) {
        voar(animal.grupo);
    }
}
mover(new Peixe('Peixe', 'Vermelho'));
mover(new Passaro('Passaro', 'Verde'));
