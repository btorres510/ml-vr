import numpy as np
from sklearn.linear_model import LinearRegression
import json


   

X = np.array(np.random.randint([0,1],[100,2], size=(25,2)))

y = np.array(np.random.randint(100, size = 25))

#y = np.dot(X, np.array([1, 2])) + 3

keyVal = {}
for i,n in enumerate(X):
    keyVal[int(n[0])] = int(y[i])

#print(keyVal)
#json_obj = json.dumps(keyVal)

with open('keyVal.json', 'w') as fp:
    json.dump(keyVal, fp)
 
model = LinearRegression().fit(X,y)

planeData = {}

planeData['coef'] = float(model.coef_[0])
planeData['intercept'] = model.intercept_ 

with open('lineq.json', 'w') as fp:
    json.dump(planeData, fp)
