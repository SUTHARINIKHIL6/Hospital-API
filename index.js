const express = require('express');

const router = express.Router();

router.use('/api/v1',require('./v1/login'));
router.use('/api/v1',require('./v1/register'));
router.use('/api/v1',require('./v1/report'));
router.use('/api/v1',require('./v1/authFailed'));
//added routeing for scalability


module.exports=router;