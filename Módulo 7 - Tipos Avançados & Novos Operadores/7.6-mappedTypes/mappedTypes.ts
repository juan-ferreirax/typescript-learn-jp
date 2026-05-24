// criar outros tipos sem precisar repetir todas as propriedades novamente
// permite criar variações de tipo com propriedades readyonly, optional etc
// type Exemplo<T> = {
//   [K in keyof T]: T[K];
// };

type Usuario = {
    nome: string;
    idade: number;
    endereco: string;
}
type UsuarioMapped = {
    [P in keyof Usuario]?: Usuario[P];
}

const usuarioMapped: UsuarioMapped = {
    nome: 'Claudio',
    idade: 28,
};

console.log(usuarioMapped);

interface Usuario2 {
    nome: string
    idade: number
    casado: boolean
}

type readyOnlyUsuario2 = Readonly<Usuario2>;

const usuario2: readyOnlyUsuario2 = {
    nome: 'Alberto',
    idade: 35,
    casado: true
};

// usuario2.nome = 'João'; // Não é possível atribuir a 'nome' porque é uma propriedade de somente leitura.
console.log(usuario2);