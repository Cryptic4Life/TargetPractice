function show_image(src, width) {
    let div = document.createElement("div");
    div.style.position = "absolute";
    div.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    div.style.top = Math.floor(Math.random() * window.innerHeight) + "px";
    div.onclick = function() { show_image("svgs/target.svg", width); div.remove(); };
    let img = document.createElement("img");
    img.src = src;
    img.width = width;
    div.appendChild(img);
    document.body.appendChild(div);
}

show_image("svgs/target.svg", "50");