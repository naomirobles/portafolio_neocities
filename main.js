document.getElementById('year').textContent = new Date().getFullYear();

const key = 'portfolio-visits';
let count = parseInt(localStorage.getItem(key) || '0') + 1;
localStorage.setItem(key, count);
const counterEl = document.getElementById('visitor-count');
if (counterEl) counterEl.textContent = String(count).padStart(6, '0');

const sparkles = ['✦','✧','★','☆','✺','✹','✸','✷','❋','❊'];
const sparkleColors = ['#ff6eb4','#00e5ff','#b04fff','#aaff00','#ffe066'];

document.addEventListener('mousemove', (e) => {
  if (Math.random() > 0.85) {
    const el = document.createElement('div');
    el.className = 'sparkle';
    el.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
    el.style.left = (e.clientX + Math.random() * 20 - 10) + 'px';
    el.style.top  = (e.clientY + Math.random() * 20 - 10) + 'px';
    el.style.color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
    el.style.textShadow = `0 0 6px ${el.style.color}`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 800);
  }
});
