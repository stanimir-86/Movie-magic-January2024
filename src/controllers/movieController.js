const router = require('express').Router();

router.get('/create', (res, req) => {
    res.render('create');
});

module.exports = router;