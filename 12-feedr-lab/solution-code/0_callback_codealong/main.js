'use strict';

function addNumbers(firstNum, secondNum) {
  return (parseInt(firstNum) + parseInt(secondNum));
}

$('#show-result').on("click", function(event){
  event.preventDefault();
  var num1 = $('#first-number').val();
  var num2 = $('#second-number').val();
  $('#result').html('The total is ' + addNumbers(num1, num2));
});

/* 

// We could also write this code in a single function, as follows:

$('#show-result').on("click", function(event){
  event.preventDefault();
  var num1 = $('#first-number').val();
  var num2 = $('#second-number').val();
  var total = (parseInt(firstNum) + parseInt(secondNum));
  $('#result').html('The total is ' + total);
});

// However, the code at the top of this file is better because it separates
// the view from the logic, which enforces separation of concerns.
// This becomes increasingly important as our apps grow in size.

*/