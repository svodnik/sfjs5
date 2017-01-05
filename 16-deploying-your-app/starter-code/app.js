// Initialize Firebase
  var config = {
    apiKey: "AIzaSyByltC3JIKFE7DP4GaRikdXUx3nrauJCrY",
    authDomain: "new-secret-app.firebaseapp.com",
    databaseURL: "https://new-secret-app.firebaseio.com",
    storageBucket: "new-secret-app.appspot.com",
    messagingSenderId: "465362591766"

  };
  firebase.initializeApp(config);

// https://firebase.google.com/docs/reference/js/firebase.database
var messageAppReference = firebase.database();

$(document).ready(function() {
    $('#message-form').submit(function (event) {
        event.preventDefault();
        var message = $('#message').val();
        $('#message').val('');
        var messagesReference = messageAppReference.ref('messages');
        messagesReference.push({
            message: message,
            votes: 0
        });
        console.log(messagesReference);
    });
    getPosts();
});

function getPosts() {
    messageAppReference.ref('messages').on('value', function (results) {
        var $messageBoard = $('.message-board');
        var messages = [];
        var allMsgs = results.val();
        for (var msg in allMsgs) {
            var message = allMsgs[msg].message;
            var votes = allMsgs[msg].votes;

            var $messageListElement = $('<li>');
            var $deleteElement = $('<i class="fa fa-trash pull-right delete"></i>');
            $deleteElement.on('click', function(e) {
                var id = $(e.target.parentNode).data('id');
                deleteMessage(id);
            });

            var $upVoteElement = $('<i class="fa fa-thumbs-up pull-right"</i>');
            $upVoteElement.on('click', function (e) {
                var id = $(e.target.parentNode).data('id');
                updateMessage(id, ++allMsgs[id].votes);
            });

            var $downVoteElement = $('<i class="fa fa-thumbs-down pull-right"></i>');
             $downVoteElement.on('click', function (e) {
                var id = $(e.target.parentNode).data('id');
                updateMessage(id, --allMsgs[id].votes);
            });           

            $messageListElement.attr('data-id', msg);

            $messageListElement.html(message);
            $messageListElement.append($deleteElement);
            $messageListElement.append($upVoteElement);
            $messageListElement.append($downVoteElement);
            $messageListElement.append('<div class="pull-right">' + votes + '</div>');

            messages.push($messageListElement);
        }
        $messageBoard.empty();
        for (var i in messages) {
            $messageBoard.append(messages[i]);            
        }
    });
}

function updateMessage(id, votes) {
    var messageReference = messageAppReference.ref('messages').child(id);
    messageReference.update({
        votes: votes
    });
}

function deleteMessage(id) {
    var messageReference = messageAppReference.ref('messages').child(id);
    messageReference.remove();
}