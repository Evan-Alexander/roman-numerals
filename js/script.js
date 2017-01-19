var I = 1;
var V = 5;
var X = 10;
var L = 50;
var C = 100;
var D = 500;
var M = 1000;


$(document).ready(function() {
  $("form#r-numerals").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var result = roman(number);
    $(".number").text(number);
    $(".roman").text(result);

    $("#result").show();

  });
});
