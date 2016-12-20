var trafficModule = (function () {
 
  var signPalette = []; // private
 
  return {  // Return an object exposed to the public
 
    // Add a color to our list
    addColor: function(newColor) {
      signPalette.push(newColor);
    },
 
    // Get the count of colors
    getColorCount: function () {
      return signPalette.length;
    }
  };
})();