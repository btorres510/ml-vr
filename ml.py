import numpy as np
from sklearn.linear_model import LinearRegression
from flask import jsonify


# X--> features y--> values randomly generated
xx = np.empty([25,2])
yy = np.empty(25)

def datagen():
    X = np.array(np.random.randint([0, 1], [100, 2], size=(25, 2)))

    y = np.array(np.random.randint(100, size=25))

    return X, y


# y = np.dot(X, np.array([1, 2])) + 3

def keyvalgen():
    xx, yy = datagen()
    keyVal = {}
    for i, n in enumerate(xx):
        keyVal[int(n[0])] = int(yy[i])
    return jsonify(keyVal)


# print(keyVal)
# json_obj = json.dumps(keyVal)

# with open('keyVal.json', 'w') as fp:
#    json.dump(keyVal, fp)
def planedatagen():
    model = LinearRegression().fit(xx, yy)

    planeData = {}

    planeData['coef'] = float(model.coef_[0])
    planeData['intercept'] = model.intercept_

    return jsonify(planeData)
