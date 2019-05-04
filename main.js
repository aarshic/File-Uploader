const express=require("express");
var router = express.Router();
// const mongoose=require("mongoose");
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/test';

router.get('/', function(req, res, next){
    res.render('index');
});

router.get('/get-data', function(req, res, next){
    var resultArray = [];
    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        var cursor = db.collection('user-data').find();
        cursor.forEach(function(doc, err){
            assert.equal(null, err);
            if(assert.equal(u,username) && assert.equal(p,password)){
                res.render('index.html');    
            }
        }, function(){
            db.close();
            res.render('login.html', {login: resultArray});
        });
    });
});

router.post('/insert', function(req, res, next){
    var login = {
        username: req.body.username,
        password: req.body.password
    };
    mongo.connect(url, function(err, db){
        assert.equal(null,err);
        db.collection('user-data').insertOne(login, function(err,result){
            console.log('Item inserted')
        });
    });
    res.redirect('/');
});

// router.get('/update', function(req, res, next){
// });

// router.post('/delete', function(req, res, next){
// });

module.exports = router;