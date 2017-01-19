var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;

var ones = [null, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

var validateInput = function(numVar) {
  if (isNaN(numVar)) {
  return alert("Please enter a number less than 3999.");
  } else {
    return numVar
  }
};

var biggestNumber = function(verified) {
  if(verified > 3999) {
    return alert("Please enter a number less than 3999.");
  } else {
    return verified
  }
};

var numberSplitter = function(verified) {
  return verified.split("").map(function(t){return parseInt(t)});
}

var onesIdentifier = function(numbers) {
  var onesPlace = numbers[numbers.length - 1];
  // console.log(onesPlace);
  return ones[onesPlace];
}














$(document).ready(function() {
  $("form#r-numerals").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var verified = validateInput(number);
    verified = biggestNumber(verified);
    console.log("verified number is " + verified);
    var numbers = numberSplitter(verified);
    var onesPlace = onesIdentifier(numbers);
    console.log(onesPlace);
//    console.log(numbers);
//    var result = roman(number);
    $(".number").text(number);
    $(".roman").text(result);

    $("#result").show();

  });
});
