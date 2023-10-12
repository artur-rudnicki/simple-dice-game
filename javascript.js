var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 +".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 +".png");

if (randomNumber1 === randomNumber2) {
document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
} else {
document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}

const refreshButton = document.querySelector(".refresh-button");
const refreshPage = () => {
  location.reload();
}
refreshButton.addEventListener("click", refreshPage);