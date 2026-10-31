// ==================================
// DREAM WEDDING PLANNER - JAVASCRIPT
// ==================================

// 1. Welcome Message
window.addEventListener("load", function () {
    alert("Welcome to Dream Wedding Planner! 💍");
});


// 2. Smooth Navigation
document.querySelectorAll('nav a').forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + link.textContent);
    });
});


// 3. Booking Form Validation
const bookingForm = document.querySelector("form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = bookingForm.querySelector('input[type="text"]');
        const email = bookingForm.querySelector('input[type="email"]');
        const phone = bookingForm.querySelector('input[type="tel"]');

        if (!name.value.trim() || !email.value.trim() || !phone.value.trim()) {
            alert("Please fill in all required details.");
            return;
        }

        if (!email.checkValidity()) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!/^[0-9]{10}$/.test(phone.value.trim())) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        alert("Thank you, " + name.value + "! Your booking details have been submitted successfully. 💐");

        bookingForm.reset();
    });
}


// 4. Current Year in Footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 5. Gallery Image Click
document.querySelectorAll(".gallery img").forEach(function (image) {
    image.style.cursor = "pointer";

    image.addEventListener("click", function () {
        alert("Beautiful Wedding Memory: " + image.alt + " ❤️");
    });
});


// 6. Back to Top Button
const topButton = document.getElementById("backToTop");

if (topButton) {
    topButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

console.log("Dream Wedding Planner website loaded successfully!");