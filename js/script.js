document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");

    // List of image filenames in the assets/landscapes folder
    const images = [
        "tiled_background.png",
        "tiled_background0.png",
        "tiled_background1.png",
        "tiled_background2.png",
        "tiled_background3.png",
        "tiled_background4.png",
        "tiled_background5.png",
        "tiled_background6.png",
        "tiled_background7.png",
        "tiled_background8.png",
        "tiled_background9.png"
    ];

    // Randomly select an image from the list
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    // Set the selected image as the background for the hero section
    hero.style.background = `url('../assets/landscapes/${selectedImage}') no-repeat center center/cover`;
});

function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
}
