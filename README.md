# SpecForge

PC Part suggestions and recommendations inspired by PCPartpicker.com, additionally integrated with an AI chatbot.

![Screenshot (58)](https://github.com/runtimekrish/SpecForge/assets/42571165/d19703c0-4f98-4435-aafb-f495ebc0769d)

# Install modules
Install Express, mongoose, bcrypyt modules 

    npm install express mongoose bcrypt jsonwebtoken body-parser
# Mongodb
    install mongodb in your system, also install the mogodb extention from vs code

# Run
    node server.js

# Mongodb setup on EC2
    
    sudo vi /etc/yum.repos.d/mongodb-org-7.0.repo
    
    [mongodb-org-7.0]
    name=MongoDB Repository
    baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/7.0/x86_64/
    gpgcheck=1
    enabled=1
    gpgkey=https://pgp.mongodb.com/server-7.0.asc 
    
    esc :wp
    
    sudo yum install -y mongodb-org
    
    sudo systemctl start mongod
    sudo systemctl daemon-reload
    sudo systemctl status mongod
    sudo systemctl enable mongod
    sudo systemctl stop mongod
    sudo systemctl restart mongod
