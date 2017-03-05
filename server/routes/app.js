const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();

/* GET api listing. */
ROUTER.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = ROUTER;