$(document).ready(function(){

//* generates random target number bewteen 120-12*//
var targetNumber = Math.floor(12 + (Math.random() * (120 - 12)));;
        $("#number-to-guess").text(targetNumber);


//* variables needed for tallies *//
var wins = 0;
var loses = 0;
var counter = 0;
var numberOptions= [];

//* start function*//
function start(){
    counter= 0;   
}

//* creates crystals and numbers for crystals*//

function crystalCreate(){

//* create 4 random numbers bewtween 1-12 assigned to the crystals*//

 for(var i = 1; i <= 4; i++){
    numberOptions.push(Math.floor(12 + (Math.random() * (1 - 12))));
    }  


//*loop to create crystals for every number option*//
 for (var i=0; i<4; i++){

//*for each interation we will create an imageCrystal
//* need four different images*//
var imageCrystal=$("<img>");
imageCrystal.addClass("crystal-image");
imageCrystal.attr("src","http://www.batterycompany.co.uk/blog/wp-content/uploads/2016/11/diamond-06.jpg");
imageCrystal.attr("data-crystalvalue", numberOptions[i]);

$("#crystals").append(imageCrystal);
}
}

//*function restart(){
    //*counter=0;

   //* var targetNumber = Math.floor(12 + (Math.random() * (120 - 12)));;
        //*$("#number-to-guess").text(targetNumber);

    //*for(var i = 1; i <= 4; i++){
    //*numberOptions.push(Math.floor(12 + (Math.random() * (1 - 12))));
   //* } 


crystalCreate()
start()

//* when click on image get value*//
//* put total in total score*//
$(".crystal-image").on("click",function(){
    var crystalValue=($(this).attr("data-crystalvalue"));
    crystalValue=parseInt(crystalValue);
    counter+=crystalValue;
    $('#totalScore').text(counter);

    
//* when win *//
    if (counter === targetNumber){
        wins++;
        $('#wins').text(wins);
        alert("You Win!");
        //*restart();
        start();
    }

//* when lose *//
    else if(counter>= targetNumber) {
         loses++;
        $('#loses').text(loses);
        alert("you lose");
        //*restart();
        start();
    }

//* game does restart but is not generating a new target number*//
})
});