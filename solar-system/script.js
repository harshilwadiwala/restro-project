const imageElement = document.getElementById('image');
const image1 = 'meteors-1.jpg'; // URL of the first image
const image2 = 'meteors-2.jpg'; // URL of the second image

let currentImage = image1;

function flipImage() {
  if (currentImage === image1) {
    imageElement.style.transform = 'rotateY(180deg)';
    currentImage = image2;
  } else {
    imageElement.style.transform = 'rotateY(0deg)';
    currentImage = image1;
  }

  imageElement.src = currentImage;
}

// Flip the image every 3 seconds (3000 milliseconds)
setInterval(flipImage, 3000);


const imageElement2 = document.getElementById('jupiter-moon-img');
const image3 = 'https://scx2.b-cdn.net/gfx/news/2015/themoonsofju.jpg'; // URL of the first image
const image4 = 'jupiter-moon.jpg'; // URL of the second image

let currentImage2 = image3;

function flipImage2() {
  if (currentImage2 === image3) {
    imageElement2.style.transform = 'rotateY(180deg)';
    currentImage2 = image4;
  } else {
    imageElement2.style.transform = 'rotateY(0deg)';
    currentImage2 = image3;
  }

  imageElement2.src = currentImage2;
}

// Flip the image every 3 seconds (3000 milliseconds)
setInterval(flipImage2, 3000);
