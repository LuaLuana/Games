async function updateScore() {
    state.score.scoreBox.innerText =`Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`
}
async function checkDuelResult(playerCardId,computerCardId){
    let duelResult = "Draw"
    let playerCard = cardData[playerCardId]

    if (playerCard.WinOf.includes(computerCardId)) {
        duelResult = "Win"
        state.score.playerScore++
    }
    if (playerCard.LoseOf.includes(computerCardId)) {
        duelResult ="Lose"
        state.score.computerScore++
    }

    await playAudio(duelResult)
    return duelResult;
}

//RESETAR PARTIDA -- RESET MATCH
async function nextDuel() {
    state.cardSprites.avatar.src = ""
    state.actions.button.style.display = "none"
    state.fieldCards.player.style.display = "none"
    state.fieldCards.computer.style.display = "none"

    init()
}