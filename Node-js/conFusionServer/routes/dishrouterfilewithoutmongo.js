const express= require('express');
const bodyparser=require('body-parser');

const dishrouter= express.Router();

dishrouter.use(bodyparser.json());

dishrouter.route('/')
.all((req, res,next) =>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will send all the dishes to you!');
})

.post((req, res, next) =>{
    res.end('Will add the dish: ' + req.body.name + ' with details: '+ req.body.description);
})

.put((req, res, next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on this server /dishes');
})

.delete( (req, res, next) =>{
    res.end('Deleting all the dishes.')
});

dishrouter.route('/:dishid')
.all((req, res,next) =>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will send the dish: '+ req.params.dishid + ' to you!');
})
.post((req, res, next) =>{
    res.statusCode = 403;
    res.end('POST operation not supported on this server /dishes');
})
.put((req, res, next) =>{
    res.write('Updating the dishes...\n');
    res.end('Will update the dish: ' + req.params.dishid + ' with details: '+ req.body.description);
})
.delete( (req, res, next) =>{
    res.end('Deleting the dish: '+ req.params.dishid);
});


module.exports = dishrouter;