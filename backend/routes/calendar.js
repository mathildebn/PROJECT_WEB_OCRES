const express = require('express');
const mongoose = require('mongoose');

//Lodash utils library
const _ = require('lodash');
const router = express.Router();

var Event = require('./../models/calendar.models.js');

// Create RAW data array
/*let events = [{
  name: "Nouvel An",
  jour: "31/12",
  id: "1"
  }
];

console.log(events);*/



/* GET users listing. */
router.get('/', (req, res) => {
  // Get List of user and return JSON
  Event.find( (err,evenement) => {
    if(err){
      res.send(err);

    }
    console.log(evenement);
    res.json(evenement);
  })
  //res.status(200).json({ fichier });
});



/* GET one user. */
/*router.get('/:id', (req, res) => {
  const { id } = req.params;
  // Find user in DB
  const name = _.find(fichier, ["id", id]);
  // Return user
  res.status(200).json({
    message: 'Event found!',
    name 
  });
});*/


/* AJOUT */
router.post('/', async (req, res) => {

    const name = req.body.name
    const start = req.body.start
    const end = req.body.end

 
    if ( !name) { 
        return
    }
 
    const nouvel_event = new Event({ 
      name : name,
      start : start,
      end : end
    })
     
    await nouvel_event.save()
    console.log(nouvel_event);
    res.json(nouvel_event)
    console.log("ca marche");
    return
 
});

/* MISE À JOUR */
router.put('/:name', async (req, res) => {
    const start = req.body.start;
    const end = req.body.end;
 
    /*if (!jour) { 
        res.send('Il manque un argument')
        return
    }*/

    Event.findOneAndUpdate({ name : req.params.name}, {start : req.body.start}, {end : req.body.end}, (err) => { 
        if(err){
          res.send(err);
        }
        res.send("ok");
    });
  
});



/* DELETE user. */
router.delete('/:name', async (req, res) => {

    Event.deleteOne({ name : req.params.name}, (err) => { 
        if(err){
          res.send(err);
        }
        res.send("ok");
    });
  
});



module.exports = router;