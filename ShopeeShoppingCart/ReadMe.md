
### Arquivos Principais

- **`src/main.js`**: Ponto de entrada do aplicativo. Importa os serviços de carrinho e item, e executa a lógica principal.
- **`src/services/cart.js`**: Contém funções para manipulação do carrinho, como adicionar, remover e calcular o total dos itens.
- **`src/services/item.js`**: Contém a função para criar novos itens.

## Funcionalidades

### Funções do Carrinho

- **`addItem(userCart, item)`**: Adiciona um item ao carrinho.
- **`deleteItem(userCart, name)`**: Remove um item do carrinho pelo nome.
- **`removeItemByIndex(userCart, index)`**: Remove um item do carrinho pelo índice.
- **`removeItem(userCart, item)`**: Remove um item do carrinho pelo objeto item.
- **`calculateTotal(userCart)`**: Calcula o total do carrinho.
- **`displayCart(cart)`**: Exibe o conteúdo do carrinho.

### Funções do Item

- **`createItem(name, price, quantity)`**: Cria um novo item com nome, preço e quantidade.

## Como Executar

1. Clone o repositório.
2. Instale as dependências:
    ```sh
    npm install
    ```
3. Execute o projeto em modo de desenvolvimento:
    ```sh
    npm run dev
    ```

## Configuração do Prettier

O projeto utiliza o Prettier para formatação de código. As configurações estão no arquivo `.prettierrc`.

## Scripts Disponíveis

- **`format`**: Formata o código usando Prettier.
- **`dev`**: Executa o projeto em modo de desenvolvimento.

## Licença

Este projeto está licenciado sob a licença ISC.