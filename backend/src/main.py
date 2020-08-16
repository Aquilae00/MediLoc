from .entities.entity import Session,engine,Base
from .entities.village import Village, VillageSchema
from .entities.center import Center, CenterSchema
from flask import Flask, jsonify, request
from .algorithm import algorithm
import json
from flask_cors import CORS

# generate database schema
Base.metadata.create_all(engine)

# creating the Flask application
app = Flask(__name__)
CORS(app)

@app.route('/village')
def get_village():
    # fetching from the database
    session = Session()
    village_objects = session.query(Village).all()

    schema = VillageSchema(many=True)
    villages = schema.dump(village_objects)

    session.close()
    return jsonify(villages.data)

@app.route('/village', methods=['POST'])
def add_village():
    posted_village = VillageSchema(only=('count','latitude','longitude','color_id')).load(request.get_json())

    village = Village(**posted_village.data)

    session = Session()
    session.add(village)
    session.commit()

    new_village = VillageSchema().dump(village).data
    session.close()
    # return jsonify(new_village), 201
    return request.get_json()

@app.route('/run', methods=['POST'])
def run_algorithm():
    input_json = request.get_json()
    center_num = input_json['center_num']
    worker_num = input_json['worker_num']

    session = Session()
    village_objects = session.query(Village).all()

    schema = VillageSchema(many=True)
    villages = schema.dump(village_objects)

    

    latitudes = [9,8,7,6,5,4,3,2,1]
    longitudes = [1,2,3,4,5,6,7,8,9]
    populations = [12,21,34,54,67,32,10,67,34]
    # for vil in villages.data:
    #     latitudes.append(vil['latitude'])
    #     longitudes.append(vil['longitude'])
    #     populations.append(vil['count'])
    
    algo = algorithm.run(longitudes,latitudes,populations, center_num,worker_num)

    proc_villages = algo[0]
    proc_centers = algo[1]

    # proc_villages_colorId = proc_villages['colorID']
    # for i in range(len(proc_villages_colorId)):
    #     village_objects[i].color_id = proc_villages_colorId[i]
    
    data = proc_centers.to_dict('records')
    for d in data:
        center_load = CenterSchema(only=('x','y','colorID','manpower')).load(d)
        center = Center(**center_load.data)
        session.add(center)

    session.commit()
    session.close()

    return jsonify(data)

@app.route('/get_center')
def get_center():
    session = Session()
    center_objects = session.query(Center).all()
    schema = CenterSchema(many=True)
    centers = schema.dump(center_objects)

    session.close()

    return jsonify(centers.data)