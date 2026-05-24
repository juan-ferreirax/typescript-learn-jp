// if
const contador: number = 100
if (contador >= 100) {
    console.log(contador);
}

// if-else
const idade: number = 18
if (idade >= 18) {
    console.log('Pode dirigir');
} else {
    console.log('Não pode dirigir');
}

// if ... else if
const peso: number = 83.5
const altura: number = 1.82

const imc = peso / (altura ** 2)

if (imc > 25) {
    console.log('Obeso');
} else if (imc >= 18 && imc < 25) {
    console.log('OK');
} else {
    console.log('Abaixo do peso');
}

// Ternário
const idade2: number = 16
console.log((idade2 >= 18) ? 'Apto a votar!' : 'Não está apto a votar');

