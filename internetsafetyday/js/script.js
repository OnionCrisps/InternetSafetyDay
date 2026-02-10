console.log("scroll-bg.js loaded");

// ---------- Scroll background effect ----------
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;

      const progress = maxScroll > 0
        ? window.scrollY / maxScroll
        : 0;

      document.body.style.setProperty("--scroll", progress);
      ticking = false;
    });
    ticking = true;
  }
});

// card jumps
const cardMap = {
  etiquette: "#online_etiquette",
  scams: "#scams",
  loot: "#lootboxes",
  wellbeing: "#digital_health",
  privacy: "#privacy",
  cyberbullying: "#cyberbullying"
};

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    for (const key in cardMap) {
      if (card.classList.contains(key)) {
        const target = document.querySelector(cardMap[key]);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        break;
      }
    }
  });
});

//music 
const music = document.getElementById("bg-music");
const toggle = document.getElementById("music-toggle");
let playing = false;

toggle.addEventListener("click", () => {
  if (!playing) {
    music.volume = 0.3;
    music.play();
    toggle.textContent = "🔊";
  } else {
    music.pause();
    toggle.textContent = "🔇";
  }
  playing = !playing;
});
