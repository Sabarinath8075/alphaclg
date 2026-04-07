const btn = document.getElementById("scrollTopBtn");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  let currentScrollY = window.scrollY;

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

});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
