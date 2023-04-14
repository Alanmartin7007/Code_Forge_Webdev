// Declare an array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Declare an object with alternative text for each image
const imageAltText = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'A yellow flower',
  'pic3.jpg': 'A red sports car',
  'pic4.jpg': 'A small, fluffy dog',
  'pic5.jpg': 'A mountain landscape'
};

// Loop through the array of filenames and insert <img> elements into thumb-bar
const thumbBar = document.querySelector('.thumb-bar');

for (let i = 0; i < imageFilenames.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageFilenames[i]);
  newImage.setAttribute('alt', imageAltText[imageFilenames[i]]);
  thumbBar.appendChild(newImage);

  // Add click event listener to each thumbnail image
  newImage.addEventListener('click', function() {
    const displayedImage = document.querySelector('.displayed-img');
    displayedImage.setAttribute('src', 'images/' + imageFilenames[i]);
    displayedImage.setAttribute('alt', imageAltText[imageFilenames[i]]);
  });
}

// Add click event listener to darken/lighten button
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

btn.addEventListener('click', function() {
  const currentClass = btn.getAttribute('class');
  if (currentClass === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
