const express = require('express');
const studentRoutes = require('./student');
const router = express.Router();


router.use('/student', studentRoutes);

module.exports = router;