const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./API');

//API Route Setup
router.use('/api', apiRoutes);

//if no api routes are asked for, shove them to the website
router.use((req, res) => {
    res.sendFile(path.join(__dirname + '../../../client/build/index.html'));
});

module.exports = router;