# loja-virtual
 A Loja Virtual trata-se de um desafio recebido no processo de seleção para desenvolvedor no Instituto de Desenvolvimento Tecnológico (INDT), sendo dividído em Frontend realizado em Angular e Backend desenvolvido em Node.
 
 ### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), Docker, Docker-compose
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

###  Rodando o Projeto

```bash
# Clone este repositório
$ git clone <https://github.com/lukspk/loja-virtual.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd loja-virtual

# Execute este comando (necessário senha root)
$ sudo docker-compose up -d loja-postgres

# Execute este comando (necessário senha root)
$ sudo docker-compose exec loja-postgres bash

# crie o banco de dados
$ createdb -U default loja

# Saia do container
$ exit

# Execute o comando
$ cd backend && npm install --save-dev sequelize-cli && npx sequelize db:migrate && cd config && nano database.js

# Troque o host de '127.0.0.1' para 'loja-postgres'
$ Ctrl + O e Ctrl + X para salvar e sair

# Volte para a raiz do projeto
$ cd ../../

# Execute este comando 
$ sudo docker-compose build backend frontend && sudo docker-compose up -d backend frontend

# O servidor inciará na porta:4200 - acesse <http://localhost:4200>
```
## Links
### Frontend marketplace <http://localhost:4200>
### Frontend restrito - CRUD de Produtos <http://localhost:4200/restrito>
### Backend <http://localhost:8080>
### Documentacao Swagger <http://localhost:8080/api-doc>


```

## Swagger
Para visualizar a documentação da API acessar o [Swagger UI](http://localhost:8080/api-doc) que possui a documentação de todas as requisições.
