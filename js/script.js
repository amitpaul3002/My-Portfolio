// Typed.js initialization (typing animation)
var typed = new Typed(".typing", {
    strings: ["Web Developer", "Python Programmer", "Machine Learning Engineer", "Full Stack Developer","Data Analyst"],
    typeSpeed: 100,
    backSpeed: 10,   // corrected property name
    loop: true
});

// Email sending function using EmailJS
function sendMail() {
    // Collect input values
    let parms = {
        name: document.getElementById("name")?.value || "",
        email: document.getElementById("email")?.value || "",
        subject: document.getElementById("subject")?.value || "",
        message: document.getElementById("message")?.value || "",
    };

    // Simple validation
    if (!parms.name || !parms.email || !parms.subject || !parms.message) {
        alert("Please fill in all fields before sending.");
        return;
    }

    // Send email via EmailJS
    emailjs.send("service_j6h1rxj", "template_m4deaw3", parms)
        .then(() => {
            alert("Email sent successfully!");
        })
        .catch((err) => {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS error:", err);
        });
}
// sidebar toggle
document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".aside");
    const mainContent = document.querySelector(".main-content");
    const toggleBtn = document.getElementById("sidebar-toggle");

    toggleBtn.addEventListener("click", function () {
        sidebar.classList.toggle("closed");
        mainContent.classList.toggle("expanded");
    });
});


// Smooth scroll navigation + slide-in animation
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").replace("#", "");
            const targetSection = document.getElementById(targetId);

            // If section not found, skip
            if (!targetSection) return;

            // Smooth scroll to section
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });

            // Trigger slide animation by adding class
            targetSection.classList.add("slide-in");

            // Remove class after animation so it can trigger again
            setTimeout(() => {
                targetSection.classList.remove("slide-in");
            }, 800); // match CSS animation duration
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav a, .main-header nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").replace("#", "");
            const targetSection = document.getElementById(targetId);

            if (!targetSection) return;
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
});

// flip skill card
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});
