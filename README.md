## Estudos em TypeScript

Repositório com exercícios resolvidos, exemplos práticos e anotações sobre TypeScript, organizados por módulos temáticos. O objetivo é facilitar o estudo progressivo dos principais conceitos da linguagem, desde a tipagem básica até recursos avançados, incluindo uso com Node.js.

---

### 📂 Estrutura do Repositório
Os conteúdos estão organizados por módulos, seguindo uma ordem didática:

- **Módulo 01 - TypeScript:** Introdução e primeiros exemplos
- **Módulo 02 - Tipagem TypeScript:** Tipos primitivos, arrays, tuplas, enums, any, unknown, void, never, object
- **Módulo 03 - Fluxos de Controle:** if/else, switch/case, laços for, while, do...while
- **Módulo 04 - Funções:** Funções, parâmetros opcionais, parâmetros default, rest parameters
- **Módulo 05 - Classes:** Classes, modificadores de acesso, getters/setters, herança, membros estáticos, classes abstratas
- **Módulo 06 - Interfaces:** Definição e extensão de interfaces
- **Módulo 07 - Tipos Avançados & Novos Operadores:** Intersection types, type guards, type casting, type assertions, conditional types, mapped types, satisfies operator
- **Módulo 08 - Generics:** Introdução, restrições, classes e interfaces genéricas
- **Módulo 09 - Modules:** Organização de código em módulos
- **Módulo 10 - TypeScript em Node.js:** Exemplos práticos com Node.js e Express

Cada módulo contém exemplos em `.ts` e seus respectivos `.js` gerados para efeito de comparação.

---

### 📝 Características
- Estrutura separada por módulos e temas
- Exemplos práticos para fixação dos conceitos
- Arquivos de apoio em Markdown com resumos teóricos
- Progressão do conteúdo do básico ao avançado

---

### 🎯 Conceitos Abordados
- **Fundamentos do TypeScript**
- Tipos primitivos, arrays, tuplas, enums
- Tipos any, unknown, void, never, object
- Funções, parâmetros, rest, default
- Classes, herança, modificadores de acesso
- Interfaces e tipos avançados
- Generics
- Módulos
- Uso com Node.js e Express

---

### 🚀 Como usar
1. Clone o repositório:
	```bash
	git clone <URL_DO_REPOSITORIO>
	```
2. Abra a pasta no VS Code.
3. Navegue pelos módulos e abra os arquivos `.ts` para estudar e testar os exemplos.
4. Para rodar exemplos com Node.js:
	- Instale as dependências (quando houver `package.json`):
	  ```bash
	  npm install
	  ```
	- Execute os arquivos com:
	  ```bash
	  npx ts-node caminho/para/arquivo.ts
	  ```
5. Para compilar para JavaScript:
	```bash
	npx tsc caminho/para/arquivo.ts
	```
