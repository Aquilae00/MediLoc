import sqlalchemy
from sqlalchemy import Column, Integer, String
from marshmallow import Schema, fields

from .entity import Entity, Base

class Village(Entity, Base) :
    __tablename__ = 'Village'

    id = Column(Integer, primary_key = True)
    count = Column(Integer)
    latitude = Column(Integer)
    longitude = Column(Integer)
    colour_id = Column(Integer)

    def __init__(self,count=None,latitude=None,longitude=None, colour_id=None):
        self.count = count
        self.latitude = latitude
        self.longitude = longitude
        self.colour_id = colour_id

class VillageSchema(Schema):
    id = fields.Number()
    count = fields.Number()
    latitude = fields.Number()
    longitude = fields.Number()
    colour_id = field.Number()
