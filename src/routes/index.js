const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./API');

//API Route Setup
router.use('/api', apiRoutes);

//if no api routes are asked for, shove them to the website
router.use((req, res) => {
    res.redirect('http://localhost:3000');
});

module.exports = router;