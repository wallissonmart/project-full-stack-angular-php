Projeto CRUD Produto

Este é um projeto Angular com um backend em Laravel (PHP) e PostgreSQL como banco de dados.
Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js (com npm)
Angular CLI (para o frontend)
PHP (com Composer)
Docker

Configuração do Back-end (Laravel e PostgreSQL no Docker)

Clone o repositório:

git clone https://github.com/seu-usuario/NomeDoProjeto.git
cd NomeDoProjeto/backend

Copie o arquivo de ambiente:

cp .env.example .env

Configure as variáveis de ambiente no arquivo .env:

    Banco de dados PostgreSQL:

    env

    DB_CONNECTION=pgsql
    DB_HOST=postgres
    DB_PORT=5432
    DB_DATABASE=nome_do_banco
    DB_USERNAME=usuario_do_banco
    DB_PASSWORD=senha_do_banco

Inicie os contêineres do Docker:

docker-compose up -d

Instale as dependências do Laravel:

docker-compose exec app composer install

Execute as migrações e semeie o banco de dados:

docker-compose exec app php artisan migrate --seed

O backend estará acessível em http://localhost:8000.

Configuração do Front-end

    No diretório principal do projeto, vá para o diretório do frontend:

cd ../frontend

Instale as dependências:

npm install

Inicie o aplicativo:

ng serve

O frontend estará acessível em http://localhost:4200.

Abra um navegador e acesse http://localhost:4200.