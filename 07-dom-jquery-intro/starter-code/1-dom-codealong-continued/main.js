 var addContent = document.getElementById("add-content");
 
 // run this function when a user clicks the button
   addContent.onclick = function() {
     
     // create a couple of elements in an empty HTML page
     var main_heading = document.createElement("h1");
     var heading_text = document.createTextNode("DOM Manipulation");
     main_heading.appendChild(heading_text);
     document.body.appendChild(main_heading);
  }

// run this function when the document is loaded
  window.onload = function() {
     // apply the button-branding class to the button (selected above)
     addContent.className = "button-branding";

     // Target items by id via the getElementById() method
     var campusesContainer = document.getElementById("gaCampuses");
     // The getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.
     var gaCampuses = campusesContainer.getElementsByTagName("li");

     // We can iterate through the returned collection with a for loop
     for (var i = 0; i < gaCampuses.length; i++) {
          gaCampuses[i].className = "list-elements";
      }
  }
