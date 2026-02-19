let pin = "";
const pinBenar = "1602";
const display = document.getElementById("display");
const safe = document.querySelector(".safe");
const music = document.getElementById("bgMusic");

function updateDisplay() {
  let dots = "";
  for (let i = 0; i < 4; i++) {
    dots += i < pin.length ? "● " : "○ ";
  }
  display.textContent = dots.trim();
}

function inputPin(n) {
  if (pin.length >= 4) return;
  pin += n;
  updateDisplay();
}

function hapus() {
  pin = "";
  updateDisplay();
}

function cekPin() {
  if (pin === pinBenar) {

    document.getElementById("brankas").classList.remove("active");
    document.getElementById("mission").classList.add("active");

    // 🎵 PLAY MUSIC + FADE IN
    music.volume = 0;
    music.play();

    let vol = 0;
    let fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 150);

  } else {
    safe.classList.add("shake");
    setTimeout(() => safe.classList.remove("shake"), 400);
    hapus();
  }
}

function activatePhoto(el) {
  document.querySelectorAll('.polaroid-card')
    .forEach(card => card.classList.remove('active'));
  el.classList.add('active');
}

function goToNext() {
  window.location.href = "https://xxdan27xx.github.io/aniv/";
}
