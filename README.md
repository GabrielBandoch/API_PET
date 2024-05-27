# API de Controle de Pets

## Visão Geral do Projeto

Este projeto consiste em uma API desenvolvida em Node.js para realizar operações CRUD (Create, Read, Update, Delete) em um banco de dados MariaDB, especificamente para gerenciar dados de pets. A API permite o cadastro, atualização, exclusão e consulta de pets, além de oferecer um endpoint adicional para busca por nome do pet. O código está organizado em camadas/módulos para melhorar a manutenção e escalabilidade.

## Banco de dados

![Banco de Dados](https://github.com/GabrielBandoch/API_PET/blob/main/Imagens/BD.png)

## Estrutura do Projeto

A estrutura do projeto é organizada em várias pastas e arquivos, cada um responsável por uma parte específica da aplicação:

- **config/connection.js**: Configuração para conectar ao banco de dados MariaDB utilizando a biblioteca `mysql2/promise`.
- **controller/controller_pets.js**: Contém as funções que implementam as operações CRUD para a entidade "pet".
- **routes/route_pet.js**: Define as rotas da API que são mapeadas para as funções de controle.
- **server.js**: Configura e inicia o servidor Express, e registra as rotas definidas.
- **apiPet.http**: Contém exemplos de requisições HTTP para testar a API.

## O que Eu Aprendi

Durante o desenvolvimento desta API, aprendi a:

- **Configurar e Conectar ao Banco de Dados**: Utilizar a biblioteca `mysql2/promise` para conectar ao banco de dados MariaDB.
- **Organização de Código em Camadas**: Organizar o código em diferentes camadas/módulos para melhorar a manutenção e a escalabilidade.
- **CRUD com Node.js e Express**: Implementar operações CRUD utilizando Node.js e Express.
- **Manipulação de Dados**: Trabalhar com dados em formato JSON para inserção, atualização e exclusão no banco de dados.
- **Rotas e Controladores**: Definir rotas e controladores para gerenciar as requisições HTTP.
- **Testes com Requisições HTTP**: Utilizar ferramentas para testar as requisições HTTP e validar as operações da API.

## Imagens das Requisições

Aqui estão algumas imagens das requisições realizadas para testar a API:

### Requisição GET
![GET Request](https://github.com/GabrielBandoch/API_PET/blob/main/Imagens/GET.png)

### Requisição POST
![POST Request](https://github.com/GabrielBandoch/API_PET/blob/main/Imagens/POST.png)

### Requisição PUT
![PUT Request](https://github.com/GabrielBandoch/API_PET/blob/main/Imagens/UPDATE.png)

### Requisição DELETE
![DELETE Request](https://github.com/GabrielBandoch/API_PET/blob/main/Imagens/DELETE.png)

### Busca por Nome
![Busca por Nome](https://github.com/GabrielBandoch/API_PET/blob/main/Imagens/Busca_Nome.png)
