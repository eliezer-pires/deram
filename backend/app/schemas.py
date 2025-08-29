from pydantic import BaseModel

class MaterialBase(BaseModel):
    nome: str
    localizacao: str

class MaterialCreate(MaterialBase):
    pass

class Material(MaterialBase):
    id: int
    class Config:
        orm_mode = True
