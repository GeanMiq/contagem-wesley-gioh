function revelar() {
    const revealDiv = document.getElementById("reveal");
    const sound = document.getElementById("sound");
    const body = document.getElementById("body");

    sound.play();
    body.classList.add("reveal-bg");

    let count = 5;
    revealDiv.innerHTML = `<div class="count">${count}</div>`;

    const interval = setInterval(() => {
        count--;

        if (count > 0) {
            revealDiv.innerHTML = `<div class="count">${count}</div>`;
        } else {
            clearInterval(interval);
            explosaoFinal();
        }
    }, 1200); // MAIS LENTO

    iniciarCoracoes();
}

function explosaoFinal() {
    const revealDiv = document.getElementById("reveal");
    const flash = document.getElementById("flash");

    flash.classList.add("active");

    setTimeout(() => {
        revealDiv.innerHTML = `
            <div class="final">
                FALTAM 5 DIAS
            </div>
            <div class="names">
                Wesley & Gioh
            </div>
            <div class="date">
                07/02/2026
            </div>
            <img src="logogiewes.png" class="logo">
        `;
    }, 500);
}

function iniciarCoracoes() {
    const interval = setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💚";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 14 + "px";
        heart.style.animationDuration = Math.random() * 3 + 5 + "s";

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 8000);
    }, 300);

    setTimeout(() => clearInterval(interval), 5000);
}