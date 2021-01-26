# Instruções de utilização

  - Instale as dependências com o comando a seguir.
  ```sh
    $ npm install
 ```
  - Os passos seguintes exigem que a máquina hospedeira tenha o PostgreSQL rodando com uma base já criada. Não é necessário criar nenhum tabela.
  - Crie na raíz do projeto um arquivo .env e preencha-o conforme o template especificado no arquivo .env-example.
  - Crie e popule a tabela dos products com os comandos a seguir.
```sh
    $ npm run migrate:run
    $ npm run seed:run
 ```
- Para rodar o projeto, execute o comando a seguir.
```sh
    $ npm run start:dev
 ```
- Para rodar o projeto em ambiente de produção, execute os comandos a seguir.
```sh
    $ npm run build
    $ npm run start:prod
 ```