// Função Simples (named functions)
function somarNumeros(num1: number, num2: number): number {
    return num1 + num2;
};
console.log(somarNumeros(8, 4));

// Função Anônima (Functions Expression)
const saudacao = function(mensagem: string) {
    return mensagem;
};
console.log(saudacao('Hi devs!'));

// Arrow Function Expression
const saudacao03 = (message: string): string => {
    return message;
};
console.log(saudacao03('Hello devs!'));

// Function Constructor
const saudacao04 = new Function('Message', 'return `Fala ${Message}`');
console.log(saudacao04('Galera!'));