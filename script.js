
// Function to detect when a section is in the viewport
function checkVisibility() {
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If the section is within the viewport
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            section.classList.add('visible');
        } else {
            // Remove the 'visible' class when the section is not in view
            section.classList.remove('visible');
        }
    });
}

// Trigger check on scroll
window.addEventListener('scroll', checkVisibility);

// Initial check in case sections are already visible
window.addEventListener('load', checkVisibility);
// Get the modal
var modal = document.getElementById("imageModal");

// Get all gallery images
var galleryImages = document.querySelectorAll(".gallery-item img");

// Get the modal image and caption
var modalImage = document.getElementById("modalImage");
var caption = document.getElementById("caption");

// Loop through the gallery images and add click event
galleryImages.forEach(function (image) {
    image.addEventListener("click", function () {
        modal.style.display = "flex";  // Display the modal
        modalImage.src = image.src;   // Set the clicked image as the modal content
        caption.innerHTML = image.alt; // Set the image alt as caption (optional)
    });
});

// Get the close button
var closeButton = document.querySelector(".close");

// When the user clicks on the close button, close the modal
closeButton.addEventListener("click", function () {
    modal.style.display = "none"; // Hide the modal
});

// When the user clicks anywhere outside the modal, close it
window.addEventListener("click", function (event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Hide the modal if clicked outside
    }
});


const members = [
    { name: "Nguyen Minh Tuan", img: "images/mtuan.jpeg", link: "mtuan.html", role: "Developer" },
    { name: "Nguyen Thanh Long", img: "images/long.jpg", link: "long.html", role: "Developer" },
    { name: "Phung Khoi", img: "images/bubi.jpg", link: "bubi.html", role: "Developer" },
    { name: "Nguyen Anh", img: "images/nabel.jpeg", link: "nabel.html", role: "Developer" },
    { name: "Le Vo Phuong Dung", img: "images/dung.jpg", link: "dung.html", role: "Developer" },
];


document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("student-card-id");

    members.forEach(member => {
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("member");
        memberDiv.innerHTML = `
            <div class="student-card">
                <a href="${member.link}">
                    <img src="${member.img}" alt="${member.name}">
                </a>
                <h3>${member.name}</h3>
                <p>${member.role}</p>
            </div>
        `;
        gallery.appendChild(memberDiv);
    });
});