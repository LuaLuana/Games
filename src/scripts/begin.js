// Selecione o botão "Play" pelo ID
const playButton = document.getElementById("playButton");
const titleRalph = document.querySelector(".title-font");

playButton.addEventListener("click", function () {

    playButton.style.display = "none";
    titleRalph.style.display = "none";

    const gameContainer = document.getElementById("gameContainer");
    gameContainer.style.display = "block"; 
    gameContainer.style.width = "100vh"; 

});