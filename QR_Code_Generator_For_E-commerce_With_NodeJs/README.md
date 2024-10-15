# Ferramenta de Geração de QR Code e Senhas

Este projeto é uma ferramenta interativa de linha de comando que permite aos usuários gerar QR Codes ou criar senhas de forma fácil e rápida.

## Estrutura do Projeto

## Trechos de Código

### `src/prompts-schema/schema-main.js`

```javascript
import chalk from "chalk";

const mainSchema = [
    {
        name: "select",
        description: chalk.yellow.bold("Escolha a ferramente 1- QRCODE ou 2- PASSWORD"),
        pattern: /^[1-2]+$/,
        message: chalk.yellow.italic("Escolha 1 ou 2"),
        require: true,
    },
];

export default mainSchema;
## Instalação

1. Clone o repositório:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd <NOME_DO_DIRETORIO>
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

