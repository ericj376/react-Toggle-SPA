var express = require('express');
var router = express.Router();
var Fish = require('../models/fish');


router.route('/')
 //GET ALL FISH FROM /api/fish
 .get(function(req, res){
   Fish.find(function(err, fishes){
     if(err){
       res.status(500).send(err, 'Something broke!');
     } else {
       res.json(fishes)
     }
   });
 })
 //POST FISH TO /api/fish
 .post(function(req, res){

   //CREATE NEW FISH
   var fish = new Fish({
     name:         req.body.name,
     color:        req.body.color,
     people_eater: req.body.people_eater,
     length:       req.body.length,
     img:          req.body.img,
   })
   //SAVE FISH WITH NODE STYLE CALLBACK
   fish.save(function(err, fish){
     if(err){
       //if err, Handle Error effectively 
       res.status(500).send(err, 'Something broke!');
     } else {
       //If success, send me the fish in JSON
       res.json(fish);
     }
   })
 });


//without one_fish, next route would conflict...

router.route('/one_fish/:fish_id')
 //GET ONE FISH FROM /API/FISH/oneFish/ID_NUMBER
 .get(function(req, res){
   Fish.findById(req.params.fish_id, function(err, fish){
     if(err){
       res.status(500).send(err, 'Something broke!');
     } else {
       res.json(fish);
     }
   })
 });

// /api/fish/man_eater
router.route('/man_eater')
 .get(function(req, res){
   Fish.find({ people_eater: true }, function(err, fish){
     if(err){
       res.status(500).send(err, 'Something broke!');
     } else {
       res.json(fish);
     }
   })
 });

module.exports = router;