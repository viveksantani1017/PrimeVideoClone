const express = require('express')
const { getAllMedia, setMedia, getFilteredMedia, getMediaByType, updateMedia, delelteMedia, getMedia } = require('../controllers/mediaController')
const router = express.Router()

router.get('/',getAllMedia)
router.post('/detail',getMedia)
router.post('/',setMedia)
router.post('/Movie',getMediaByType)
router.post('/Show',getMediaByType)
router.post('/filter',getFilteredMedia)
router.put('/:id',updateMedia)
router.delete('/:id',delelteMedia)
module.exports = router