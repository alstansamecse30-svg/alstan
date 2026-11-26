const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-link, .nav-cta");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
  navLinks.classList.toggle("is-open", !isExpanded);
});

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.classList.remove("error");

  if (!contactForm.reportValidity()) {
    formStatus.textContent = "Please enter a valid email address and complete each field.";
    formStatus.classList.add("error");
    return;
  }

  formStatus.textContent = "Your details look good. This portfolio demo does not send messages yet.";
});

document.querySelector("#year").textContent = new Date().getFullYear();
