// routes/fighters.js
var express = require('express');
var router = express.Router();

const fightersCtrl = require('../controllers/fighters');

// Define the "new" route first
router.get('/new', fightersCtrl.new);

// Then, define the "create" route
router.post('/', fightersCtrl.create);

// GET all fighters
router.get('/', fightersCtrl.index)

//Get fighter by /:id
router.get('/:id', fightersCtrl.show)

//Delete Fighter by /:id
router.delete('/:id', fightersCtrl.delete)



module.exports = router;