const express = require('express')
const multer = require('multer')
const { getAllMedia, setMedia, getFilteredMedia, getMediaByType, updateMedia, delelteMedia, getMedia, getMediadetails, getSearchedMedia } = require('../controllers/mediaController')
const router = express.Router()

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'frontend/public/resources/images/coverimages')
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

router.get('/',getAllMedia)
router.post('/detail',getMedia)
router.post('/search',getSearchedMedia)
router.get('/getdetails/:id', getMediadetails)
router.post('/', upload.single('coverImg'), setMedia)
router.post('/Movie',getMediaByType)
router.post('/Show',getMediaByType)
router.post('/filter',getFilteredMedia)
router.put('/:id',updateMedia)
router.delete('/:id',delelteMedia)
module.exports = router