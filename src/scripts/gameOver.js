const customAlert = document.getElementById("customAlert");
const backButton = document.getElementById("backButton");
let gameStarted = false;

document.getElementById("playButton").addEventListener("click", function () {
    gameStarted = true;
    // Oculte o alerta no início do jogo
    customAlert.style.display = "none";
});

function showAlert(mensagem) {
    if (gameStarted) {
        customAlert.style.display = "block";
        // Mostrar o botão "backButton" ao chamar o showAlert()
        if (backButton) {
            backButton.style.display = "block";
        }
        // Atualizar o conteúdo da mensagem do alerta
        const alertContent = document.querySelector(".custom-alert-content p");
        if (alertContent) {
            alertContent.textContent = mensagem;
        }
    }
}

if (backButton) {
    backButton.addEventListener("click", function () {
        window.location.href = "index.html"; // Redirecionar para a página inicial
    });
}
