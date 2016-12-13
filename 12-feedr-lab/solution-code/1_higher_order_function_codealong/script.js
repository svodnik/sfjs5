/*
This code creates custom functions to calculate cart total including sales tax for different locales.
In a full app, the location would be fetched and the rate would be looked up online.
We could then set the appropriate cartTotaler<city> function as the event listener everytime the object containing
    cart contents is updated.
*/
"use strict";
/*
var SFtaxRate = 0.0875;
var oaklandTaxRate = 0.09;

function makeTotaler(taxRate) {
    return function(cartValue) {
        var totalCost = cartValue + (cartValue * taxRate);
        console.log("Cost including tax is $" + totalCost.toFixed(2));
    };
}

var cartTotalerSF = makeTotaler(SFtaxRate);
var cartTotalerOakland = makeTotaler(oaklandTaxRate);
*/

// Rewritten version that uses a closure:

function makeTotaler(city) {
    var taxRate;
    if (city === "sf") { // values no longer in global scope, so other scripts can't access them
        taxRate = 0.0875;
    } else if (city === "oakland") {
        taxRate = 0.09;
    }
    return function(cartValue) {
        var totalCost = cartValue + (cartValue * taxRate);
        console.log("Cost including tax is $" + totalCost.toFixed(2));
    };
}

var cartTotalerSF = makeTotaler("sf");
var cartTotalerOakland = makeTotaler("oakland");

