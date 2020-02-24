// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// Retrieve reference to the .topics element
const topicsContainer = document.querySelector('.topics');

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
   .then((response) => {
      // console.log(response.data.topics);
      const topics = response.data.topics;
      topics.forEach((topic) => { // iterates through the topics and creates a tab for each topic
         topicsContainer.appendChild(createTab(topic));
      })
   })
   .catch((err) => {
      console.log(`Error: ${err}`);
   });

// Function for creating a Tab component that takes a topic as an argument
function createTab(topic) {
   // Creates a 'div' which will bet tab component returned
   const tab = document.createElement('div');
   tab.classList.add('tab');
   tab.textContent = topic;

   return tab; // returns tab component

}