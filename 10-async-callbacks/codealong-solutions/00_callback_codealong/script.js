/* setTimeout(function() {
    console.log("Hello world!");
}, 2000) */

//var numbers = [[1,2],[8,6],[5,9]];
var footballScores = [[7,23], [14,7], [49,27]];
var baseballScores = [[3,1], [5,3], [11,2]];

var processor = function(array) {
    var result = [];
    array.forEach(function(element) {
        result.push(element[0] + element[1]);
    });
    return result;
}

function makeArrayReducer(values, callback) {
    return function() {
        var summedArray = callback(values);
        console.log("The result is " + summedArray);
    };
}

//reduceArray(numbers, processor);

var reduceFootballScores = makeArrayReducer(footballScores, processor)();
var reduceBaseballScores = makeArrayReducer(baseballScores, processor)();

//reduceFootballScores();
//reduceBaseballScores();
