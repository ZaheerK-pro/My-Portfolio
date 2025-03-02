let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

// Cursor effect
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links => {

    links.onmouseenter = () => {
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () => {
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});


document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            showToast("Message sent successfully!", "success");
            this.reset();
        } else {
            const error = await response.text();
            console.error('Failed to submit form. Status:', response.status, 'Error:', error);
            showToast("Failed to send message. Please try again.", "error");
        }
    } catch (error) {
        console.error('Error:', error);
        showToast("An error occurred. Please try again.", "error");
    }
});

function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = type === "success" ? "toast success" : "toast error"; // Dynamic class
    toast.style.display = "block";

    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}


function animateCounter(elementId, finalValue, speed = 500) {
    let count = 0;
    const element = document.getElementById(elementId);

    const interval = setInterval(() => {
        if (count < finalValue) {
            count++;
            element.textContent = count;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// Age Counter
const birthYear = 2001;
const currentYear = new Date().getFullYear();
const age = currentYear - birthYear;
animateCounter("age", age, 100);

// Experience Counter
const startExperienceYear = 2024;
const experienceYears = currentYear - startExperienceYear;
animateCounter("experience", experienceYears, 200);

// Dynamic Footer Years
document.getElementById("startYear").textContent = currentYear;
document.getElementById("currentYear").textContent = currentYear + 1;