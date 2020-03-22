const router = require('express').Router();
const path = require('path');
const apiRoutes = require('./API');

//API Route Setup
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
  });

module.exports = router;