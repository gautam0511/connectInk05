const express  = require('express')
const router = express.Router()
const userController = require('../controller/user');
router.get('/users',userController.getUser);
router.post('/signup',userController.postsignup);
router.put('/profile/:userId',userController.postProfile);
module.exports = router;