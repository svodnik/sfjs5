/*
// function expression version of an IIFE
var countDown = function() {
    var counter;
    for(counter = 3; counter > 0; counter--) {
        console.log(counter);
    }
}();

*/

// function declaration version of an IIFE
(function countDown(start) {
    var counter;
    for(counter = start; counter > 0; counter--) {
        console.log(counter);
    }
})(10);