
var ones = [null, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var tens = [null, "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var hundreds = [null, "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var thousands = [null, "M", "MM", "MMM"]

var validateInput = function(numVar) {
  if (isNaN(numVar)) {
  return alert("Please enter a number less than 3999.");
  } else if(numVar > 3999) {
    return alert("Please enter a number less than 3999.");
  } else if (numVar == 0) {
    alert("0 is not a Roman Numeral!");
  } else {
  return numVar
  }
};

// var biggestNumber = function(verified) {
//   if(verified > 3999) {
//     return alert("Please enter a number less than 3999.");
//   } else {
//     return verified
//   }
// };

var numberSplitter = function(verified) {
  if (verified != undefined){
  return verified.split("").map(function(t){return parseInt(t)});
  };
};


var identifier = function(numbers) {
  if (numbers != undefined){
  var onesPlace = numbers[numbers.length - 1];
  onesPlace = ones[onesPlace];

  if (numbers.length > 1) {
  var tensPlace = numbers[numbers.length - 2];
  tensPlace = tens[tensPlace];
  } else {
    tensPlace = null;
  };

  if (numbers.length > 2) {
  var hundredsPlace = numbers[numbers.length - 3];
  hundredsPlace = hundreds[hundredsPlace];
  } else {
  hundredsPlace = null;
  };

  if (numbers.length > 3) {
  var thousandsPlace = numbers[numbers.length - 4];
  thousandsPlace = thousands[thousandsPlace];
  } else {
  thousandsPlace = null;
  };
  var romans = [thousandsPlace, hundredsPlace, tensPlace, onesPlace];
    return romans;
  };
};








var roman = function(romans){
  if (romans != undefined){
  romans = romans.filter(function(roman){
    return roman;
  });
  console.log(romans);
  var result = romans.toString().replace(/,/g, "");

  return result;
  } else result = "";
  return result;
};





$(document).ready(function() {
  $("form#r-numerals").submit(function(event) {
    event.preventDefault();
    var numVar = $("input#number").val();
    var verified = validateInput(numVar);
    // verified = biggestNumber(verified);
    console.log("verified number is " + verified);
    var numbers = numberSplitter(verified);
    // var onesPlace = onesIdentifier(numbers);
    // var tensPlace = tensIdentifier(numbers);
    // console.log(onesPlace);
  //  var hundredsPlace = hundredsIdentifier(numbers);
  //  var thousandsPlace = thousandsIdentifier(numbers);
//   console.log(thousandsPlace + hundredsPlace + tensPlace + onesPlace);
    var romans = identifier(numbers);
    var result = roman(romans);
   console.log(result);
    $(".number").text(numVar);
    $(".roman").text(result);
    if (result != "") {
      $("#result").show();
    }
  });
});
