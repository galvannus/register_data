const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('Prospects routes'))
    //.post()

//router.route('/:id')


module.exports = router;