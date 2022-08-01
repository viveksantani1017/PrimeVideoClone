const express = require('express')
const { getAllMedia, setMedia, getFilteredMedia } = require('../controllers/mediaController')
const router = express.Router()

router.get('/',getAllMedia)
router.post('/',setMedia)
router.post('/filter',getFilteredMedia)
module.exports = router