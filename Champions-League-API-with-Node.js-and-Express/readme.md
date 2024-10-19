# Champions League API with Node.js and Express

Esta é uma API construída com **Node.js** e **Express** para gerenciar dados de jogadores e clubes da UEFA Champions League. O projeto visa facilitar a manipulação de informações sobre times e atletas, incluindo consultas, atualizações, adições e exclusões de registros.

## Estrutura do Projeto

O projeto segue uma arquitetura simples de API REST, organizada em diferentes endpoints para jogadores e clubes. A estrutura do código está modularizada para facilitar a escalabilidade e a manutenção.

## Instalação

Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone este repositório:

    ```sh
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. Acesse o diretório do projeto:

    ```sh
    cd seu-repositorio
    ```

3. Instale todas as dependências necessárias:

    ```sh
    npm install
    ```

## Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes scripts que podem ser executados com o comando `npm run <script>`:

-   **`dev`**: Inicia o servidor em modo de desenvolvimento com hot-reload.

    ```sh
    npm run dev
    ```

-   **`watch`**: Observa mudanças no código e reinicia automaticamente o servidor.

    ```sh
    npm run watch
    ```

-   **`format`**: Formata o código utilizando o Prettier, garantindo um estilo consistente.

    ```sh
    npm run format
    ```

-   **`build`**: Compila o código TypeScript para JavaScript, gerando a versão de produção.

    ```sh
    npm run build
    ```

-   **`clean:dist`**: Remove a pasta `dist`, utilizada para armazenar a versão compilada do projeto.

    ```sh
    npm run clean:dist
    ```

-   **`start:prod`**: Limpa a pasta `dist`, compila o código TypeScript e inicia o servidor no modo de produção.
    ```sh
    npm run start:prod
    ```

## Endpoints da API

### Jogadores

-   **`GET /api/players`**: Retorna uma lista de todos os jogadores registrados.
-   **`GET /api/players/:id`**: Retorna os detalhes de um jogador específico pelo seu ID.
-   **`POST /api/players`**: Adiciona um novo jogador.
-   **`PATCH /api/players/:id`**: Atualiza as estatísticas ou informações de um jogador pelo ID.
-   **`DELETE /api/players/:id`**: Remove um jogador existente pelo ID.

### Clubes

-   **`GET /api/clubs`**: Retorna uma lista de todos os clubes registrados.
-   **`GET /api/clubs/:id`**: Retorna os detalhes de um clube específico pelo seu ID.
-   **`POST /api/clubs`**: Adiciona um novo clube.
-   **`PATCH /api/clubs/:id`**: Atualiza as informações de um clube pelo ID.
-   **`DELETE /api/clubs/:id`**: Remove um clube existente pelo ID.

## Configuração

Para garantir o correto funcionamento da API, é necessário configurar as variáveis de ambiente. Crie um arquivo `.env` na raiz do projeto e defina os valores de acordo com as necessidades do seu ambiente de desenvolvimento, como por exemplo:

## Contribuição

Contribuições são sempre bem-vindas! Para contribuir com este projeto, siga as instruções abaixo:

1. Faça um fork deste repositório.
2. Crie uma nova branch para a sua funcionalidade ou correção de bug:

    ```sh
    git checkout -b feature/nova-feature
    ```

3. Commit suas alterações com uma mensagem clara e descritiva:

    ```sh
    git commit -m 'Adiciona nova feature'
    ```

4. Envie suas alterações para o repositório remoto:

    ```sh
    git push origin feature/nova-feature
    ```

5. Abra um **Pull Request** no GitHub e aguarde a revisão.

## Licença

Este projeto está licenciado sob os termos da licença MIT. Consulte o arquivo `LICENSE` para mais detalhes.
