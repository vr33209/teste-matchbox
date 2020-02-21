# test-matchbox - BACKEND

Projeto desenvolvido para um teste na empresa matchBox, usando node-js, mongoose, yup, express,
entre outras tecnologias.

Como será feito:
* Inicialmente cadastraremos um usuário.
* Crie um usuario com o type admin ou candidate.
* Logue na aplicação com usuário criado.
* Começaremos em busca da autentificação na aplicação.
* Depois de obter o token da aplicação iremos começar a implementar as funcionalidades.
* Cadastre vagas de empregos.
* Logo em seguida Cadastre candidatos.
* Candidatos nao possuem acesso a criação,edição, atualização e nem deletar uma vaga.

## Instalação

Para instalar a começar a usar o test-matchbox, você deve ter o node instalado e de preferencia utilizar o yarn, para saber mais confira abaixo os links de instalação:

* https://nodejs.org/en/
* https://yarnpkg.com/lang/en/

Para codar siga os seguintes comandos:

````shell script
# Para instalar as dependencias
yarn install ou npm install

# Para iniciar o desenvolvimento
yarn dev ou npm run dev
````
## Adicione um arquivo na raiz do projeto .env
com as seguintes variaveis:

* USER_BANK=joao
* PASSWORD_BANK=joao123456
* SECRET_TOKEN=testMacthBox2200

# Rotas
*-* Tudo em **negrito** são parametros obrigatorios.

## User
* Metodo POST (/user) - Cria o usuario para logar e conseguir criar vagas e candidatos.
*-* Parametros: Nome, email, password, birthdate, type(Necessario***, **admin** ou **candidate**).

* Metodo POST (/session) - Cria a sessão do usuário na aplicação.
*-* Parametros: **email**, **password**.

* Metodo GET (/users) - A partir daqui precisaremos estar logado, essa rota lista todos os usuários.
*-* Parametros: **Nenhum**.

* Metodo DELETE (/user/:_id) - Deleta um usuario.
*-* Parametros: **id**.
  
* Metodo UPDATE (/user/:_id) - Atualiza um usuario.
*-* Parametros: ***id***.

## Candidate
* Metodo POST (/candidate) - Cria o candidatos.
*-* Parametros: **Nome**, **email**, **password**, **birthdate**, cpf,graduation_course_name
graduation_institution_name, year_of_formation, resources.

* Metodo GET (/candidates) - Lista todos os candidatos.
*-* Parametros: **Nenhum**.
  
* Metodo DELETE (/candidate/:_id) - Deleta um candidato.
*-* Parametros: **id**.
  
* Metodo UPDATE (/candidate/:_id) - Atualiza um candidato.
***-*** Parametros: **id**.

 
## Jobs
* Metodo POST (/job) - Cria uma vaga.
*-* Parametros: **name_jobs**, **description**, **date_limite**, **number_jobs**, **candidate_id**.

* Metodo GET (/jobs) - Lista todas as vagas.
*-* Parametros: **Nenhum**.
* Metodo DELETE (/user/:_id) - Deleta uma vaga.
*-* Parametros: **id**.

* Metodo UPDATE (/user/:_id) - Atualiza uma vaga.
*-* Parametros: **id**.

## Tecnologias usadas
* **Nodejs**
* **Express**.
* **Yup**.
* **Mongoose**.
* **Nodemon**.
* **Bcrypt**.
* **jsonwebtoken**.
* **sucrase**.
  
# Desenvolvido por Joao Victor.


