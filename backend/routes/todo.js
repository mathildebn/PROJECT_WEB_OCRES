const express = require('express');
const mongoose = require('mongoose');
 
//Lodash utils library
const _ = require('lodash');
const router = express.Router();
 
const Note = require('./../models/todolist.models.js');
 
router.post('/',async (req,res) => {
  const task = req.body.task;
  const newNote= new Note({
    task : task
  });
  await newNote.save();
  console.log("Ca marche !");
  console.log(newNote)
  res.json(newNote)
  return
})
 
router.get('/', (req, res) => {
  // Get List of user and return JSON
  Note.find( (err,newNote) => {
  if(err){
  res.send(err);
  
   }
  console.log(newNote);
  res.json(newNote);
  })
  });


router.put('/:task', async (req, res) => {
    const task = req.body.task;
 
    if (!task) { 
        res.send('Il manque un argument')
        return
    }

    Note.findOneAndUpdate({ task : req.params.task}, {task : req.body.task}, (err) => { 
        if(err){
          res.send(err);
        }
        res.send("ok");
    });
  
});
router.delete('/:task', async (req, res) => {

    Note.deleteOne({ task : req.params.task}, (err) => { 
        if(err){
          res.send(err);
        }
        res.send("ok");
    });
  
});
 
module.exports = router;