// ==========================================
// ONLINE QUIZ SYSTEM - MAIN JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("QUIZCORE Online Quiz System Loaded");


    // ==========================================
    // NAVIGATION SMOOTH SCROLL
    // ==========================================

    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // ==========================================
    // LIVE SYSTEM STATUS
    // ==========================================

    const statusText = document.querySelector(".footer-status span");

    if (statusText) {
        statusText.textContent = "ONLINE";
    }


    // ==========================================
    // START QUIZ BUTTON
    // ==========================================

    const startQuizButton = document.querySelector(
        'a[href="register.html"]'
    );

    if (startQuizButton) {

        startQuizButton.addEventListener("click", function () {

            console.log("Student selected START QUIZ");

        });

    }


    // ==========================================
    // STUDENT LOGIN BUTTON
    // ==========================================

    const loginButton = document.querySelector(
        'a[href="login.html"]'
    );

    if (loginButton) {

        loginButton.addEventListener("click", function () {

            console.log("Student selected LOGIN");

        });

    }


    // ==========================================
    // CARD HOVER EFFECT
    // ==========================================

    const cards = document.querySelectorAll(
        ".feature, .info-card, .hero-card, .process-item"
    );

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {
            this.style.transition = "0.3s ease";
        });

    });


    // ==========================================
    // CURRENT YEAR
    // ==========================================

    const footerText = document.querySelector("footer p");

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.textContent =
            "Online Quiz System © " + currentYear;

    }

});