const intro = document.getElementById("intro");
const count = document.getElementById("count");
const finalScreen = document.getElementById("final");
const start = document.getElementById("start");
const number = document.getElementById("number");

start.onclick = () => {
  intro.classList.remove("active");
  count.classList.add("active");

  let n = 5;
  number.textContent = n;

  const interval = setInterval(() => {
    n--;
    if (n >= 0) {
      number.textContent = n;
      number.style.animation = "none";
      number.offsetHeight;
      number.style.animation = "pulse .7s ease";
    }
    if (n === 0) {
      clearInterval(interval);
      setTimeout(showFinal, 700);
    }
  }, 900);
};

function showFinal() {
  count.classList.remove("active");
  finalScreen.classList.add("active");
  startHearts();
}

/* CORAÇÕES */
const heartsCanvas = document.getElementById("hearts");
const ctx = heartsCanvas.getContext("2d");
heartsCanvas.width = innerWidth;
heartsCanvas.height = innerHeight;

let hearts = [];

function startHearts() {
  setInterval(() => {
    hearts.push({
      x: Math.random() * innerWidth,
      y: innerHeight + 30,
      dy: Math.random() * 1.5 + .6,
      size: Math.random() * 18 + 10,
      alpha: Math.random() * .5 + .5
    });
  }, 300);

  animateHearts();
}

function animateHearts() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  hearts.forEach(h => {
    h.y -= h.dy;
    ctx.globalAlpha = h.alpha;
    ctx.fillStyle = "#2ecc71";
    ctx.font = `${h.size}px serif`;
    ctx.fillText("❤", h.x, h.y);
  });
  ctx.globalAlpha = 1;
  requestAnimationFrame(animateHearts);
}
