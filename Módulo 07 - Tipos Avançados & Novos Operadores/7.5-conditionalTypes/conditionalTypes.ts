// Um tipo genérico T é definido com base em condições do próprio tipo
// filtra ou transforma tipos com base em regras
// especialmente se for tipos genéricos e uniões

type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3'

type FiltrarArquivoAudio<T> = T extends 'mp4' | 'mp3' ? T : never;

type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivos>;

const arquivoAudio: ArquivoAudio = 'mp4';

console.log(arquivoAudio); // mp4

// Outro exemplo

type FormatoDeArquivos = 'apk' | 'exe' | 'deb' | 'mov' | 'mp4'

type Instalavel<T> = T extends 'apk' | 'exe' | 'deb' ? T : never;

const instalavel: Instalavel<FormatoDeArquivos> = 'deb';

console.log(instalavel); // deb