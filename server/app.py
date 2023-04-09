from flask import Flask, request,jsonify
from flask_cors import CORS
import jwt 
from datetime import datetime, timedelta

import firebase_admin
from firebase_admin import credentials, db


try:
    cred = credentials.Certificate("./firebase/firebaseconfig.json")
    firebase_admin.initialize_app(cred, {
        "databaseURL": "https://schooldata-dcbd6-default-rtdb.firebaseio.com",

    })
    ref = db.reference()
except Exception as e:
    print(e)
    print("Error connecting firebase")



app = Flask(__name__)
app.secret_key = 'iamfuckingcreazy'
# session configuration
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
# cors config
CORS(app)
# getting date and time
date = datetime.now()
date = date.strftime("%d-%m-%Y,%H:%M:%S")





@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        data = request.get_json()
        name = data["name"]
        email = data["email"]
        password = data['password']
        user= data['role']
        temp = email.split('@')
        temp_user = temp[0]
        

        try:
            if ref.child('users').child(temp_user).get() is None:
                
                if user == 'Student':
                    if ref.child('Student').child(temp_user).get() is None:
                        ref.child('Student').child(temp_user).set({
                                'name' : name,
                                'username' : temp_user,
                                'email' : email,
                                'password' : password,
                                'type' : user,
                                'date' : date
                    })
                    else:
                        return jsonify({
                            'status': False, 
                            'message' : 'User already exists',
                            'code' : 'Error'
                        })
                
                elif user == 'Faculty':
                    if ref.child('Faculty').child(temp_user).get() is None:
                        ref.child('Faculty').child(temp_user).set({
                                'name' : name,
                                'username' : temp_user,
                                'email' : email,
                                'password' : password,
                                'type' : user,
                                'date' : date
                })
                    else:
                        return jsonify({
                            'status': False, 
                            'message' : 'Invalid user type',
                            'code' : 'Error'
                        })
                elif user == 'Hod':
                    if ref.child('Hod').child(temp_user).get() is None:
                        ref.child('Hod').child(temp_user).set({
                                'name' : name,
                                'username' : temp_user,
                                'email' : email,
                                'password' : password,
                                'type' : user,
                                'date' : date
                })
                    else:
                        return jsonify({
                            'status': False, 
                            'message' : 'Invalid user type',
                            'code' : 'Error'
                        })
                elif user == 'Peon':
                    if ref.child('Peon').child(temp_user).get() is None:
                        ref.child('Peon').child(temp_user).set({
                                'name' : name,
                                'username' : temp_user,
                                'email' : email,
                                'password' : password,
                                'type' : user,
                                'date' : date,

                    
                })
                    else:
                        return jsonify({
                            'status': False, 
                            'message' : 'Invalid user type',
                            'code' : 'Error'
                        })
                else:
                    return jsonify({
                        'status': False, 
                        'message' : 'Invalid user type',
                        'code' : 'Error'
                    })
                    
                return jsonify({
                    'status' : True,
                    'message' : 'User created successfully',
                    'code' : 'Success'
                })
            else:
                return jsonify({
                    'status': False, 
                    'message' : 'User already exists',
                    'code' : 'Error'
                })
        except Exception as e:
            return jsonify({
                'status': False, 
                'message': 'Error creating user: {}'.format(e),
                'code' : 'Error'
            })

@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        password = data['password']
        lst = email.split('@')
        print(data)
        name_user=''
        try:   
            d={}
            d1=ref.child('Faculty').get()
            d2=ref.child('Student').get()
            d3=ref.child('Hod').get()
            d4=ref.child('Peon').get()
            d.update(d1)
            d.update(d2)
            d.update(d3)
            d.update(d4)
            print(lst)
            print(d1)
            if lst[0] in d1 :
                name_user='Faculty'
            elif lst[0] in d2:
                name_user='Student'
            elif lst[0] in d3:
                name_user = 'Hod'
            elif lst[0] in d4:
                name_user = 'Peon'


            try:
                if d[lst[0]] :
                    serverdata = d[lst[0]]
                    serverUsername = serverdata['username']
                    serverPassword = serverdata['password']
                    if serverUsername == lst[0]:
                        if serverPassword == password:
                            return jsonify({
                                'status': True,
                                'message': 'Login successful',
                                'code' : 'Success',
                                'token' : jwt.encode({'user' : serverUsername, 'exp' : datetime.utcnow() + timedelta(hours=12)}, app.secret_key),
                                'data' : serverdata,
                                'type' : name_user
                            })
                        else:
                            return jsonify({
                                'status': False, 
                                'message' : 'Invalid password',
                                'code' : 'Error'
                            })
                    else:
                         return jsonify({
                                'status': False, 
                                'message' : 'Invalid username',
                                'code' : 'Error'
                            })

            except Exception as e:
                return jsonify({
                    'status': False, 
                    'message' : 'Invalid email',
                    'code' : 'Error'
                })      
             
        except Exception as e:
            return jsonify({
                'status': False, 
                'message': 'Error logging in: {}'.format(e),
                'code' : 'Error'
            })

         


@app.route('/addclass', methods=['POST'])
def addclass():
    if request.method == 'POST':
        data = request.get_json()
        classname = data["classname"]
        try:
            if ref.child('class').child(classname).get() is None:
                ref.child('class').child(classname).set({
                            'classname' : classname,
                            'date' : date
                })
              
                return jsonify({
                    'status' : True,
                    'message' : 'Class created successfully',
                    'code' : 'Success'
                })
            else:
                return jsonify({
                    'status': False, 
                    'message' : 'Class already exists',
                    'code' : 'Error'
                })
        except Exception as e:
            return jsonify({
                'status': False, 
                'message': 'Error creating class: {}'.format(e),
                'code' : 'Error'
            })



if __name__ == '__main__':
    app.run(debug=True)
