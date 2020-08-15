import sqlalchemy
from sqlalchemy import Column, Integer, String
from marshmallow import Schema, fields

from .entity import Entity, base

class Center(Entity, Base) :
    __tablename__ = 'Center'

    id = Column(Integer, primary_key = True)
    manpower = Column(Integer)
    latitude = Column(Integer)
    longitude = Column(Integer)
    colour_id = Column(Integer)

        def __init__(self,manpower=None,latitude=None,longitude=None, colour_id=None):
            self.manpower = manpower
            self.latitude = latitude
            self.longitude = longitude
            self.colour_id = colour_id

class CenterSchema(Schema):
    id = fields.Number()
    manpower = field.Number()
    latitude = field.Number()
    longitude = field.Number()
    colour_id = field.Number()
