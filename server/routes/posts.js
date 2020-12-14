var express = require('express')
var getPosts = require('../controllers/posts')
var createPost = require('../controllers/posts')

var router = express.Router()


router.get('/', getPosts);
router.post('/', createPost);



module.exports = router