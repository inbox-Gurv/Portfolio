function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("successMsg").innerText =
        "Thank you! Your message has been sent successfully.";
    this.reset();
});






const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


/* Smooth Scroll */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("successMsg").innerText =
        "Thank you! Your message has been sent successfully.";
    this.reset();
});

/* SCROLL ANIMATION */
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



/* SKILL BAR ANIMATION */
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






document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const successMsg = document.getElementById("successMsg");
    successMsg.textContent = "✅ Message sent successfully!";
    successMsg.style.display = "block";

    this.reset();

    setTimeout(() => {
        successMsg.style.display = "none";
    }, 4000);
});




