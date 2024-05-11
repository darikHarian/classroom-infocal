let userName = document.getElementById('userName');
let startGame = document.getElementById('startGame');
let playerName = document.getElementById('playerName');
let form = document.getElementById('form');
let move = document.getElementById('move');
let moveSelected = document.querySelectorAll('.moveSelected');
let userImage = document.getElementById('userImage');
let cpuImage = document.getElementById('cpuImage');
let result = document.getElementById('result');
let partials = document.getElementById('partials');
let scores = document.querySelectorAll('.scores');
let gameNumber = document.getElementById('gameNumber');
let playerScoreText = document.getElementById('playerScoreText');
let cpuScoreText = document.getElementById('cpuScoreText');
let playerScoreValue = document.getElementById('playerScoreValue');
let cpuScoreValue = document.getElementById('cpuScoreValue');
let finalScore = document.getElementById('finalScore');
let playerButton = document.getElementById('playerButton');
let cpuButton = document.getElementById('cpuButton');
let finalResult = document.getElementById('finalResult');
let playerScore = 0;
let cpuScore = 0;

function startingGame(event) {
    event.preventDefault();
    let nGames = document.getElementById('nGames');
    nGames = Number(nGames.value);
    if (nGames < 1) {
        alert('Por favor, ingrese un número mayor a cero');
    } else {
        if (userName.value == "") {
            playerName.innerHTML = 'Anónimo';
        } else {
            playerName.innerHTML = userName.value;
        }
        form.classList.add("d-none");
        move.classList.remove("d-none");
        playerScoreText.classList.remove("invisible");
        cpuScoreText.classList.remove("invisible");
        result.classList.remove("invisible");
    };
 
    let j = 0
    for (let i = 0; i < nGames; i++) {
        moveSelected.forEach(function(currentMove) {
            currentMove.addEventListener("click", function() {
                if (i == (nGames-1)) {
                    // Aquí se ejecuta 1 iteración por cada clic
                    playingGame();
                    j++;
                    gameNumber.innerHTML = `JUEGO N°${j}`;
                    if (j == nGames) {
                        userImage.innerHTML = '<img src="assets/img/userDefault.png"</img>';
                        cpuImage.innerHTML = '<img src="assets/img/cpuDefault.jpeg"</img>';
                        move.classList.add("d-none")
                        finalScore.classList.remove("d-none");
                        scores.forEach(function(score) {
                            score.classList.add("invisible");
                        });
                    };
                };
            });   
        });
    };
};

function playingGame() {
    let playerMove, winner;
    let cpuMove = Math.floor(Math.random() * 3);
    let moveSelectedID = event.target.id;
      
    if (moveSelectedID == 'moveStone') {
        playerMove = 0;
        userImage.innerHTML = '<img class="mx-auto" src="assets/img/userStone.png" style="width: fit-content">';
    } else if (moveSelectedID == 'movePaper') {
        playerMove = 1;
        userImage.innerHTML = '<img class="mx-auto" src="assets/img/userPaper.png" style="width: fit-content">';
    } else {
        playerMove = 2;
        userImage.innerHTML = '<img class="mx-auto" src="assets/img/userScissor.png" style="width: fit-content">';
    };

    if (cpuMove == 0) {
        cpuImage.innerHTML = '<img class="mx-auto" src="assets/img/cpuStone.png" style="width: fit-content">';
    } else if (cpuMove == 1) {
        cpuImage.innerHTML = '<img class="mx-auto" src="assets/img/cpuPaper.png" style="width: fit-content">';
    } else {
        cpuImage.innerHTML = '<img class="mx-auto" src="assets/img/cpuScissor.png" style="width: fit-content">';
    }
    
    if ((playerMove == 0 && cpuMove == 2) || (playerMove == 1 && cpuMove == 0) || (playerMove == 2 && cpuMove == 1)) {
        partials.innerHTML = `Gana ${playerName.innerText}`;
        playerScore += 1;
        playerScoreValue.innerHTML = playerScore;
    } else if ((playerMove == 0 && cpuMove == 1) || (playerMove == 1 && cpuMove == 2) || (playerMove == 2 && cpuMove == 0)) {
        partials.innerHTML = 'Gana CPU';
        cpuScore += 1;
        cpuScoreValue.innerHTML = cpuScore;
    } else {
        partials.innerHTML = 'Empate';
    };

    if (playerScore > cpuScore) {
        winner = `Juego ganado por ${playerName.innerText}`;
    } else if (playerScore < cpuScore) {
        winner = 'Juego ganado por Computadora';
    } else {
        winner = '¡Es un empate!';
    }

    finalResult.innerHTML = `<h2>${winner}</h2>`;
    playerButton.innerHTML = `${playerName.innerText}: ${playerScore}`;
    cpuButton.innerHTML = `CPU: ${cpuScore}`;
};

function restartGame() {
    location.reload();
};

startGame.addEventListener("click", startingGame);