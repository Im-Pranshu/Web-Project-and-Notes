// Generating random numbers from 1 to 6.
var ran1 = (Math.floor(Math.random()*6))+1;// 1-6
var ran2 = (Math.floor(Math.random()*6))+1;

// storing the random images name from dice1.png - dice6.png
var img1 = "./images/" + "dice" + ran1 + ".png"; 
var img2 = "./images/" + "dice" + ran2 + ".png";

// announcing winners according to score.
if(ran1 > ran2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
}
else if(ran2 > ran1){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}
else{
    document.querySelector("h1").textContent = "Draw!";
}

// updating the dice images.
document.querySelector(".img1").setAttribute("src",img1);
document.querySelector(".img2").setAttribute("src",img2);

