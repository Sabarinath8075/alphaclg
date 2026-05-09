const btn = document.getElementById("scrollTopBtn");
const headerTitle = document.querySelector(".header-title");
const mainTitle = document.querySelector(".al h1");
const header = document.querySelector(".header");

let lastScrollY = window.scrollY;
let ticking = false;

// Use IntersectionObserver for the header title - much more efficient than scroll listener
if (mainTitle && headerTitle) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        headerTitle.classList.add("show");
      } else {
        headerTitle.classList.remove("show");
      }
    });
  }, { threshold: 0 });
  
  observer.observe(mainTitle);
}

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      let currentScrollY = window.scrollY;

      // Blur animation logic
      if (currentScrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }

      if (currentScrollY > lastScrollY) {
        // Scrolling DOWN → show
        btn.classList.add("show");
        btn.classList.remove("hide");
      } else {
        // Scrolling UP → hide
        btn.classList.add("hide");
        btn.classList.remove("show");
      }

      // Optional: hide at very top
      if (currentScrollY < 100) {
        btn.classList.remove("show");
      }

      lastScrollY = currentScrollY;
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const menuButton = document.querySelector(".menu-button");
const navbar = document.querySelector(".navbar");

// Toggle menu
menuButton.addEventListener("click", (e) => {
  e.stopPropagation();
  navbar.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove("active");
  });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
  if (navbar.classList.contains("active") && 
      !navbar.contains(e.target) && 
      !menuButton.contains(e.target)) {
    navbar.classList.remove("active");
  }
});
