let slider = document.querySelector('.slider');
let sliderImages = document.querySelectorAll('.slider img');
let index = 0;

function moveSlider() {
    if (index === sliderImages.length - 1) {
        index = 0;
    } else {
        index++;
    }
    slider.style.transform = `translateX(-${index * 120}px)`; // Adjust 120px to your image width + margin
}

// Change slide every 3 seconds
setInterval(moveSlider, 3000);

