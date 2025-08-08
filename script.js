const row = document.getElementById('destinationsRow');
let scrollSpeed = 0;

function step() {
  if (scrollSpeed !== 0) {
    row.scrollLeft += scrollSpeed;
  }
  requestAnimationFrame(step);
}

requestAnimationFrame(step);

window.addEventListener('mousemove', (e) => {
  const threshold = 80;
  if (e.clientX < threshold) {
    scrollSpeed = -5;
  } else if (e.clientX > window.innerWidth - threshold) {
    scrollSpeed = 5;
  } else {
    scrollSpeed = 0;
  }
});

window.addEventListener('mouseleave', () => {
  scrollSpeed = 0;
});
