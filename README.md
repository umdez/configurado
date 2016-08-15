# Configurado
Propósito é oferecer um arcabouço de configuração. Essa biblioteca contêm caracteristicas de Interface de Entrada pela Linha de comando (IELC), realiza o exame das propriedades de configuração para verificar se está correto e, além disso, adiciona as variáveis do ambiente.

## A interface de Entrada pela Linha de comando (IELC)

O IELC fornecer uma forma de configuração pela linha de comando. Os comandos disponíveis são:
- node iniciar.js [OPCOES] [ARGS]
- node iniciar.js -help

## Realizar o exame das propriedades

Para mantermos o controle sobre a nossa configuração, fica necessário realizarmos o exame daquelas propriedades obrigatórias. 

## Como usar
Passar o arquivo de configuração como argumento para o método iniciar. Abaixo um exemplo completo.

```javascript
var pasta = require('path');
var pastaDeConfiguracaoPadrao = pasta.join(__dirname, '/a/pasta/de/configuracao/configuracao.js');
var configurado = require('configurado');

// Aqui iniciamos o serviços de configuração do nosso aplicativo.
configurado.iniciar(pastaDeConfiguracaoPadrao, function(configuracao) {
   // Aqui os nossos serviços de IELC, de exame e de carregamento das
   // variaveis de ambiente foram completados com sucesso.
});

```
