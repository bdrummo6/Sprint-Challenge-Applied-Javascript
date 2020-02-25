// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Retrieve reference for .cards-container element
const cardsContainer = document.querySelector('.cards-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
   .then((response) => {
      // console.log(response.data.articles);
      const articles = response.data.articles; // Creates a constant to hold all of the article data
      /* Iterates through all of the values of the articles data and then iterates through each topic
         and creates and card for each article within a topic */
      Object.values(articles).forEach(topic => {
         topic.forEach(article => {
            const newArticle = createCard(article);
            cardsContainer.append(newArticle);
         })
      })
   })
   .catch((err) => {
     console.log(`Error: ${err}`);
   });

// Function to create a card element
function createCard(article) {
   // Creates a div that will represent the card component
   const card = document.createElement('div');
   card.classList.add('card');

   // Creates a div element that will hold the headline of an article
   const headline = document.createElement('div');
   headline.classList.add('headline');
   headline.textContent = article.headline;

   // Creates a div element which will be the container for the authors image and byline
   const authorContainer = document.createElement('div');
   authorContainer.classList.add('author');

   // Creates a div element that will contain the author's image
   const imgContainer = document.createElement('div');
   imgContainer.classList.add('img-container');

   // Creates an img element for the author's image
   const authorImg = document.createElement('img');
   authorImg.src = article.authorPhoto;

   // Creates a span element for holding the byline of the article
   const byLine = document.createElement('span');
   byLine.textContent = `By ${article.authorName}`;

   // Appends the headline and authorContainer divs to card
   card.appendChild(headline);
   card.appendChild(authorContainer);

   // Appends the imgContainer div to authorContainer
   authorContainer.appendChild(imgContainer);

   // Appends the authorImg element to the imgContainer
   imgContainer.appendChild(authorImg);

   // Appends the byLine element to authorContainer
   authorContainer.appendChild(byLine);

   return card; // returns the card component

}