from fastapi import FastAPI
from . import models, database
from .routes import materials, auth

app = FastAPI(title="Controle de Materiais")

# Criar tabelas no DB
models.Base.metadata.create_all(bind=database.engine)

# Rotas
app.include_router(materials.router)
app.include_router(auth.router)

@app.get("/")
def root():
    return {"msg": "API Controle de Materiais rodando 🚀"}
