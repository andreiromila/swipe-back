const IMAGE_LEFT_ARROW = [
  "data:image/png;base64,",
  "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",
].join("");

const container = document.createElement("div");
container.className = "swipe-back-container";
const leftArrow = document.createElement("img");
leftArrow.className = "swipe-back-left-arrow";
leftArrow.src = IMAGE_LEFT_ARROW;
container.appendChild(leftArrow);
document.body.appendChild(container);

let postitionScale = 5;
let position = 0;
let freezeUntil = 0;
let fadeDelay = 500;
let timeoutHandle = 0;

function resetPosition() {
  position = 0;
}

function handleWheel(event) {
  if (event.deltaY !== 0) {
    freezeUntil = Date.now() + 50;
    return;
  }

  if (Date.now() < freezeUntil) {
    return;
  }
  position -= event.deltaX;
  if (position < 0) {
    position = 0;
  }
  if (position > 150 * postitionScale) {
    position = 150 * postitionScale;
  }
  leftArrow.style.left = `${
    -110 + Math.min(position, 120 * postitionScale) / postitionScale
  }px`;

  leftArrow.classList.remove("transition");

  window.setTimeout(() => {
    leftArrow.classList.add("transition");
  }, 200);

  window.clearTimeout(timeoutHandle);
  timeoutHandle = window.setTimeout(resetPosition, fadeDelay);

  if (position >= 130 * postitionScale) {
    window.history.back();
  }
}

document.addEventListener("wheel", handleWheel);
