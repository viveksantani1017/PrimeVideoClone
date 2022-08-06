const express = require('express')
const { getAllMedia, setMedia, getFilteredMedia, getMediaByType } = require('../controllers/mediaController')
const router = express.Router()

router.get('/',getAllMedia)
router.post('/',setMedia)
router.post('/Movie',getMediaByType)
router.post('/Show',getMediaByType)
router.post('/filter',getFilteredMedia)
module.exports = router