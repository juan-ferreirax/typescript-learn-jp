// Exemplo simples de default parameter, tem que vir no final da declaração da função igual optional
const desconto = (preco: number, desconto = 0.2): void => {
    console.log(`O valor do produto é R$${preco} e com o desconto de ${desconto * 100}% fica por R$${preco - preco * desconto}`);
};

desconto(80,);