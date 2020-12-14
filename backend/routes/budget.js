const express = require('express');
const mongoose = require('mongoose');

//Lodash utils library
const _ = require('lodash');
const router = express.Router();

var Budget = require("./../models/budget.models.js");


/* GET */
/*router.get('/', (req,res) => {
  res.status(200).json({depenses});
});*/
router.get('/', (req, res) => {
  // Get List of user and return JSON
  Budget.find( (err,budget) => {
    if(err){
      res.send(err);

    }
    console.log(budget);
    res.json(budget);
  })
  //res.status(200).json({ fichier });
});


/* AJOUT */
router.post('/', async (req, res) => {

    const name = req.body.name
    const value = req.body.value

 
    if ( !name) { 
        return
    }
 
    const nouv_budget = new Budget({ 
      name : name,
      value: value
    })
     
    await nouv_budget.save()
    console.log(nouv_budget);
    res.json(nouv_budget)
    console.log("ca marche");
    return
 
});

/* MISE À JOUR */
router.put('/:name', async (req, res) => {
    const value = req.body.value;
 
    /*if (!jour) { 
        res.send('Il manque un argument')
        return
    }*/

    Budget.findOneAndUpdate({ name : req.params.name}, {value : req.body.value}, (err) => { 
        if(err){
          res.send(err);
        }
        res.send("ok");
    });
  
});

/* DELETE */
router.delete('/:name', async (req, res) => {

  Budget.deleteOne({ name : req.params.name}, (err) => { 
        if(err){
          res.send(err);
        }
        res.send("ok");
    });
  
});


module.exports = router;