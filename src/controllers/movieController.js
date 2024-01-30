const router = require('express').Router();

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    const newMovie = req.body;


    res.setEncoding('Movie should be crated');
});

module.exports = router;