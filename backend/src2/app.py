from flask import Flask, jsonify, request, send_from_directory
from algorithm import algorithm
from flask_cors import CORS
from flask import render_template
import json
app = Flask(__name__)
CORS(app)

@app.route('/<path:path>', methods=['GET'])
def static_proxy(path):
  return send_from_directory('./static', path)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/run2', methods=['POST'])
def run_algorithm2():
    input_json = request.get_json()
    # data = json.loads(input_json)
    longitudes = input_json['longitudes']
    latitudes = input_json['latitudes']
    populations = input_json['populations']
    center_num = input_json['center_num']
    worker_num = input_json['worker_num']
    # print("type of data {}".format(type(longitudes[0])))


    # center_num = 1
    # worker_num = 1
    # latitudes = [9,8,7,6,5,4,3,2,1]
    # longitudes = [1,2,3,4,5,6,7,8,9]
    # populations = [12,21,34,54,67,32,10,67,34]

    algo = algorithm.run(longitudes,latitudes,populations, center_num,worker_num)
    proc_centers = algo[1]
    data = proc_centers.to_dict('records')
    return jsonify(data)