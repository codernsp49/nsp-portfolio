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
