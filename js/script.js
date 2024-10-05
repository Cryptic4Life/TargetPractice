function run_game() {

    gameOver = false;

    // Score
    let container = document.createElement("div");
    container.className = "container";
    let score = 0;
    let scoreText = document.createElement("span");
    scoreText.textContent = `Score: ${score}`;
    
    // Timer
    let timerText = document.createElement("span");
    let timeLeft = 5;
    timerText.textContent = `Time left: ${timeLeft} seconds`;
    const intervalID = setInterval(function() {
        if (timeLeft > 0 && !gameOver) {
            timeLeft--;
            if (timeLeft == 1) {
                timerText.textContent = `Time left: ${timeLeft} second`;
            }
            else timerText.textContent = `Time left: ${timeLeft} seconds`;
        }
        else if (!gameOver) {
            if (score < 10) {
                alert("Game over :(\nRefresh the page to try again.");
            }
            else {
                alert("Congratulations!\nYou won!!");
            }
            clearInterval(intervalID);
            gameOver = true;
            div.onclick = null;
        }
    }, 1000);
    container.appendChild(scoreText);
    container.appendChild(timerText);
    document.body.appendChild(container);

    // Target div
    let div = document.createElement("div");
    div.className = "target";
    div.style.position = "absolute";
    div.style.left = Math.floor(Math.random() * (0.8*window.innerWidth - 50) + 50) + "px";
    div.style.top = Math.floor(Math.random() * (0.8*window.innerHeight - 50) + 50) + "px";
    div.onclick = function() { 
        div.style.left = Math.floor(Math.random() * (0.8*window.innerWidth - 50) + 50) + "px";
        div.style.top = Math.floor(Math.random() * (0.8*window.innerHeight - 50) + 50) + "px";
        score++;
        scoreText.textContent = `Score: ${score}`;
    };

    // Target image
    let img = document.createElement("img");
    img.src = "svgs/target.svg";
    img.width = 50;
    div.appendChild(img);
    document.body.appendChild(div);
    
}

run_game();