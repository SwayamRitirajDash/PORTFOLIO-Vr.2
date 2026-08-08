/* ==========================================
            PORTFOLIO
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
                CURRENT YEAR
    ========================================== */

    const year = document.querySelector(".current-year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    /* ==========================================
                ACTIVE NAV LINK
    ========================================== */

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.forEach(item => item.classList.remove("active"));

            link.classList.add("active");

        });

    });

    /* ==========================================
                BACK TO TOP
    ========================================== */

    const backTop = document.querySelector(".back-top");

    if (backTop) {

        backTop.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ==========================================
                BUTTON RIPPLE
    ========================================== */

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-3px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "";

        });

    });

    /* ==========================================
                CARD HOVER
    ========================================== */

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.transition = ".35s";

        });

    });

});