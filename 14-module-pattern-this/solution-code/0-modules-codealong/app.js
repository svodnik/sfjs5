var colorsModule = (function () {
 
  var colors = []; // private
 
  return {  // Return an object exposed to the public
 
    // Add a color to our list
    addColor: function(newColor) {
      colors.push(newColor);
    },
 
    // Get the count of colors
    getColorCount: function () {
      return colors.length;
    }
  };
})();