document.addEventListener("DOMContentLoaded", function() {

  // ===== TYPING EFFECT =====
  const texts = [
    "Web Developer 💻",
    "Cyber Learner 🔐",
    "Building Cool Stuff 🚀"
  ];

  let i = 0;
  let j = 0;
  let currentText = "";
  let isDeleting = false;

  function type() {
    currentText = texts[i];

    if (!isDeleting) {
      document.getElementById("typing").innerHTML =
        currentText.substring(0, j++);
    } else {
      document.getElementById("typing").innerHTML =
        currentText.substring(0, j--);
    }

    if (j == currentText.length) isDeleting = true;
    if (j == 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
  }

  type();

  // ===== MATRIX EFFECT =====
  const canvas = document.getElementById("matrix");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = "01";
  const fontSize = 14;
  const columns = canvas.width / fontSize;

  const drops = [];

  for (let x = 0; x < columns; x++) {
    drops[x] = 1;
  }

  function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0f0";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters.charAt(Math.floor(Math.random() * letters.length));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }

      drops[i]++;
    }
  }

  setInterval(drawMatrix, 33);

});
