// Restringir o tipo de uma variável
// typeof, instanceof, in

// typeof
type alfanumerico = string | number;

function valores(a: alfanumerico, b: alfanumerico) {
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        throw new Error("Os parâmetros passados precisam ser de tipos iguais");
    }
}

console.log(valores('Max', 'Verstappen'));
console.log(valores(15, 10));
// console.log(valores('Maça', 8));


// instanceof
class Carro {
    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;    
    }
}

class Moto {
    ano: number;
    placa: string;

    constructor(ano: number, placa: string) {
        this.ano = ano;
        this.placa = placa;
    }
}

const detalhesVeiculo = (veiculo: Carro | Moto): string => {
    if (veiculo instanceof Carro) {
        return `A marca do carro é ${veiculo.marca} e o modelo é ${veiculo.modelo}`;
    } else if (veiculo instanceof Moto) {
        return `O ano da moto é ${veiculo.ano} e a placa é ${veiculo.placa}`;
    }
};

const carro = new Carro('Ferrari', 'XT8000');
console.log(carro);
const moto = new Moto(2018, 'HQ8735');
console.log(moto);

// in
interface Animal {
    grupo: string;
}

class Peixe implements Animal {
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal {
    grupo: string;
    corPena: string;

    constructor(grupo: string, corPena: string) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}

function nadar(grupo: string) {
    console.log(`O ${grupo} está nadando.`);
}

function voar(grupo: string) {
    console.log(`O ${grupo} está voando.`);
}

function mover(animal: Animal) {
    if ('corPeixe' in animal) {
        nadar((animal as Peixe).grupo);
    } else if ('corPena' in animal) {
        voar((animal as Passaro).grupo);
    }
}

mover(new Peixe('Peixe', 'Vermelho'));
mover(new Passaro('Passaro', 'Verde'));