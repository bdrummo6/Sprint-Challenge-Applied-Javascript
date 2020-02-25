// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

// Retrieves reference to the .header-container element
const headerContainer = document.querySelector('.header-container');

function Header() {
   // Creates header which will be the container for all other elements and the component returned by the function
   const header = document.createElement('div');
   header.classList.add('header');

   // Creates a span element, which will hold the date provided
   const date = document.createElement('span');
   date.classList.add('date');
   date.textContent = 'MARCH 28, 2019';

   // Creates an h1 element, which will contain the name of the paper
   const paperName = document.createElement('h1');
   paperName.textContent = 'Lambda Times';

   // Creates a span element, which will contain the temperature provided
   const temperature = document.createElement('span');
   temperature.classList.add('temp');
   temperature.textContent = '98°';

   // Append all child elements to the header 'div'
   header.appendChild(date);
   header.appendChild(paperName);
   header.appendChild(temperature);

   return header; // returns a header component

}

// Append the header component to the .header-container element
headerContainer.appendChild(Header());