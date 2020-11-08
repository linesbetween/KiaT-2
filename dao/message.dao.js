var messageList = require('../data').messageList;

var messageDao = {
    getMessages: function() {
        return messageList;
    },

    addMessage: function(newMessage) {
        messageList.push(newMessage);
    }

}