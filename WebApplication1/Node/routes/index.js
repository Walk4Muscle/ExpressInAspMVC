
/*
 * GET home page.
 */

exports.index = function(req, res){
  //res.render('index', { title: 'Express' });
    var MongoClient = require('mongodb').MongoClient;
    var connectionString = 'mongodb://mongo4ms.cloudapp.net:27017/';
    MongoClient.connect(connectionString,function(err,db){
        if(err){
            console.log(err);
            res.send(200,{message:'Something went wrong when connecting to db'});
        }else{
            db.close();
            res.send(200,{message:'Connected correctly to db'});
        }
    })
};