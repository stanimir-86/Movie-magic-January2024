const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/about', (res, req) => {
    res.render('about');
});

router.get('/404', (res, req) => {
    res.render('404');
});

module.exports = router;