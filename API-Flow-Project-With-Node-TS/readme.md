# API Flow Project with Node

Este é um projeto de API desenvolvido com Node.js e TypeScript, projetado para gerenciar e fornecer informações sobre podcasts. A API permite listar episódios de podcasts e filtrar episódios com base em critérios específicos.

## Funcionalidades

- **Listar Episódios**: Recupera uma lista de todos os episódios de podcasts disponíveis.
- **Filtrar Episódios**: Filtra episódios de podcasts com base em parâmetros fornecidos na URL.

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para construir a API.
- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **HTTP**: Protocolo usado para comunicação entre o cliente e o servidor.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:
repositories/
    
    
routes/
    routes.ts
server.ts
services/
    filter-episodes-service.ts
    list-episodes-service.ts
utils/
    
    http-methodes.ts
    status-code.ts