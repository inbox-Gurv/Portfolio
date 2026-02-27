// helper for smooth scrolling
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

// mobile nav toggle
const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// contact form handler (same on all pages)
function handleContactSubmit(e) {
    e.preventDefault();
    const successMsg = document.getElementById("successMsg");
    if (successMsg) {
        successMsg.textContent = "✅ Message sent successfully!";
        successMsg.style.display = "block";
        setTimeout(() => {
            successMsg.style.display = "none";
        }, 4000);
    }
    e.target.reset();
}

const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", handleContactSubmit);
}

// scroll animations
const animatedElements = document.querySelectorAll(".section, .project-card, .skill");
animatedElements.forEach(el => el.classList.add("fade-in"));

window.addEventListener("scroll", () => {
    animatedElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (elementTop < screenHeight - 100) {
            el.classList.add("show");
        }
    });
});

// skill bars animation
const skillBars = document.querySelectorAll(".progress-fill");

function animateSkills() {
    skillBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (barTop < screenHeight - 100) {
            bar.style.width = bar.getAttribute("data-width");
        }
    });
}
window.addEventListener("scroll", animateSkills);

// highlight active navigation link based on filename
(function highlightActiveLink() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
})();
