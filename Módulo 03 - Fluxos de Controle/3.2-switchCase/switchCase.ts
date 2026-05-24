// com strings
const flor: string = 'rosa';

switch (flor) {
    case 'tulipa':
        console.log(`achou ${flor}`);
        break;
    case 'violeta':
        console.log(`achou ${flor}`);
        break;
    case 'rosa':
        console.log(`achou ${flor}`);
        break;
    case 'girassol':
        console.log(`achou ${flor}`);
        break;

    default:
        console.log('Informe outra rosa!');
        break;
}

// com number
const diaSemana: number = 5;

switch (diaSemana) {
    case 0:
        console.log('Hoje é segunda-feira');
        break;
    case 1:
        console.log('Hoje é terça-feira');
        break;
    case 2:
        console.log('Hoje é quarta-feira');
        break;
    case 3:
        console.log('Hoje é quinta-feira');
        break;
    case 4:
        console.log('Hoje é sexta-feira');
        break;
    case 5:
        console.log('Hoje é sabado');
        break;
    case 6:
        console.log('Hoje é domingo');
        break;
    default:
        console.log('Informe um dia válido!');
        break;
}