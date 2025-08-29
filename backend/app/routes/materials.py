from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from .. import models, schemas, database

router = APIRouter(prefix="/materials", tags=["materials"])

@router.get("/", response_model=list[schemas.Material])
def get_materials(db: Session = Depends(database.SessionLocal)):
    return db.query(models.Material).all()

@router.post("/", response_model=schemas.Material)
def create_material(material: schemas.MaterialCreate, db: Session = Depends(database.SessionLocal)):
    new_material = models.Material(nome=material.nome, localizacao=material.localizacao)
    db.add(new_material)
    db.commit()
    db.refresh(new_material)
    return new_material
