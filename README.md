# 🎓 SUBMITA API

API para gerenciamento de eventos científicos com Node.js + TypeScript + PostgreSQL.

## 🚀 Setup Rápido

```bash
git clone <repo>
cd submita-backend
npm install
cp .env.example .env
docker-compose up -d
npm run prisma:generate-all
npm run dev
```

**URL:** `http://localhost:8080`

## 🔐 Roles
- **STUDENT**: Autores (padrão)
- **EVALUATOR**: Avaliadores  
- **COORDINATOR**: Coordenadores

## 📋 Endpoints

### Auth (`/api/auth`)

**Registro:**
```http
POST /api/auth/register
{
  "name": "João",
  "email": "joao@email.com", 
  "password": "123456",
  "role": "STUDENT"
}
```

**Login:**
```http
POST /api/auth/login
{
  "email": "joao@email.com",
  "password": "123456"
}
```

**Perfil:** 🔒
```http
GET /api/auth/profile
Authorization: Bearer <token>
```

**Criar Avaliador:** 🔒 COORDINATOR
```http
POST /api/auth/register-evaluator
{
  "name": "Dr. Maria",
  "email": "maria@email.com",
  "password": "123456"
}
```

### Eventos (`/api/events`)

**Listar Eventos:** (Público)
```http
GET /api/events?page=1&limit=10&search=termo&status=SUBMISSIONS_OPEN
```

**Buscar por ID:** (Público)
```http
GET /api/events/:id?includeStats=true
```

**Criar:** 🔒 COORDINATOR
```http
POST /api/events
{
  "name": "Evento 2025",
  "description": "Descrição",
  "eventStartDate": "2025-07-01T08:00:00Z",
  "eventEndDate": "2025-07-03T18:00:00Z", 
  "submissionStartDate": "2025-06-01T00:00:00Z",
  "submissionEndDate": "2025-06-30T23:59:59Z",
  "evaluationType": "PAIR"
}
```

**Atualizar:** 🔒 COORDINATOR
```http
PUT /api/events/:id
{
  "name": "Novo nome",
  "status": "SUBMISSIONS_OPEN"
}
```

**Desativar:** 🔒 COORDINATOR
```http
PATCH /api/events/:id/deactivate
```

**Deletar:** 🔒 COORDINATOR
```http
DELETE /api/events/:id
```

### Avaliadores de Eventos (`/api/events`)

**Adicionar Avaliadores:** 🔒 COORDINATOR
```http
POST /api/events/:eventId/evaluators
{
  "userIds": ["uuid1", "uuid2"]
}
```

**Listar Avaliadores do Evento:** 🔒 COORDINATOR
```http
GET /api/events/:eventId/evaluators?page=1&search=nome
```

**Remover Avaliador:** 🔒 COORDINATOR
```http
DELETE /api/events/:eventId/evaluators/:userId
```

### Usuários (`/api/users`)

**Listar Todos Avaliadores:** 🔒 COORDINATOR
```http
GET /api/users/evaluators?page=1&limit=10&search=nome&isActive=true
```

## 📦 Scripts

```bash
npm run dev          # Desenvolvimento
npm run build        # Build
npm start            # Produção
npm run prisma:generate-all  # Gerar Prisma + Migrate
```

## 🗄️ Banco de Dados

```bash
# Reset completo (apaga dados)
npx prisma migrate reset

# Nova migration
npx prisma migrate dev --name nome_da_migration

# Visualizar BD
npx prisma studio
```

## 🔧 Variáveis de Ambiente

```env
PORT=8080
DATABASE_URL="postgresql://root:root@localhost:5433/submita_db"
JWT_SECRET="seu-jwt-secret-aqui"
JWT_EXPIRES_IN=7d
```

## ⚠️ Status HTTP

- **200**: Sucesso
- **201**: Criado
- **400**: Dados inválidos
- **401**: Não autenticado
- **403**: Sem permissão
- **404**: Não encontrado
- **409**: Conflito (email duplicado)
- **500**: Erro interno

## 🚨 Troubleshooting

**Token inválido:** Refazer login  
**Banco offline:** `docker-compose up -d`  
**Migration error:** `npx prisma migrate reset`
