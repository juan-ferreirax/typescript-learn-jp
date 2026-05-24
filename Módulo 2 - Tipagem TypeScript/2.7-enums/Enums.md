
### Pra que serve?
* Enumerar valores
* Estrutura de dados não ordenadas
* Mapeamento de chaves para valores
* É como se fossem objetos onde as chaves são fixas em tempo de compilação
* Suporta os tipos numéricos e string

# Sintaxe
* Começa com caixa alta, não camelcase

```run-typescript
Enum TypeName {
	constant1,
	constant2
}
```

### Tipos de Enum
* Numérico
	* Mapeia de string pra number
* Strings
	* Mapeia de string pra string

### Vantagens
* Facilidade de mudar valores
* Redução de erros
* Funciona apenas em tempo de compilação
* Reduz o tempo de execução e compilação
* Permite a criação de constantes personalizadas