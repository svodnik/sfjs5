// Convert favorites list to jQuery:


window.onload = function() {
  var button = document.getElementById('new-thing-button');
  var thingList = document.getElementById('fav-list');
  var newThingInput = document.getElementById('new-thing');

  button.onclick = function(event) {
    event.preventDefault();
    var newThing = newThingInput.value;
    var newThingLi = document.createElement('li');
    var newThingText = document.createTextNode(newThing);
    newThingLi.appendChild(newThingText);
    thingList.appendChild(newThingLi);
    newThingInput.value = "";
  }
};
