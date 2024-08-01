# TODO List Application

Este é um aplicativo de TODO list desenvolvido usando Angular para o frontend e Django com Django Rest Framework para o backend. Ele permite que os usuários adicionem, editem, completem e excluam tarefas.

## Tecnologias Usadas

- **Frontend**: Angular 8, SCSS
- **Backend**: Django, Django Rest Framework

## Instalação

**Frontend (Angular):**

1. Clone o repositório:

   ```bash
   git clone [URL do Repositório]
   ```

2. Navegue até a pasta do frontend e instale as dependências:

   ```bash
   cd frontend
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   ng serve
   ```

**Backend (Django):**

1. Clone o repositório (se ainda não o fez):

   ```bash
   git clone [URL do Repositório]
   ```

2. Navegue até a pasta do backend e crie um ambiente virtual:

   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # No Windows use venv\Scripts\activate
   ```

3. Instale as dependências:

   ```bash
   pip install -r requirements.txt
   ```

4. Faça as migrações do banco de dados:

   ```bash
   python manage.py migrate
   ```

5. Inicie o servidor de desenvolvimento:

   ```bash
   python manage.py runserver
   ```

## Uso

- Navegue até `http://localhost:4200` para acessar a aplicação Angular.
- Navegue até `http://localhost:8000` para acessar o backend Django (se necessário para testes ou administração).
