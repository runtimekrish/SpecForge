# SpecForge

Install Express, mongoose, bcrypyt modules 

    npm install express mongoose bcrypt jsonwebtoken body-parser

Mongodb setup on EC2
    
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
