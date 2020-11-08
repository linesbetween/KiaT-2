require('dotenv').config(); // read .env files
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// configue  body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set public folder as root
app.use(express.static('public'));

// Allow front-end access to node_modules folder
app.use('/scripts', express.static(`${__dirname}/node_modules/`));

// Listen for HTTP requests on port 3000
app.listen(port, () => {
  console.log('listening on %d', port);
});



// CRUD data.js

// var messageList = require('./data').messageList;
var messageList = new Array();
var messageDao = {
    getMessages: function() {
        console.log(messageList);
        return messageList;
    },

    addMessage: function(newMessage) {
        messageList.push(newMessage);
        return true;
    }

}

// var messageDao = require('./dao/message.dao');

// POST /message
app.post('/message', function(req,res) {
  var newMessage = req.body;
  console.log(newMessage);
  var result = messageDao.addMessage(newMessage);
  // return message to user(success/fail)
  if (result) {
      res.send({
          success: true,
          message: ' message is added'
      });
  } else {
      res.send({
          success: false,
          message: ' message not added'
      });
  }
});

app.get('/message', function(req, res){
   res.send(messageDao.getMessages());
})