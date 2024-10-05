function run_game() {

    gameOver = false;

    // Score
    let scoreText = document.createElement("p");
    scoreText.innerHTML = "Score = ";
    let scoreSpan = document.createElement("span");
    scoreSpan.id = "score";
    scoreSpan.textContent = 0;
    scoreText.appendChild(scoreSpan);
    document.body.appendChild(scoreText);
    
    // Timer
    let timerText = document.createElement("p");
    timerText.innerHTML = "Time left = ";
    let timerSpan = document.createElement("span");
    timerSpan.textContent = 5;
    setInterval(function() {
        if (timerSpan.textContent > 0 && !gameOver) {
            timerSpan.textContent--;
        }
        else if (!gameOver) {
            if (scoreSpan.textContent < 10) {
                alert("Game over. Refresh the page to try again.");
            }
            else {
                alert("Congratulations! You won!!");
            }
            gameOver = true;
            div.onclick = null;
        }
    }, 1000);
    timerText.appendChild(timerSpan);
    timerText.appendChild(document.createTextNode(" seconds"));
    document.body.appendChild(timerText);

    // Target div
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = Math.floor(Math.random() * (0.8*window.innerWidth - 50) + 50) + "px";
    div.style.top = Math.floor(Math.random() * (0.8*window.innerHeight - 50) + 50) + "px";
    div.onclick = function() { 
        div.style.left = Math.floor(Math.random() * (0.8*window.innerWidth - 50) + 50) + "px";
        div.style.top = Math.floor(Math.random() * (0.8*window.innerHeight - 50) + 50) + "px";
        scoreSpan.textContent++;
    };

    // Target image
    let img = document.createElement("img");
    img.src = "svgs/target.svg";
    img.width = 50;
    div.appendChild(img);
    document.body.appendChild(div);
    
}

run_game();