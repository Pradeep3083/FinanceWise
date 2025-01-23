document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navLinkItems = document.querySelectorAll(".nav-links li a");

    // Toggle menu visibility on hamburger click
    menuToggle.addEventListener("click", (e) => {
        navLinks.classList.toggle("active");
        e.stopPropagation(); // Prevent event from bubbling to the document
    });

    // Close the menu when clicking outside of it
    document.addEventListener("click", (e) => {
        if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
            navLinks.classList.remove("active");
        }
    });

    // Close the menu when clicking on a navigation link
    navLinkItems.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    // Form submission handling
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log("Form submitted");
            alert("Thank you for your message! We will get back to you soon.");
            contactForm.reset();
        });
    }

    // Add animation to calculator cards on scroll
    const calculatorCards = document.querySelectorAll(".card");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    calculatorCards.forEach((card) => {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(card);
    });
});
