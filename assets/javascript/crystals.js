$(document).ready(function(){

//* generates random target number bewteen 19 and 120*//
var targetNumber = Math.floor(12 + (Math.random() * (120 - 19)));

$("#number-to-guess").text(targetNumber);

//*variable needed  for tallies*//

var wins = 0;
var loses = 0;
var counter = 0;


//* create 4 random numbers bewtween 1 and 12 assigned to the crystals*//
 var numberOptions= [];

 for(var i = 1; i <= 4; i++)
    numberOptions.push(Math.floor(12 + (Math.random() * (1 - 12))));

//*loop to create crystals for every number option*//
 for (var i=0; i<4; i++){

//*for each interation we will create an imageCrystal
//* need four different images*//

var imageCrystal=$("<img>");

imageCrystal.addClass("crystal-image");

imageCrystal.attr("src","https://tse4.mm.bing.net/th?id=OIP.T-A3fgsXRXYp2Vur5ce6XADpEs&pid=15.1&P=0&w=300&h=300");

imageCrystal.attr("data-crystalvalue", numberOptions[i]);


$("#crystals").append(imageCrystal);
}
//* when click on image get value*//
//*need current tallie to show under  total score in the html*//

$(".crystal-image").on("click",function(){

    var crystalValue=($(this).attr("data-crystalvalue"));
    crystalValue=parseInt(crystalValue);
    counter+=crystalValue;
    $('#totalScore').text(counter);

//* alerts  current score*//

    alert("New score:"  + counter);

//* when win*//

    if (counter === targetNumber){
        alert("You Win!");
        wins++;
        $('#wins').text(wins);
    }

//* when lose*//

    else if(counter>= targetNumber) {
        alert("you lose");
        loses++;
        $('#loses').text(loses);
    }

//* need game reset*//
})
});
