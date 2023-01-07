var randomNumber1= Math.floor(Math.random()*6+1);

var randomDiceImage= "dice" + randomNumber1 + ".png" ; //dice1.png to dice6.png

var randomImageSource= "images/" + randomDiceImage; //immages from dice1.ong to dice6.png

//changing the source attribute of the image ekement

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

//writing he same code for seconnd dice

var randomNumber2= Math.floor(Math.random()*6+1);

var randomDiceIamge2="dice" + randomNumber2 + ".png";

var randomImageSource2="images/" + randomDiceIamge2;

var image2=document.querySelectorAll("img")[1]; //  writing 1 means selecting the second image property feeom index.html file

image2.setAttribute("src",randomImageSource2);

// writing code for the victory heading by using inner html

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩player 1 wins!"
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML="player 2 wins🚩!"
}
else {
  document.querySelector("h1").innerHTML="oops it's a tie"
}
