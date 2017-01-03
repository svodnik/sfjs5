// Initialize Firebase
var config = {
  apiKey: "AIzaSyCJALvitYbkkEdMEQQrvK4VK5euESAyOwo",
  authDomain: "public-produce.firebaseapp.com",
  databaseURL: "https://public-produce.firebaseio.com",
  storageBucket: "public-produce.appspot.com",
  messagingSenderId: "386298252792"
};
firebase.initializeApp(config);

// connect to your Firebase application using your reference URL
var messageAppReference = firebase.database();
    
$(document).ready(function() {
  $('#message-form').submit(function (event) {
    // by default a form submit reloads the DOM which will subsequently reload all our JS
    // to avoid this we preventDefault()
    event.preventDefault()

    // grab user message input
    var message = $('#message').val()

    // clear message input (for UX purposes)
    $('#message').val('')

    // create a section for messages data in your db
    var messagesReference = messageAppReference.ref('messages');

    // use the push method to save data to the messages
    messagesReference.push({
      message: message,
      votes: 0
    });
  });
  messageClass.getPosts();
});

var messageClass = (function() {
  function getPosts() {
    // retrieve messages data when .on() initially executes
    // and when its data updates
    // see https://firebase.google.com/docs/reference/js/firebase.database.Reference#on
    messageAppReference.ref('messages').on('value', function (results) {
      var $messageBoard = $('.message-board');
      var messages = [];

      var allMsgs = results.val();
      // iterate through results coming from database call; messages
      for (var msg in allMsgs) {
        var message = allMsgs[msg].message;
        var votes = allMsgs[msg].votes;

        // create message element
        var $messageListElement = $('<li>');

        // create delete element
        var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>')
        $deleteElement.on('click', function (e) {
          var id = $(e.target.parentNode).data('id')
          deleteMessage(id)
        });

        // create up vote element
        var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"></i>')
        $upVoteElement.on('click', function (e) {
          var id = $(e.target.parentNode).data('id');
          updateMessage(id, ++allMsgs[id].votes); //votes variable stores value independent of node id. this change targets the id.
        });

        // create down vote element
        var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>')
        $downVoteElement.on('click', function (e) {
          var id = $(e.target.parentNode).data('id');
          updateMessage(id, --allMsgs[id].votes);
        });

        // add id as data attribute so we can refer to later for updating
        $messageListElement.attr('data-id', msg)

        // add message to li
        $messageListElement.html(message);

        // add delete element
        $messageListElement.append($deleteElement)

        // add voting elements
        $messageListElement.append($upVoteElement)
        $messageListElement.append($downVoteElement)

        // show votes
        $messageListElement.append('<div class="pull-right">' + votes + '</div>')

        // push element to array of messages
        messages.push($messageListElement);
      }

      // remove lis to avoid dupes
      // .empty() is a jQuery method to remove all child nodes
      $messageBoard.empty();
      for (var i in messages) {
        $messageBoard.append(messages[i]);
      }
    });
  }

  function updateMessage(id, votes) {
    // find message whose objectId is equal to the id we're searching with
    var messageReference =  messageAppReference.ref('messages').child(id);

    // update votes property
    messageReference.update({
      votes: votes
    });
  }

  function deleteMessage(id) {
    // find message whose objectId is equal to the id we're searching with
   var messageReference =  messageAppReference.ref('messages').child(id);

    messageReference.remove();
  }

  return {
    getPosts: getPosts
  };
  
})();