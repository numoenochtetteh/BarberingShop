// 1. Navbar Highlight on Scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav a");

  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 60;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// 2. Smooth Scroll to Sections
document.querySelectorAll('.nav a').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// 3. Gallery Image Lightbox
document.querySelectorAll('.gallery-grid img').forEach(img => {
  img.addEventListener("click", () => {
    const overlay = document.createElement("div");
    overlay.classList.add("lightbox");
    overlay.innerHTML = `<img src="${img.src}" alt="" /><span class="close">&times;</span>`;
    document.body.appendChild(overlay);

    overlay.querySelector(".close").addEventListener("click", () => {
      overlay.remove();
    });
  });
});

// 4. Form Validation
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields.");
      e.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address.");
      e.preventDefault();
    }
  });
}


