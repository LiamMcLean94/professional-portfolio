document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("contactStatus");

    form.addEventListener("submit", function (event) {
        // Validate first
        const firstName = document.getElementById("first").value.trim();
        const lastName = document.getElementById("last").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("msg").value.trim();

        if (!firstName || !lastName || !email || !message) {
            event.preventDefault();
            status.textContent = "Please fill out all fields before submitting.";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            event.preventDefault();
            status.textContent = "Please enter a valid email address.";
            return;
        }

        // Optional: show a quick inline note (the actual send happens via Formspree)
        status.textContent = `Thanks, ${firstName}! Sending…`;
        // no preventDefault here ? browser posts form-encoded data to Formspree
    });
});