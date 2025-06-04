# 🚀 Clean Architecture Auth API

API de autenticação com Node.js, Express, TypeScript e PostgreSQL usando Docker.

## 📋 Funcionalidades

- ✅ **Registro e Login de usuários**
- ✅ **Autenticação JWT**
- ✅ **Clean Architecture**
- ✅ **PostgreSQL + Docker**
- ✅ **Hash de senhas (bcrypt)**
- ✅ **Validações robustas**

## 🛠️ Tecnologias

- **Node.js + TypeScript**
- **Express + JWT**
- **PostgreSQL + Docker**
- **bcryptjs + Joi**

## 🚀 Instalação

### Docker (Recomendado)

```bash
git clone <url-do-repositorio>
cd clean-architecture-auth-api
cp .env.example .env
docker-compose up -d
```

### Local

```bash
npm install
npm run dev  # (requer PostgreSQL local)
```

## 📚 Endpoints

| Método | Endpoint             | Descrição         | Auth |
| ------ | -------------------- | ----------------- | ---- |
| POST   | `/api/auth/register` | Registrar usuário | ❌   |
| POST   | `/api/auth/login`    | Login             | ❌   |
| GET    | `/api/auth/profile`  | Perfil do usuário | ✅   |

## 📝 Exemplos

### Registro

```bash
POST /api/auth/register
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "MinhaSenh@123",
  "telefone": "(11) 99999-9999",
  "curso": 1
}
```

### Login

```bash
POST /api/auth/login
{
  "email": "joao@email.com",
  "senha": "MinhaSenh@123"
}
```

### Perfil

```bash
GET /api/auth/profile
Authorization: Bearer <token>
```

## 🧪 Scripts

```bash
# Docker
docker-compose up -d        # Iniciar
docker-compose down         # Parar
docker-compose logs -f api  # Logs

# Local
npm run dev    # Desenvolvimento
npm run build  # Build
npm start      # Produção
```

## 🔒 Variáveis (.env)

```env
PORT=3000
DB_HOST=postgres
DB_PORT=5432
DB_USER=auth_user
DB_PASSWORD=auth_password
DB_NAME=auth_db
JWT_SECRET=sua-chave-secreta
JWT_EXPIRES_IN=24h
```

## 🗄️ Banco de Dados

### Users

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL,
  telefone VARCHAR(20),
  curso INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Courses

```sql
CREATE TABLE courses (
  id SERIAL PRIMARY KEY,
  ds_curso VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 📁 Estrutura

```
src/
├── domain/           # Entidades e interfaces
├── application/      # DTOs e services
├── infrastructure/   # Database e repositories
├── presentation/     # Controllers e routes
└── shared/          # Utils e errors
```

## 👨‍💻 Autor

Desenvolvido com ❤️

---

⭐ **Se ajudou, deixe uma estrela!**
