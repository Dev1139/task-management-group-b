# DevPulse Backend – FastAPI, PostgreSQL, UV, Clerk

DevPulse Backend is the core API service powering the **AI-assisted developer productivity platform**.  
It manages:

- Daily / Weekly / Monthly task tracking  
- AI-generated progress reports  
- Email & WhatsApp report delivery  
- User settings, reminders & automation  
- Clerk-based authentication  
- Productivity calendar backend  
- Scheduler-based auto reports  

Built using **FastAPI**, **PostgreSQL**, **SQLAlchemy**, and **uv**.

---

#  Features

### ✔ Core Functionality
- Modular FastAPI architecture  
- Task CRUD + time tracking  
- Daily notes (plans, blockers, dependencies)  
- AI report generation using LLM model (Daily/Weekly/Monthly)  
- Report sending via Email 
- Productivity calendar summary APIs  
- User settings management  
- Auto-send & reminders  
- Secure token authentication with Clerk  

---

# Tech Stack

| Area | Technology |
|------|------------|
| Backend Framework | FastAPI |
| Database | PostgreSQL |
| ORM | SQLAlchemy |
| Dependency Manager | **UV** |
| Auth | Clerk |
| AI | LLM model api|
| Scheduler | ---|
| Email | --- |
| Deployment | Docker |

---

# 📁 Project Structure

```
backend-fastapi/
│
├── app/
│   ├── api/                        # API endpoints
│   │   └── v1/
│   │       └── routes/            # Settings & env
│   ├── core/                     
│   │   ├── config.py              
│   │   ├── clerk_auth.py          # Clerk token verification
│   │   ├── scheduler.py           # Background jobs
│   │   └── security.py
│   ├── db/
│   │   ├── session.py             # Database connection
│   │   └── base.py
│   ├── models/                    # SQLAlchemy Models
│   ├── schemas/                   # Pydantic Schemas
│   ├── services/                  # Business Logic
│   └── main.py                    # FastAPI Entry Point
│
├── .env.example                   # Template env file
├── .gitignore
├── pyproject.toml                 # UV project definition
├── uv.lock
└── README.md
```

---

# Setup & Installation

## **1. Install uv**
```bash
pip install uv
```

---

## **2. Clone the repository**
```bash
git clone https://github.com/pradeep-kumavat/task-management-group-b.git
cd task-management-group-b/backend-fastapi
```

---

## **3. Create `.env` file**
```bash
cp .env.example .env
```

Fill required values:

```
DATABASE_URL=postgresql://user:pass@localhost:5432/devpulse
LLMAI_API_KEY=your-key
CLERK_SECRET_KEY=your-secret
```

---

## **4. Install dependencies**
```bash
uv sync
```

---

## **5. Run backend locally**
```bash
uv run uvicorn app.main:app --reload
```

Backend will start at:

- API Root → http://localhost:8000  
- Swagger UI → http://localhost:8000/docs  


---

# Branching Strategy (GitFlow)

We use **3 main branch types**:

```
main      → production-ready
dev       → integration branch
feature/* → individual features
```

### Branch Types

| Branch | Purpose |
|--------|----------|
| main | Stable & deployable |
| dev | All sprint merges |
| feature/<name> | Feature development |
| fix/<issue> | Bug fixes |


### Examples:
```
feature/auth-module
feature/tasks-api
feature/ai-report-generator
fix/calendar-summary-bug
release/v1.0.0
```

---

# Commit Message Rules (Conventional Commits)

Use one of the allowed prefixes:

| Prefix | Meaning |
|--------|---------|
| feat: | New feature |
| fix: | Bug fix |
| docs: | Documentation only |
| refactor: | Code restructuring |
| test: | Add or update tests |
| chore: | CI / config / tool changes |

### Examples:
```
feat: implement daily report generator
fix: incorrect weekly date range calculation
docs: update backend installation guide
refactor: optimize task fetch query
```

---

# Pull Request Guidelines

Each Pull Request must include:

### Title example:
```
feat: add weekly report API
```

### Description:
```
- Added weekly aggregation logic
- Integrated OpenAI prompt
- Added /reports/weekly route
- Added tests for date calculation
```

### Before creating PR:
- [ ] No `.venv` committed  
- [ ] `.env` NOT committed  
- [ ] Code tested locally  
- [ ] New APIs documented  
- [ ] Branch up-to-date with `dev`  

---

# Contribution Rules

1. Never commit directly to `main`.  
2. Always create a **feature/** branch.  
3. PR must be reviewed by at least **one backend developer**.  
4. Never commit secrets (`.env`).  
5. Follow folder structure and naming conventions.  
6. Avoid large PRs — prefer smaller, meaningful commits.

---

# Summary

This backend is:

- Scalable  
- AI-powered  
- Secure  
-  Modular  
-  Production-ready  
-  Easy to collaborate on  
