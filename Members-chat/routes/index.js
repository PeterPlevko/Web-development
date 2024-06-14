var express = require('express');
var router = express.Router();
var userContorller = require('../controllers/userController')
var postController = require('../controllers/postController')

/* GET home page. */
router.get('/', postController.index_get);

router.post('/', postController.index_post)

router.post('/delete_post', postController.post_delete)

// User router
router.get('/sign-up', userContorller.signUp_get);

router.post('/sign-up', userContorller.signUp_post)

router.get('/login', userContorller.login_get)

router.post('/login', userContorller.login_post)


router.get('/become-admin', userContorller.become_admin_get)

router.post('/become-admin', userContorller.become_admin_post)

router.get('/logout', userContorller.logout_get)

// messages

module.exports = router;

