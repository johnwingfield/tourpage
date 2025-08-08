const container = document.getElementById('destinations');
let scrollInterval;

function startScroll(direction) {
  stopScroll();
  scrollInterval = setInterval(() => {
    container.scrollBy({ left: direction === 'left' ? -5 : 5, behavior: 'smooth' });
  }, 16);
}

function stopScroll() {
  if (scrollInterval) {
    clearInterval(scrollInterval);
    scrollInterval = null;
  }
}

document.addEventListener('mousemove', (e) => {
  const edge = 80; // px from either side
  if (e.clientX < edge) {
    startScroll('left');
  } else if (window.innerWidth - e.clientX < edge) {
    startScroll('right');
  } else {
    stopScroll();
  }
});

document.addEventListener('mouseleave', stopScroll);
