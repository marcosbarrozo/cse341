const router = require('express').Router();

const myController = require('../controllers');

router.get('/', myController.awesomeFunction)

router.use('/contacts',require('./contacts'))
router.use('/', require('./swagger'));



module.exports = router;


