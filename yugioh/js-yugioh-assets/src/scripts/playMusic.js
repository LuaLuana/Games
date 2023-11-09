
//MUSICA DE FUNDO -- BACKGROUND MUSIC
async function playAudio(status) {
     const audio = new Audio(`./src/assets/audios/${status}.wav`)
     try {
         audio.play();
     } catch (error) {
         console.error("Error playing audio:", error);
     }
 }