const express= require('express');
const bodyparser=require('body-parser');
const leaderRouter= express.Router();

leaderRouter.use(bodyparser.json());

leaderRouter.route('/')
.all((req, res,next) =>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will send all the leaders to you!');
})

.post((req, res, next) =>{
    res.end('Will add the leader: ' + req.body.name + ' with details: '+ req.body.description);
})

.put((req, res, next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on this server /leader');
})

.delete( (req, res, next) =>{
    res.end('Deleting all the leaders.')
});

leaderRouter.route('/:leaderid')
.all((req, res,next) =>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will send the leader: '+ req.params.leaderid + ' to you!');
})
.post((req, res, next) =>{
    res.statusCode = 403;
    res.end('POST operation not supported on this server /leaders');
})
.put((req, res, next) =>{
    res.write('Updating the leaders...\n');
    res.end('Will update the leader: ' + req.params.leaderid + ' with details: '+ req.body.description);
})
.delete( (req, res, next) =>{
    res.end('Deleting the leader: '+ req.params.leaderid);
});

module.exports = leaderRouter;


