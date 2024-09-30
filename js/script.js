function show_image(src, width, score) {
    let h1 = document.createElement("h1");
    h1.textContent = "Score = " + score;
    h1.textContent = "Score = " + score;
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = Math.floor(Math.random() * (0.8*window.innerWidth - 50) + 50) + "px";
    div.style.top = Math.floor(Math.random() * (0.8*window.innerHeight - 50) + 50) + "px";
    div.onclick = function() { show_image("svgs/target.svg", width, score + 1); div.remove(); h1.remove(); };
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    div.appendChild(img);
    document.body.appendChild(div);
    document.body.appendChild(h1);
}

function show_score(score) {
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    h1.textContent = "Score = " + score;
    div.appendChild(h1);
    document.body.appendChild(div);
}

show_image("svgs/target.svg", "50", 0);