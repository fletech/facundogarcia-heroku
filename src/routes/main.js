const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController')

router.get('/', mainController.homeAr)
router.get('/', mainController.homeEn)



module.exports = router