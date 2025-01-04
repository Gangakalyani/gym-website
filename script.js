// Smooth Scroll for the Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Contact Form Submission 
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    alert(`Message Sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
    document.getElementById('contact-form').reset();
});
