from .entities.entity import Session,engine,Base
from .entities.population import Population, PopulationSchema
from flask import Flask, jsonify, request


# generate database schema
Base.metadata.create_all(engine)

# creating the Flask application
app = Flask(__name__)

@app.route('/population')
def get_population():
    # fetching from the database
    session = Session()
    population_objects = session.query(Population).all()

    schema = PopulationSchema(many=True)
    populations = schema.dump(population_objects)

    session.close()
    return jsonify(populations.data)

@app.route('/population', methods=['POST'])
def add_population():
    posted_population = PopulationSchema(only=('count','latitude','longitude')).load(request.get_json())

    population = Population(**posted_population.data)

    session = Session()
    session.add(population)
    session.commit()

    new_population = PopulationSchema().dump(population).data
    session.close()
    return jsonify(new_population), 201