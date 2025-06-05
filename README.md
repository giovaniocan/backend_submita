# 🔐 Auth API - Sistema de Autenticação

Uma API simples de autenticação com Node.js, TypeScript e JWT.

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **TypeScript** - Tipagem estática
- **Express** - Framework web
- **Prisma** - ORM para banco de dados
- **PostgreSQL** - Banco de dados
- **JWT** - Autenticação com tokens
- **Bcrypt** - Hash de senhas

## 📁 Estrutura do Projeto

```
src/
├── application/       # Serviços e DTOs
├── domain/           # Entidades
├── infrastructure/   # Controllers, repositories, rotas
├── shared/          # Middlewares, erros, utils
├── lib/             # Configurações (Prisma)
└── server.ts        # Arquivo principal
```

## 🚀 Como Executar

### 1. Clone e instale
```bash
git clone <url-do-repo>
cd auth-api
npm install
```

### 2. Configure o .env
```env
DATABASE_URL="postgresql://postgres:123456@localhost:5432/auth_db"
JWT_SECRET="seu-jwt-secret-aqui"
PORT=3000
```

### 3. Inicie o banco (Docker)
```bash
docker-compose up -d
```

### 4. Execute as migrações
```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Inicie o servidor
```bash
npm run dev
```

Servidor rodando em: `http://localhost:3000` 🎉

## 📋 Funcionalidades

- ✅ Registro de usuários
- ✅ Login com JWT
- ✅ Middleware de autenticação
- ✅ Rotas protegidas
- ✅ Hash de senhas
- ✅ Tratamento de erros

## 🧪 Testando

### 1. Registrar usuário
```bash
POST http://localhost:3000/api/auth/register
{
  "name": "João",
  "email": "joao@email.com", 
  "password": "123456"
}
```

### 2. Fazer login
```bash
POST http://localhost:3000/api/auth/login
{
  "email": "joao@email.com",
  "password": "123456"
}
```

### 3. Acessar perfil (precisa do token)
```bash
GET http://localhost:3000/api/auth/profile
Authorization: Bearer seu-token-aqui
```

## 📦 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build para produção
npm start        # Executar produção
```

---

Desenvolvido com ❤️ e TypeScript
