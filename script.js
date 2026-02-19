let pin = "";
const pinBenar = "8888";
const display = document.getElementById("display");
const safe = document.querySelector(".safe");

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

/* NEXT MISSION */
function goToNext() {
  window.location.href = "https://link-web-kamu.com";
}
