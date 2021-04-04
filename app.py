from flask import Flask, render_template, jsonify
import ml

app = Flask(__name__, static_url_path='', static_folder='web/static', template_folder='web/templates')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/key_val')
def getKeyVal():
    return ml.keyvalgen()   # caution: generates a new key/val pair everytime we fetch data from /key_val url

@app.route('/plane_data')
def getPlaneData():
    return ml.planedatagen()

if __name__ == "__main__":
    app.run(debug=True)
