import sqlalchemy
from sqlalchemy import Column, Integer, String
from marshmallow import Schema, fields

from .entity import Entity, Base

class Village(Entity, Base) :
    __tablename__ = 'village'

    id = Column(Integer, primary_key = True)
    count = Column(Integer)
    latitude = Column(Integer)
    longitude = Column(Integer)
    color_id = Column(Integer)
    
    def __init__(self,count=None,latitude=None,longitude=None,color_id=None):
        self.count = count
        self.latitude = latitude
        self.longitude = longitude
        self.color_id = color_id

class VillageSchema(Schema):
    id = fields.Number()
    count = fields.Number()
    latitude = fields.Number()
    longitude = fields.Number()
    color_id = fields.Number()