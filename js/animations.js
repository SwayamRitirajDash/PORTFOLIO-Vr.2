/* ==========================================
            PORTFOLIO ANIMATIONS
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
                SCROLL REVEAL
    ========================================== */

    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {
            threshold: 0.15
        }

    );

    cards.forEach((card) => {

        observer.observe(card);

    });

    /* ==========================================
                HERO PARALLAX
    ========================================== */

    const hero = document.querySelector(".hero");

    const heroLogo = document.querySelector(".hero-logo");

    const heroGlow = document.querySelector(".hero-glow");

    if (hero && heroLogo && heroGlow) {

        hero.addEventListener("mousemove", (e) => {

            const rect = hero.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const moveX = (x - rect.width / 2) / 30;

            const moveY = (y - rect.height / 2) / 30;

            heroLogo.style.transform =
                `translate(${moveX}px, ${moveY}px)`;

            heroGlow.style.transform =
                `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;

        });

        hero.addEventListener("mouseleave", () => {

            heroLogo.style.transform = "";

            heroGlow.style.transform = "translate(-50%,-50%)";

        });

    }

    /* ==========================================
                CARD TILT
    ========================================== */

    cards.forEach((card) => {

        card.addEventListener("mousemove", (e) => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;

            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -6;

            const rotateY = ((x / rect.width) - 0.5) * 6;

            card.style.transform =

                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform = "";

        });

    });

});
