// ===== PROJECT FILTER TABS =====
// ===== PROJECT FILTER TABS =====
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const allCards = Array.from(document.querySelectorAll('#projects-grid .cardP'));
  const PROJECTS_VISIBLE = 3;
  let currentFilter = 'all';
  let projectsExpanded = false;

  function applyFilterAndCollapse() {
    const filtered = allCards.filter(card =>
      currentFilter === 'all' || card.getAttribute('data-category') === currentFilter
    );

    allCards.forEach(card => card.classList.add('hidden'));

    filtered.forEach((card, i) => {
      if (projectsExpanded || i < PROJECTS_VISIBLE) {
        card.classList.remove('hidden');
      }
    });

    // Show/hide toggle button
    if (filtered.length > PROJECTS_VISIBLE) {
      projectToggleBtn.style.display = 'flex';
      projectToggleBtn.innerHTML = projectsExpanded
        ? `<span>See less</span> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`
        : `<span>See more</span> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
    } else {
      projectToggleBtn.style.display = 'none';
    }
  }

  // Create the toggle button
  const projectToggleBtn = document.createElement('button');
  projectToggleBtn.className = 'experience-toggle-btn';
  projectToggleBtn.style.marginTop = '2rem';
  document.querySelector('#projects .project-tile').appendChild(projectToggleBtn);

  projectToggleBtn.addEventListener('click', function () {
    projectsExpanded = !projectsExpanded;
    applyFilterAndCollapse();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.getAttribute('data-filter');
      projectsExpanded = false;
      applyFilterAndCollapse();
    });
  });

  applyFilterAndCollapse();

  // ===== SCROLL FADE-IN ANIMATION =====
  const fadeSections = document.querySelectorAll('.fade-in-section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  fadeSections.forEach(section => observer.observe(section));
});

function sendMail(){
  let parms = {
    name : document.getElementById("email").value,
    email: document.getElementById("email").value,
    subject: "Portfolio Email",
    message: document.getElementById("textarea").value
  }
  emailjs.send("service_lgl4rfh", "template_ds6r6gp", parms).then(alert("Email has been sent"))

}

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}






function downloadFile() {
         window.open("Resume_Fajardo, Ma. Betina.pdf")
      }

      const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [

  "#fff"
];




// circles.forEach(function (circle, index) {
//   circle.x = 0;
//   circle.y = 0;
//   circle.style.backgroundColor = colors[index % colors.length];
// });

// window.addEventListener("mousemove", function(e){
//   coords.x = e.clientX;
//   coords.y = e.clientY;
  
// });



function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();


// ===== COLLAPSIBLE EXPERIENCE =====
document.addEventListener('DOMContentLoaded', function () {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  const items = Array.from(timeline.querySelectorAll('.timeline-item'));
  const VISIBLE_COUNT = 3; // show first 3 by default

  // Hide items beyond the first
  items.forEach((item, i) => {
    if (i >= VISIBLE_COUNT) {
      item.classList.add('timeline-hidden');
    }
  });

  // Create the toggle button
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'experience-toggle-btn';
  toggleBtn.innerHTML = `<span>See more</span> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  timeline.parentElement.appendChild(toggleBtn);

  let expanded = false;

  toggleBtn.addEventListener('click', function () {
    expanded = !expanded;

    items.forEach((item, i) => {
      if (i >= VISIBLE_COUNT) {
        if (expanded) {
          item.classList.remove('timeline-hidden');
          item.classList.add('timeline-reveal');
        } else {
          item.classList.add('timeline-hidden');
          item.classList.remove('timeline-reveal');
        }
      }
    });

    toggleBtn.innerHTML = expanded
      ? `<span>See less</span> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>`
      : `<span>See more</span> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`;
  });
});


(function () {
  const canvas = document.createElement('canvas');
  canvas.id = 'stars-canvas';
  canvas.style.cssText = `
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
    z-index: 0;
  `;
  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  let stars = [];
  const STAR_COUNT = 180;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

 function createStar() {
  return {
    x: randomBetween(0, canvas.width),
    y: randomBetween(0, canvas.height),
    radius: randomBetween(0.3, 1.4),
    baseAlpha: randomBetween(0.2, 0.8),
    alpha: 0,
    speed: randomBetween(0.00001, 0.005),
    phase: randomBetween(0, Math.PI * 2),
    color: Math.random() > 0.85 ? '#FEE39C' : '#ffffff',
    burstFactor: 1,
    nextBurst: randomBetween(1000, 6000),
    lastBurst: 0,
  };
}

  function initStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push(createStar());
    }
  }

  function draw(timestamp) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(star => {
    // Randomly trigger a burst blink
    if (timestamp - star.lastBurst > star.nextBurst) {
      star.burstFactor = randomBetween(4, 10);
      star.lastBurst = timestamp;
      star.nextBurst = randomBetween(1000, 8000);

      // Snap back to idle after a short burst
      setTimeout(() => {
        star.burstFactor = 1;
      }, randomBetween(80, 300));
    }

    star.alpha = star.baseAlpha * (0.3 + 0.7 * Math.abs(Math.sin(timestamp * star.speed * star.burstFactor + star.phase)));

    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = star.color;
    ctx.globalAlpha = star.alpha;
    ctx.fill();
  });

  ctx.globalAlpha = 1;
  requestAnimationFrame(draw);
}

  window.addEventListener('resize', () => {
    resize();
    initStars();
  });

  resize();
  initStars();
  requestAnimationFrame(draw);
})();
