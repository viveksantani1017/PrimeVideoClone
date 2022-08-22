const express = require('express')
const { protect } = require('../middleware/authMiddleware')
const router = express.Router()
const { login, register, getuser } = require('../controllers/userController')
module.exports = router
router.post('/login', login)
router.post('/', register)
router.get('/me', protect, getuser)