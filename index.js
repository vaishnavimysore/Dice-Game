/*variable creation for dice numbers*/
var randomNumber1 = (Math.floor(Math.random()*6))+1;
var randomNumber2 = (Math.floor(Math.random()*6))+1;

/*Creating the path and replacing the image path*/
var imageSelector1 = "images/dice"+randomNumber1+ ".png";
document.querySelector(".img1").setAttribute("src" , imageSelector1);

var imageSelector2 = "images/dice"+randomNumber2+ ".png";
document.querySelector(".img2").setAttribute("src" , imageSelector2);

/*Declaring the winner*/

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").textContent = "Player1 wins!";
}
else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}
else
{
  document.querySelector("h1").textContent = "Player2 wins!";
}
