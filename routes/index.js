const router = require('express').Router();

const myController = require('../controllers');

router.get('/', myController.awesomeFunction)

router.use('/contacts',require('./contacts'))



module.exports = router;


