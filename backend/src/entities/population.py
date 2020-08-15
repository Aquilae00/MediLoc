import sqlalchemy
from sqlalchemy import Column, Integer, String
from marshmallow import Schema, fields

from .entity import Entity, Base

class Population(Entity, Base) :
    __tablename__ = 'population'

    id = Column(Integer, primary_key = True)
    count = Column(Integer)
    latitude = Column(Integer)
    longitude = Column(Integer)
    
    def __init__(self,count=None,latitude=None,longitude=None):
        self.count = count
        self.latitude = latitude
        self.longitude = longitude

class PopulationSchema(Schema):
    id = fields.Number()
    count = fields.Number()
    latitude = fields.Number()
    longitude = fields.Number()