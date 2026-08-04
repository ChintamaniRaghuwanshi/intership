console.log("Portfolio Loaded Successfully");
const yearElement = document.querySelector(".copyright");
if (yearElement) {
  const year = new Date().getFullYear();
  yearElement.innerHTML =
    `&copy; ${year} Chintamani Raghuwanshi. All Rights Reserved.`;
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning 👋";
  if (hour < 17) return "Good Afternoon 👋";
  return "Good Evening 👋";
}

const greeting = document.querySelector(".hero-greeting");
if (greeting) {
  greeting.textContent = getGreeting();
}

const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  const savedTheme =
    localStorage.getItem("theme") || "light";
  document.body.dataset.theme = savedTheme;
  updateThemeIcon(savedTheme);
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.body.dataset.theme === "light"
        ? "dark"
        : "light";
    document.body.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    updateThemeIcon(nextTheme);
  });
}

function updateThemeIcon(theme) {
  themeToggle.textContent =
    theme === "dark" ? "☀️" : "🌙";
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    menuToggle.setAttribute(
      "aria-expanded",
      navLinks.classList.contains("open")
    );
  });
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    });
  });
}

const header = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const sections =
  document.querySelectorAll("section[id]");
const navItems =
  document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });
  navItems.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target =
      document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name =
      document.getElementById("name");
    const email =
      document.getElementById("email");
    const message =
      document.getElementById("message");
    if (
      name.value.trim() === "" ||
      email.value.trim() === "" ||
      message.value.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (!email.value.includes("@")) {
      alert("Please enter a valid email.");
      return;
    }
    const button =
      form.querySelector(".submit-btn");
    button.textContent = "Sending...";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = "✅ Message Sent";
      form.reset();
      setTimeout(() => {
        button.textContent = "Send Message";
        button.disabled = false;
      }, 3000);
    }, 1500);
  });
}

const scrollBtn =
  document.querySelector(".scroll-top");
if (scrollBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
  });
});

const skillBars =
  document.querySelectorAll(".progress");
const observer =
  new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
      }
    });
  });
skillBars.forEach(bar => {
  observer.observe(bar);
});
console.log("All Features Loaded Successfully");