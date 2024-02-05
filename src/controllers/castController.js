const router = require('express').Router();

router.get('/cast/create', (req, res) => {
    res.render('cast/cast-create')
});

module.exports = router;