import sqlalchemy
from sqlalchemy import Column, Integer, String, Float
from marshmallow import Schema, fields

from .entity import Entity, Base

class Center(Entity, Base) :
    __tablename__ = 'Center'

    id = Column(Integer, primary_key = True)
    x = Column(Float)
    y = Column(Float)
    colorID = Column(Integer)
    manpower = Column(Float)

    def __init__(self,x=None, y=None, colorID=None, manpower=None):
        self.x = x
        self.y = y
        self.colorID = colorID
        self.manpower = manpower


class CenterSchema(Schema):
    id = fields.Number()
    x = fields.Float()
    y = fields.Float()
    colorID = fields.Integer()
    manpower = fields.Float()