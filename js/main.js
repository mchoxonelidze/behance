
let sliderData = [
    {
        url: "#" , 
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/52e17986938925.5da9d22eebd3f.jpg",
        title:"title 1"
    },
    {
        url: "#", 
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/97359770468211.Y3JvcCwxMDIxLDc5OSw0ODMsMjY1.jpg" ,
        title:"title 2"
    },
    {
        url: "#" , 
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/04a22b81854437.Y3JvcCwxMDA4LDc4OCw3LDQ.jpg",
        title:"title 3"
    },
    {
        url: "#" , 
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/2fbac448720579.Y3JvcCwyNTYzLDIwMDYsMjI3LDA.jpg",
        title:"title 4"
    },
    {
        url: "#", 
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/0e74f286837485.Y3JvcCwxMzUwLDEwNTUsMCwxNDc.jpg",
        title:"title 5"
    },
    {
        url: "#" , 
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/1dd08e86252441.Y3JvcCw5ODEsNzY4LDIxLDA.jpeg",
        title:"title 6"
    },
    {
        url:"#", 
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/0cd47666479617.Y3JvcCwxNDAzLDEwOTgsMCwxNTI.jpg",
        title:"title 7"
    },
    {
        url: "#" , 
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/9f74a185973683.Y3JvcCwxMzgwLDEwODAsNDMwLDA.jpg",
        title:"title 8"
    },
    {
        url: "#", 
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/9c527e82098643.Y3JvcCwxNjE2LDEyNjQsMCww.png",
        title:"title 9"
    },
    {
        url: "#" , 
        img:"https://mir-s3-cdn-cf.behance.net/projects/404/02b6fa63241025.Y3JvcCw0MDI1LDMxNTEsMCwxNDQx.jpg" ,
        title:"title 10"
    },
    {
        url: "#" , 
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/9c7c2084952881.Y3JvcCw5NDAsNzM2LDQsMA.jpg" ,
        title:"title 11"
    },
    {
        url: "#",
        img: "https://mir-s3-cdn-cf.behance.net/projects/404/b815c983298505.Y3JvcCwxMDI5LDgwNSw0NTAsMA.png",
        title:"title 12"
    }
]

let slider = document.getElementById('slider');
let left = document.getElementById('left');
let right = document.getElementById('right');
let currentIndex = 0;

function createImgElement(url) {
    let element = document.createElement('img');
    element.src = url;
    return element;
}
function createAElement(url){
    let element = document.createElement("a");
    element.href = url;
    return element;
}

function setSlider(index){
    let currentSlide = sliderData[index];
    let element = createAElement(currentSlide.url)
    element.appendChild(createImgElement(currentSlide.img))
    slider.innerHTML = " ";
    slider.appendChild(element) 
}

setSlider(currentIndex);

right.addEventListener('click', function() {
    if(currentIndex < sliderData.length -1){
        currentIndex++;
        setSlider(currentIndex);
    }
});
left.addEventListener('click',  () => {
    if(currentIndex >= 0){
        currentIndex--;
        setSlider(currentIndex)
    }
})

