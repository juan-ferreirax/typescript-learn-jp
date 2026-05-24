// Lista de parâmetros de tipos genéricos
// Uso de colchetes angulares <>
// Escrita de código mais flexível e reutilizável

// Similar ao exemplo da aula, generic interfaces
interface Predio<T, U> {
    piso: T,
    apartamento: U
}

const moradia: Predio<string, number> = {
    piso: 'cinco',
    apartamento: 2
};

console.log(moradia);

// Retorno de API com tipos variados
// Harded Coded para fins de explicação
interface FetchResponse<T> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>
}

async function fetchJson<T>(url: string): Promise<FetchResponse<T>> {
  const response = await fetch(url);
  const headers: Record<string, string> = {};
  response.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const data = await response.json();
  return {
    data: data as T,
    status: response.status,
    statusText: response.statusText,
    headers
  };
}

(async () => {
  const response = await fetchJson<{ title: string }>("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response.data.title);
})();