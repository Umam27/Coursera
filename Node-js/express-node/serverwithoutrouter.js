const express= require('express');
const http= require('http');
const morgan = require('morgan');
const bodyparser= require('body-parser');
const hostname= 'localhost';
const port= 3000;
const app= express();

app.use(bodyparser.json());
app.all('\dishes', (req, res,next) =>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
});

app.get('/dishes', (req,res,next) =>{
    res.end('Will send all the dishes to you!');
});

app.post('/dishes',(req, res, next) =>{
    res.end('Will add the dish: ' + req.body.name + ' with details: '+ req.body.description);
});

app.put('/dishes', (req, res, next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on this server /dishes');
});

//delete operation needs a authorization which will be added later.
app.delete('/dishes', (req, res, next) =>{
    res.end('Deleting all the dishes.')
});

app.get('/dishes/:dishid', (req,res,next) =>{
    res.end('Will send the details of the dish: '+ req.params.dishid+' to you!') ;
});

app.post('/dishes/:dishid',(req, res, next) =>{
    res.statusCode = 403;
    res.end('POST request not supported on /dishes/:dishid');
});

app.put('/dishes/:dishid', (req, res, next)=>{
    res.write('Updating the dish: '+ req.params.dishid+'\n');
    res.end('Will update the dish: '+ req.params.dishid+' with details: '+ req.body.description);
});

app.delete('/dishes/:dishid', (req, res, next)=>{
    res.end('Deleting the dish: '+ req.params.dishid);
});

app.use(morgan('dev'));
app.use(express.static(__dirname+ '/public'));

app.use((req,res, next)=>{
    console.log(req.headers);
    req.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end('<html><body><h1>THIS IS AN EXPRESS SERVER</h1></body></html>');
});

const server=http.createServer(app);

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`);
});