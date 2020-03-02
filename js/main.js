let slider = document.getElementById('carouselslider');
let left = document.getElementById('leftbtn');
let right = document.getElementById('rightbtn');
let img1 = document.getElementById('sliderph1');
let img2 = document.getElementById('sliderph2');
let img3 = document.getElementById('sliderph3');
let img4 = document.getElementById('sliderph4');
let img5 = document.getElementById('sliderph5');
let img6 = document.getElementById('sliderph6');
let img7 = document.getElementById('sliderph7');
let img8 = document.getElementById('sliderph8');
let currentIndex = 0;


let sliderData= [img1, img2 , img3, img4, img5, img6, img7, img8]



right.addEventListener('click', function () {
    if (currentIndex < sliderData.length - 1) {
        currentIndex++;
        setSlider(currentIndex);
    }
});
left.addEventListener('click', () => {
    if (currentIndex >= 0) {
        currentIndex--;
        setSlider(currentIndex)
    }
})


