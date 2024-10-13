# Mario Kart.JS

![Mario Kart](./GameMarioKartWithNode/docs/header.gif)

## Objetivo

Mario Kart é uma série de jogos de corrida desenvolvida e publicada pela Nintendo. Nosso desafio será criar uma lógica de um jogo de vídeo game para simular corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo.

## Regras & Mecânicas

### Jogadores

- O Computador deve receber dois personagens para disputar a corrida em um objeto cada.

### Pistas

- Os personagens irão correr em uma pista aleatória de 5 rodadas.
- A cada rodada, será sorteado um bloco da pista que pode ser uma reta, curva ou confronto.

#### Blocos da Pista

- **RETA**: O jogador deve jogar um dado de 6 lados e somar o atributo VELOCIDADE. Quem vencer ganha um ponto.
- **CURVA**: O jogador deve jogar um dado de 6 lados e somar o atributo MANOBRABILIDADE. Quem vencer ganha um ponto.
- **CONFRONTO**: O jogador deve jogar um dado de 6 lados e somar o atributo PODER. Quem perder, perde um ponto.
- Nenhum jogador pode ter pontuação negativa (valores abaixo de 0).

### Condição de Vitória

- Ao final, vence quem acumulou mais pontos.

## Como Executar

1. Clone o repositório:
    ```sh
    git clone <URL_DO_REPOSITORIO>
    cd GameMarioKartWithNode
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

3. Execute o jogo:
    ```sh
    npm run dev
    ```

## Estrutura do Projeto


