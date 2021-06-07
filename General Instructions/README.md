# GENERAL COMMANDS AND INSTRUCTION FOR SERVER SIDE APPLICATIONS

* Get yourself comfortable with git commands. Most common ones being INIT, CLONE, PUSH, ADD, COMMIT and BRANCH.
* Maintain a repository to track down your work on GITHUB or BITBUCKET.


### Getting NODE in your system.
    * Download NODE from " https://nodejs.org ".
    * Run the commands " node -v "  and " npm -v ", to ensure that your NodeJS setup is working correctly.
    * In order to run npm in any directory, we need to navigate there on CMD and run " npm init " and accept the
    standard defaults and then open the * package.json * and make changes such as initalizing "start" to run the command npm start.

### Using Express.
    * To install express framework in your system we run - " npm install express@4.16.3 --save "
    * To prevent any file to being pushed or committed we use .gitignore.
    * To install morgan framework in your system we run - " npm install morgan@1.9.0 --save ".
    * To install body-parser in your system we need to run - " npm install body-parser@1.18.3 --save ".
    * To install express-generator in your system we need to run - " npm install express-generator@4.16.0 --save ".

### Using MongoDB
    * Download MONGO-DB from the official site. 
    *   -Navigate to folder where u want to run your mongo server. In it create a file- " filename ".
        -Use the command "  "/*PATH WHERE YOUR MONGO-D FILE IS PRESENT AND RUN */mongod.exe" --dbpath="filename" --bind_ip 127.0.0.1   "
        -On another terminal use -   " /*PATH WHERE YOUR MONGO-D FILE IS PRESENT AND RUN */mongo.exe " 
        -Now your mongo server is up and running. Interact using 'db' to access the database.

#### Use POSTMAN to generate and check the response to a server.