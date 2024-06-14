const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Mini Messageboard', messages: messages })
})

router.get('/new', function (req, res) {
  res.render('form', { title: '' })
})

/* post new message*/
router.post('/new', function (req, res) {
  const newMessages = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  }

  messages.unshift(newMessages)
  res.redirect('/')
})

module.exports = router;
