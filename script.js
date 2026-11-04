const canvas = document.getElementById('celebrationCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

const particles = [];
const colors = ['#fbbf24', '#f59e0b', '#38bdf8', '#f43f5e', '#a855f7', '#4ade80'];

function createFirework(x, y) {
  const count = 65;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const speed = Math.random() * 5 + 1.5;
    particles.push({
      x, y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      alpha: 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 3 + 1.5
    });
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.06;
    p.alpha -= 0.014;

    if (p.alpha <= 0) {
      particles.splice(i, 1);
      continue;
    }

    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
  requestAnimationFrame(animateParticles);
}
animateParticles();

setInterval(() => {
  const rx = Math.random() * (canvas.width * 0.8) + canvas.width * 0.1;
  const ry = Math.random() * (canvas.height * 0.45) + 60;
  createFirework(rx, ry);
}, 2500);

function spawnBalloon() {
  const container = document.getElementById('balloon-container');
  const b = document.createElement('div');
  b.className = 'balloon';
  b.style.left = Math.random() * 92 + 'vw';
  b.style.background = colors[Math.floor(Math.random() * colors.length)];
  b.style.animationDuration = (Math.random() * 5 + 7) + 's';
  container.appendChild(b);
  setTimeout(() => b.remove(), 12000);
}
setInterval(spawnBalloon, 1800);

document.getElementById('celebrate-btn').addEventListener('click', () => {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      createFirework(
        Math.random() * canvas.width * 0.8 + canvas.width * 0.1,
        Math.random() * canvas.height * 0.4 + 50
      );
    }, i * 250);
  }
});

const flame = document.getElementById('candle-flame');
flame.addEventListener('click', () => {
  flame.classList.add('blown-out');
  for (let i = 0; i < 4; i++) {
    createFirework(window.innerWidth / 2 + (i - 1.5) * 90, 220);
  }
});

// Clean Typewriter Text
const hindiPoemText = `Aap humari har baat maante ho, humein har cheez dete ho. 
Aap bilkul strict nahi ho, bas kabhi-kabhi chillate ho woh bhi tab jab koi bohot badi galti ho jaye, warna kuch nahi kehte.

Happy Birthday Papa! 
Aap jaisa accha aur samajhdar Papa aur koi nahi ho sakta.`;

let charIndex = 0;
const targetEl = document.getElementById('typewriter-hindi');

function typeHindiWishes() {
  if (charIndex < hindiPoemText.length) {
    targetEl.textContent += hindiPoemText.charAt(charIndex);
    charIndex++;
    setTimeout(typeHindiWishes, 35);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeHindiWishes, 600);
});
