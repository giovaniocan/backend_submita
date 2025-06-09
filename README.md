# 🔐 SUBMITA API - Sistema de Autenticação

API de autenticação com Node.js, TypeScript e JWT com controle de roles.

## 🛠️ Tecnologias

- **Node.js** + **TypeScript** + **Express**
- **Prisma** + **PostgreSQL**
- **JWT** + **Bcrypt**

## 🚀 Como Executar

### 1. Instalar e configurar

```bash
git clone <url-do-repo>
cd submita-backend
npm install
```

### 2. Configurar .env

```env
# Server
PORT=8080
NODE_ENV=development

# Database
DATABASE_URL="postgresql://root:root@localhost:5433/submita_db?schema=public"

# JWT - NOVAS VARIÁVEIS
JWT_SECRET="seu-jwt-aqui"
JWT_EXPIRES_IN=24h
```

### 3. Rodar banco e migrations

```bash
docker-compose up -d
npm prisma:generate-all
npm run dev:old
```

Servidor: `http://localhost:8080` 🎉

## 🔐 Sistema de Roles

- **STUDENT** - Alunos/Autores (padrão)
- **EVALUATOR** - Avaliadores
- **COORDINATOR** - Coordenadores

## 📋 Endpoints

### **Registro (Público)**

```http
POST /api/auth/register
{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456",
  "role": "STUDENT"
}
```

### **Login (Público)**

```http
POST /api/auth/login
{
  "email": "joao@email.com",
  "password": "123456"
}
```

**Retorna:**

```json
{
  "success": true,
  "data": {
    "user": { "id": "...", "name": "João Silva", "role": "STUDENT" },
    "token": "eyJhbGciOiJIUzI1NiIs...",
    "expiresIn": "7d"
  }
}
```

### **Perfil (Protegido)**

```http
GET /api/auth/profile
Authorization: Bearer SEU_TOKEN_AQUI
```

## 🧪 Testando

### Sequência de teste:

```bash
# 1. Registrar
curl -X POST http://localhost:8080/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"João","email":"joao@email.com","password":"123456"}'

# 2. Login
curl -X POST http://localhost:8080/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"joao@email.com","password":"123456"}'

# 3. Profile (usar token do login)
curl -X GET http://localhost:8080/api/auth/profile \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

### Usando REST Client (VS Code):

```http
### Registro
POST http://localhost:8080/api/auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "123456"
}

### Login
POST http://localhost:8080/api/auth/login
Content-Type: application/json

{
  "email": "joao@email.com",
  "password": "123456"
}

### Profile
GET http://localhost:8080/api/auth/profile
Authorization: Bearer {{token_do_login}}
```

## ⚠️ Validações

- **Nome**: mínimo 2 caracteres
- **Email**: formato válido e único
- **Senha**: mínimo 6 caracteres
- **Token**: expira em 7 dias

## ❌ Principais Erros

| Código | Erro            | Solução                       |
| ------ | --------------- | ----------------------------- |
| 400    | Dados inválidos | Verificar campos obrigatórios |
| 401    | Token inválido  | Fazer login novamente         |
| 409    | Email já existe | Usar outro email              |
| 500    | Erro interno    | Verificar banco/logs          |

## 🔧 Scripts

```bash
npm run dev      # Desenvolvimento
npm run build    # Build produção
npm start        # Rodar produção
```

## 🚨 Problemas Comuns

**Erro "Expected String, provided Int"**

- Problema: Token antigo com ID numérico
- Solução: `npx prisma migrate reset` (apaga dados)

**"JWT secret not configured"**

- Adicionar `JWT_SECRET` no .env

**"Database connection failed"**

- Rodar `docker-compose up -d`

---

Desenvolvido para o sistema SUBMITA 🚀
