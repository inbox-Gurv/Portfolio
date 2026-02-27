// helper for smooth scrolling
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
    }
}

/* --------------------
   Theme management
-------------------- */
const themeToggle = document.getElementById('theme-toggle');

function updateThemeIcon() {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (!icon) return;
    const current = document.documentElement.getAttribute('data-theme');
    if (current === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeIcon();
}

function toggleThemeMode() {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'light' : 'dark');
}

function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
        setTheme(saved);
    } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
    // listen for system changes if user has not explicitly chosen
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// attach toggle handler after DOM elements exist
if (themeToggle) {
    themeToggle.addEventListener('click', toggleThemeMode);
}

// initialize theme as early as possible
initTheme();

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
    const form = e.target;
    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    // send data to backend which can forward it as an SMS
    fetch('/api/send-sms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).catch(err => console.error('SMS send error', err));

    const successMsg = document.getElementById("successMsg");
    if (successMsg) {
        successMsg.textContent = "✅ Message sent successfully!";
        successMsg.style.display = "block";
        setTimeout(() => {
            successMsg.style.display = "none";
        }, 4000);
    }
    form.reset();
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
