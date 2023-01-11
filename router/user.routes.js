const{Router}= require('express');
const {post,login,welcome,get} = require('../models/controllers');
const auth = require('../middleware/auth');

const router = new Router()

router.route('/register')
        .get(get)
        .post(post)

router.route('/login')
        .post(login)
router.route('/welcome')
        .post(auth,welcome)



module.exports = router