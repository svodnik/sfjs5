/*
  Complete the following module so it exports methods for the following behaviors:
  - start: if the fuel level is 0, logs "out of gas" to the console; otherwise, logs "started and ready to go"
  - drive: if the fuel level is 0, logs "out of gas" to the console; otherwise, reduces fuel by 1 and logs "Vroom!"
  - refuel: sets the fuel level to 2, and logs the fuel level to the console
  - getMake: logs the kind of car (stored in the 'kind' parameter) to the console
  When your code is complete and works properly, the statements at the bottom of the file should all return
  the expected values in the console.
  BONUS: Add a "tradeIn" method that lets you change the make of the car and refuels it. Be sure the getMake method 
  still works after doing a tradeIn.
*/

var car = (function(kind) {
  var fuel = 2;

// add code here to return methods that interact with private variables

})('Tesla');

car.start();
car.drive();
car.drive();
car.drive();
car.refuel();
car.getMake();