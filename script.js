// Mobile Navigation Toggle
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Animate hamburger
  const spans = mobileToggle.querySelectorAll("span");
  if (navMenu.classList.contains("active")) {
    spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
    spans[1].style.opacity = "0";
    spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
  } else {
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const spans = mobileToggle.querySelectorAll("span");
    spans[0].style.transform = "none";
    spans[1].style.opacity = "1";
    spans[2].style.transform = "none";
  });
});

// Navbar scroll effect
let lastScrollTop = 0;
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.08)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }

  lastScrollTop = scrollTop;
});

// Button hover effects
document.querySelectorAll(".hero-button, .cta-button").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Portfolio

function filterPortfolio(category) {
  const buttons = document.querySelectorAll(".portfolio-tab-btn");
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  const cards = document.querySelectorAll(".portfolio-card-box");
  cards.forEach((card) => {
    const cardCategory = card.getAttribute("data-category");
    if (category === "all" || cardCategory === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Our work

const slides = [
  {
    img: "/images/mobile-dev.jpg",
    title: "Monitoring & Optimization",
    desc: "Continuous Monitoring And Regular Optimizations To Keep Your Campaigns Effective And Aligned With Your Goals.",
    points: [
      "In-Depth Research",
      "Implementation with Precision",
      "Transparent Reporting",
    ],
    step: "2",
  },
  {
    img: "/images/ppc3.jpg",
    title: "Campaign Analysis",
    desc: "We review insights & metrics to refine strategies for better ROI and long-term success.",
    points: ["Insight Reports", "Audience Metrics", "Actionable Feedback"],
    step: "3",
  },
];

let current = 0;
const slide = document.getElementById("slide");

function updateSlide(index) {
  const s = slides[index];
  slide.style.opacity = 0;
  setTimeout(() => {
    slide.innerHTML = `
          <div class="slide-image">
            <img src="${s.img}" alt="slide" />
          </div>
          <div class="slide-content">

            <h2>${s.title}</h2>
            <p>${s.desc}</p>
            <ul>
              ${s.points.map((p) => `<li>${p}</li>`).join("")}
            </ul>
          </div>
        `;
    slide.style.opacity = 1;
  }, 300);
}

function nextSlide() {
  current = (current + 1) % slides.length;
  updateSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  updateSlide(current);
}

// INDUSTRIES WE SERVE

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Initialize cards with animation
document.querySelectorAll('[data-card="service"]').forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = `opacity 0.6s ease ${
    index * 0.1
  }s, transform 0.6s ease ${index * 0.1}s`;
  observer.observe(card);
});

// Add hover effects for better interactivity
document.querySelectorAll('[data-card="service"]').forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.background = "rgba(255, 255, 255, 1)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "rgba(255, 255, 255, 0.95)";
  });
});

// testimonial.html

// Add smooth scrolling for navigation links with unique selector
document.querySelectorAll('a[href^="#svt-"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add loading animation for testimonial cards with unique observer
const svtObserverOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const svtIntersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, svtObserverOptions);

// Initialize cards with fade-in effect using unique class selector
document
  .querySelectorAll(".svt-review-item")
  .forEach((reviewCard, cardIndex) => {
    reviewCard.style.opacity = "0";
    reviewCard.style.transform = "translateY(30px)";
    reviewCard.style.transition = `opacity 0.6s ease ${
      cardIndex * 0.1
    }s, transform 0.6s ease ${cardIndex * 0.1}s`;
    svtIntersectionObserver.observe(reviewCard);
  });
