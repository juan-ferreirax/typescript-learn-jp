"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Exemplo de Sintaxe: enum Idioma { Portugues, Ingles }
// Enum numérico (number) (recomendado)
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugu\u00EAs"] = 0] = "Portugu\u00EAs";
    Idioma[Idioma["Ingl\u00EAs"] = 1] = "Ingl\u00EAs";
    Idioma[Idioma["Espanhol"] = 2] = "Espanhol";
    Idioma[Idioma["Russo"] = 3] = "Russo";
    Idioma[Idioma["Grego"] = 4] = "Grego";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// Enum string (string) (não recomendado)
var Sigla;
(function (Sigla) {
    Sigla["Portugu\u00EAs"] = "PT-BR";
    Sigla["Ingl\u00EAs"] = "EN";
    Sigla["Espanhol"] = "ES";
    Sigla["Russo"] = "RU";
    Sigla["Grego"] = "EL";
})(Sigla || (Sigla = {}));
console.log(Sigla);
function comida(c) {
    return 'Comidas apetitosas!';
}
console.log(comida("Churrasco" /* Comida.Churrasco */));
//console.log(comida(5)) // Pra não atribuir um tipo errado, pois não alerta
// Quando usar enums ?
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!'
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluída!');
}
