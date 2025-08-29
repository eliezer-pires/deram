from fastapi import APIRouter, HTTPException

router = APIRouter(prefix="/auth", tags=["auth"])

# Login fake (sem banco, só teste)
@router.post("/login")
def login(username: str, password: str):
    if username == "admin" and password == "123":
        return {"token": "fake-jwt-token", "role": "gestor"}
    elif username == "operador" and password == "123":
        return {"token": "fake-jwt-token", "role": "operador"}
    else:
        raise HTTPException(status_code=401, detail="Usuário ou senha inválidos")
