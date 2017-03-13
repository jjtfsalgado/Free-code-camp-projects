var {mongoose} = require('./../db/mongoose');
var {Recipe} = require('./../models/recipe');
var controller = {};

controller.readAll = [
  function(req,res,next) {
    Recipe.find().then((recipes) => {
      res.send({recipes})
    }, (e) => {
      res.status(400).send(e);
    });
  }
];

controller.create = [
	function(req,res,next) {
    var recipe = new Recipe({
      title: req.body.title,
      text: req.body.text
    });

    recipe.save().then((doc) => {
      res.send(doc);
    }, (e) => {
      res.status(400).send(e);
    });
	}
];

controller.update = [
	function(req,res,next) {

	}
];

controller.delete = [
	function(req,res,next) {
		//remove document in question. send back 201
	}
];

module.exports = controller;
