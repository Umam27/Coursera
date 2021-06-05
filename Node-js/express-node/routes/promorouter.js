const express= require('express');
const bodyparser=require('body-parser');
const promorouter= express.Router();

promorouter.use(bodyparser.json());

promorouter.route('/')
.all((req, res,next) =>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will send all the promotions to you!');
})

.post((req, res, next) =>{
    res.end('Will add the promotion: ' + req.body.name + ' with details: '+ req.body.description);
})

.put((req, res, next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on this server /promotion');
})

.delete( (req, res, next) =>{
    res.end('Deleting all the promotions.')
});

promorouter.route('/:promotionid')
.all((req, res,next) =>{
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) =>{
    res.end('Will send the promotion: '+ req.params.promotionid + ' to you!');
})
.post((req, res, next) =>{
    res.statusCode = 403;
    res.end('POST operation not supported on this server /promotions');
})
.put((req, res, next) =>{
    res.write('Updating the promotions...\n');
    res.end('Will update the promotion: ' + req.params.promotionid + ' with details: '+ req.body.description);
})
.delete( (req, res, next) =>{
    res.end('Deleting the promotion: '+ req.params.promotionid);
});

module.exports = promorouter;

