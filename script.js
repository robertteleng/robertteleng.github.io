// Sticky Navigation
const nav = document.querySelector("nav");
const scrollBtn = document.querySelector(".scroll-button a");

window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "flex";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Mobile Menu
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navLinks = document.querySelectorAll(".menu li a");

menuBtn.onclick = function() {
  navBar.classList.add("active");
};

cancelBtn.onclick = function() {
  navBar.classList.remove("active");
};

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll Animations with Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.fade-in, .slide-left, .slide-right, .scale-in').forEach(el => {
  observer.observe(el);
});

// Parallax effect on hero background
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg && scrolled < window.innerHeight) {
    heroBg.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
  const scrollY = window.pageYOffset;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.menu a[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add('active');
    } else {
      navLink?.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', highlightNavLink);
