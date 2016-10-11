var mongoose = require('mongoose');
var dbmodel = require('../models/postmodel');
var mongoXlsx = require('mongo-xlsx');
 

 
/* Generate automatic model for processing (A static model should be used) */


mongoose.connect('mongodb://localhost/newdb', function () {
    console.log('mongodb connected');
});

var Post = mongoose.model('Post', dbmodel.postobj);

var findmodel = function (req, res) {
    Post.find(function (err, posts) {
        if (err) { return next(err) }
        res.json(posts);
       // console.log('this is server' + posts);

    });
};

var removemodel = function () {
    Post.find({}).remove().exec();
};

var savemodel = function (req,res,next) {
   console.log('saveModel');
   var data = [];
   data.push(req.body.data);
   var model = mongoXlsx.buildDynamicModel(data);
 
/* Generate Excel */
mongoXlsx.mongoData2Xlsx(data, model, function(err, data) {
  console.log('File saved at:', data.fullPath); 
});
    var post = new Post({
        status: req.body.data.status,
        teamAName: req.body.data.teamAName,
        teamBName: req.body.data.teamBName,
        teamARun: req.body.data.teamARun,
        teamAWicket: req.body.data.teamAWicket,
        teamBRun: req.body.data.teamBRun,
        teamBWicket: req.body.data.teamBWicket,
        teamAOvers: req.body.data.teamAOvers,
        teamBOvers: req.body.data.teamBOvers,
        currentPlayer1Score: req.body.data.currentPlayer1Score,
        currentPlayer2Score: req.body.data.currentPlayer2Score,
        currentPlayer1Name: req.body.data.currentPlayer1,
        currentPlayer2Name: req.body.data.currentPlayer2
    });

    //save new model data
    post.save(function (err, post) {
        if (err) { return next(err) }
        res.json(201, post);
    });

};

exports.mongoose = mongoose;
exports.Post = Post;
exports.findmodel = findmodel;
exports.removemodel = removemodel; 
exports.savemodel = savemodel;