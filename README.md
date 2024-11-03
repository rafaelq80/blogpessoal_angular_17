# Projeto Blog Pessoal - Frontend 

<br />

<div align="center">
    <img src="https://i.imgur.com/ej1i3wE.png" title="source: imgur.com" width="50%"/>
</div>



<br /><br />

## 1. Descrição

O Projeto Blog Pessoal é um **frontend** desenvolvido com o framework **Angular** para consumir uma API de um Blog Pessoal, desenvolvida em **NestJS**. A aplicação permite o gerenciamento dos **Usuários**, **Postagens** e **Temas**, além de utilizar autenticação por usuário e senha, com validação de token **JWT** para proteger as rotas e garantir a segurança da aplicação.

### 1.1. Principais Funcionalidades

- **Autenticação por Usuário e Senha**: Login seguro para controlar o acesso dos usuários.
- **Validação de Token JWT**: Proteção de rotas e verificação de token para acessar recursos privados.
- **CRUD de Usuários**: Criação, leitura e atualização de perfis de usuários.
- **CRUD de Postagens**: Gerenciamento das Postagens dos usuários.
- **CRUD de Temas**: Gerenciamento dos Temas das Postagens.

------

## 2. Tecnologias

| Item                         | Descrição  |
| ---------------------------- | ---------- |
| **Servidor**                 | Node JS    |
| **Linguagem de programação** | TypeScript |
| **Framework**                | Angular    |
| **Estilização**              | Tailwind   |

---

## 3. Outras Bibliotecas

| Item               | Descrição         |
| ------------------ | ----------------- |
| **@ng-icons**      | Ícones            |
| **@ngneat/dialog** | Modal             |
| **ngx-loading**    | Loaders           |
| **ngx-toastr**     | Toastify (Alerts) |

------

## 4. Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v16+)
- [Angular CLI](https://v17.angular.io/guide/setup-local)
- Backend da API NestJS rodando ([Repositório da API](https://github.com/rafaelq80/blogpessoal_nest_2024))

---

## 5. Instalação - Ambiente Local

### 5.1. Clonando o repositório

```bash
git clone https://github.com/rafaelq80/blogpessoal_angular_17.git
cd blogpessoal_angular_17
```

### 5.2. Instalando as dependências

Utilize o comando abaixo para instalar todas as bibliotecas através do npm:

```bash
npm install
```

### 5.3. Configuração do ambiente

A URL da API NestJS deve estar apontando para o endereço abaixo:

```bash
http://localhost:4000
```

### 5.4. Executando o projeto

Inicie o servidor de desenvolvimento com o Angular CLI:

```bash
ng serve
```

A aplicação estará disponível no enderço: `http://localhost:4200`

---

## 6. Estrutura do Projeto

```plaintext
src
    ├── app
        │
        ├── components/       # Componentes reutilizáveis
        ├── models/           # Estrutura de dados da aplicação-
        ├── pages/            # Páginas da aplicação
        ├── services/         # Integração com a API (requisições HTTP)
        └── App           	  # Componente principal da aplicação
  	├── environments		 # Gerenciamento de estado global (ex: autenticação)
```

---

## 7. Autenticação e Validação de Token JWT

### Fluxo de Autenticação

1. O usuário realiza o login com **e-mail** e **senha**.
2. A aplicação faz uma requisição para a API, que retorna um token **JWT**.
3. O token é armazenado no **Environment** para uso em futuras requisições autenticadas.
4. Nas rotas protegidas, o token é validado antes do acesso aos recursos.

### Controle de Autenticação

- Se o token expirar ou for inválido, o usuário será redirecionado para a página de login.

## 

