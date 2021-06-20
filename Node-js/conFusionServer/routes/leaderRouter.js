const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Leaders = require('../models/leaders');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
.get((req,res,next) => {
    Leaders.find({})
    .then((leaders) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leaders);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Leaders.create(req.body)
    .then((leader) => {
        console.log('Leader Created ', leader);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type','application/json');
    res.end('PUT operation not supported on /leaders');
})
.delete((req, res, next) => {
    Leaders.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));    
});

leaderRouter.route('/:leaderId')
.get((req,res,next) => {
    Leaders.findById(req.params.leaderId)
    .then((leader) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dish);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');
    res.end('POST operation not supported on /leaders/'+ req.params.leaderId);
})
.put((req, res, next) => {
    Leaders.findByIdAndUpdate(req.params.dishId, {
        $set: req.body
    }, { new: true })
    .then((leader) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(leader);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Leaders.findByIdAndRemove(req.params.leaderId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

leaderRouter.route('/:leaderId/comments')
.get((req,res,next) => {
    Leaders.findById(req.params.leaderId)
    .then((leader) => {
        if(leader!=null){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leader.comments);
        }
        else{
            err= new Error('Leader' + req.params.leaderId + 'not found');
            err.status = 400;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Leaders.findById(req.params.leaderId)
    .then((leader) => {
        if(leader!=null){
            leader.comments.push(req.body);
            leader.save()
            .then((leader)=> {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(leader);
        }, (err) => next(err));
    }
        else{
            err= new Error('Leader' + req.params.leaderId + 'not found');
            err.status = 400;
            return next(err);
        }
    } , (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');
    res.end('PUT operation not supported on /dishes/' + req.params.dishId + '/comments');
})
.delete((req, res, next) => {
    Leaders.findById(req.params.leaderId)
    .then((leader) => {
        if(leader!=null){

            for(var i=0; i<leader.comments.length; i++){
                leader.comments.id(leader.comments._id).remove();
            }

            leader.save()
            .then((leader) => {
                res.statusCode=200;
                res.setHeader('Contentt-Type','application/json');
                res.json(leader);
            }, (err) => next(err));
        }
        else{
            err= new Error('Leader' + req.params.leaderId + 'not found');
            err.status = 400;
            return next(err); 
      }
    }, (err) => next(err))
    .catch((err) => next(err));    
});

LeaderRouter.route('/:leaderId/comments/:commentId')
.get((req,res,next) => {
    Leaders.findById(req.params.leaderId)
    .then((leader) => {
        if(leader!=null && leader.comments.id(req.params.commentId)!= null){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(leader.comments.id(req.params.commentId));
        }
        else if(leader==null){
            err= new Error('Leader' + req.params.leaderId + 'not found');
            err.status = 400;
            return next(err);
        }
        else{
            err= new Error('Comment' + req.params.commentId + 'not found');
            err.status = 400;
            return next(err)
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode=403;
    res.setHeader('Content-Type', 'application/json');
    res.end('POST operation not supported on /leaders/' + req.params.leaderId + '/comments/'+ req.params.commentId );
})
.put((req, res, next) => {
    Leaders.findById(req.params.leaderId)
    .then((leader) => {
        if(leader!=null && leader.comments.id(req.params.commentId)!= null){
            if(req.body.rating){
                leader.comments.id(req.params.commentId).rating = req.body.rating;
            }
            if(req.body.comment){
                leader.comments.id(req.params.commentId).comment = req.body.comment;
            }
            leader.save()
            .then((leader) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(leader);
        }, (err) => next(err));
        }
        else if(leader==null){
            err= new Error('Leader' + req.params.leaderId + 'not found');
            err.status = 400;
            return next(err);
        }
        else{
            err= new Error('Comment' + req.params.commentId + 'not found');
            err.status = 400;
            return next(err)
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Leader.findById(req.params.leaderId)
    .then((leader) => {
        if(leader!=null && leader.comments.id(req.params.commentId)!= null){
                leader.comments.id(req.params.commentId).remove();
            leader.save()
            .then((leader) => {
                res.statusCode=200;
                res.setHeader('Contentt-Type','application/json');
                res.json(leader);
            }, (err) => next(err));
        }
        else if(leader==null){
            err= new Error('Leader' + req.params.leaderId + 'not found');
            err.status = 400;
            return next(err);
        }
        else{
            err= new Error('Comment' + req.params.commentId + 'not found');
            err.status = 400;
            return next(err)
        }
    }, (err) => next(err))
    .catch((err) => next(err));     
});


module.exports = leaderRouter;