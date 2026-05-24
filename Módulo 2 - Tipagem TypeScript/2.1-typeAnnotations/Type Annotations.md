
### Pra que serve?
* Serve para o compilador fazer a verificação de tipos
* Não é obrigatório, mas perde o sentido de usar o TS se não tiver
* O intuito é impedir a ocorrência dos erros em JS devido a falta de tipagem

### Sintaxe

let nomeVariavel: TypeAnnotation = valor;
Ex: 
```run-typescript
	function adicionarNumeros(num1: number, num2: Number) {
		return num1 + num2;
	}
	
	console.log(adicionarNumeros(4, 8))
```
