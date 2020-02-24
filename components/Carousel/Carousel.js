/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
// Array of image sources
const carouselImages = ['assets/carousel/mountains.jpeg', 'assets/carousel/computer.jpeg', 'assets/carousel/trees.jpeg',
                        'assets/carousel/turntable.jpeg'];

// Retrieve reference to .carousel-container element
const carouselContainer = document.querySelector('.carousel-container');

// Function to create a carousel component which takes an array of img sources as its argument
function createCarousel(arrImg) {
   // Creates div that is the carousel component
   const carousel = document.createElement('div');
   carousel.classList.add('carousel');

   // Creates the div for the left button
   const leftBtn = document.createElement('div');
   leftBtn.classList.add('left-button');
   leftBtn.textContent = ' < ';

   // Creates an container for the image that will be viewable in the carousel
   const imgViewable = document.createElement('img');
   imgViewable.classList.add('img-viewable');
   imgViewable.src = arrImg[0]; // Sets the inital viewable image as the first in the array
   carousel.appendChild(imgViewable); // Appends imgViewable to the carousel

   // Styles imgViewable so it appears between th left and right buttons
   imgViewable.style.display = 'block';
   imgViewable.style.width = '80%';

   let index = 0; // variable that represents the current position  in the image array

   // Creates an event listener for when the left button is clicked
   leftBtn.addEventListener('click', () => {
      index--; // Decrements the array index by 1
      if(index < 0) { // If the decrement leads index to being less than zero
         index = arrImg.length-1; // then the index is set to the value of the last element in the array
      }
      imgViewable.src = arrImg[index];
   });

   // Creates the div for the right button
   const rightBtn = document.createElement('div');
   rightBtn.classList.add('right-button');
   rightBtn.textContent = ' > ';

   // Creates an event listener for when the left button is clicked
   rightBtn.addEventListener('click', () => {
      index++; // Increments index by 1
      if(index >= arrImg.length) { // If index is greater than or equal to the arrays length
         index = 0; // The  index is set to the first element in the array
      }
      imgViewable.src = arrImg[index];
   });

   // Adds the left and right button divs to the carousel
   carousel.appendChild(leftBtn);
   carousel.appendChild(rightBtn);

   return carousel; // returns carousel component
}
// Creates a carousel using the array carousel images as the argument
const newCarousel = createCarousel(carouselImages);

// Appends the newCarousel to the carouselContainer element
carouselContainer.appendChild(newCarousel);