const hamburger = document.querySelector(".nav_hamburger");
const linksContainer = document.querySelector(".nav_menu");
const links = document.querySelectorAll(".nav_menu_link a");

// Toggle hamburger menu
hamburger.addEventListener("click", () => {
  linksContainer.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.nav_hamburger');
  const navMenu = document.querySelector('.nav_menu');

  hamburger.addEventListener('click', (e) => {
    e.preventDefault(); // prevent the default anchor behavior
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});


// Close menu when a nav link is clicked (on small screens)
links.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 550) {
      linksContainer.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// Smooth scroll to section when nav link is clicked
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});

document.querySelectorAll('a[href="#projects-section"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = document.getElementById('projects');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

document.querySelectorAll('a[href="#home"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

