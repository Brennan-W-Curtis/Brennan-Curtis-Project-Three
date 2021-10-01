import { useState } from 'react';
import './styles/sass/styles.css'
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import GalleryDisplay from './components/GalleryDisplay.js';
import Footer from './components/Footer.js';

// Question: - What circumstances should I take into account for error handling?
// Question: - Should I create a separate module and move all of the functions I've declared there?

const App = () => {
  // Store a boolean value in state that determines what content will render to the page
  const [ displayHomepage, setDisplayHomepage ] = useState(true);
  // Store an array of objects in state that will retain data pairs of question and answers between user sessions
  const [ dataPairs, setDataPairs ] = useState([]);
  // Create a function expression that toggles between displaying the homepage and the card gallery
  const toggleDisplay = () => {
    const toggleHomepage = displayHomepage;
    // Sets the toggleHomepage value to the opposite and saves it to state
    setDisplayHomepage(!toggleHomepage);
  }
  // Store the user's input upon a submit event being fired when the form button is clicked
  const handleSubmit = event => {
    event.preventDefault();
    const questionObject = {
        question: event.target[0].value,
        answer: event.target[1].value
    }
    // Clear the form inputs after the submit event occurs
    document.querySelector("#addQuestion").value = "";
    document.querySelector("#addAnswer").value= "";
    const questionsArray = dataPairs;
    // Use of spread operator prevents overwriting the state each time a new object is added
    setDataPairs([...questionsArray, questionObject])
  }
  // Declare a function that returns a random number based on the length of an array
  const randomIndex = array => {
    const randomNumber = Math.floor(Math.random() * array.length);
    return randomNumber;
  }

  return (
    <>
      <Header />
      {/* Render either the input form or the card gallery depending on whether the displayForm value in state is true or false */}
      {
        displayHomepage ?
        <HomePage
          // Pass state boolean value that determines what content will render to the page 
          displayHomepage={displayHomepage}
          handleSubmit={handleSubmit}
          questionsArray={dataPairs}
          randomIndex={randomIndex}
          // Pass function that will toggle which component will be rendered along with it's content
          toggleDisplay={toggleDisplay}
        /> :
        <GalleryDisplay
          // Pass the state array object that contains all of the data pairs that will render to the gallery 
          questionsArray={dataPairs}
          displayHomepage={displayHomepage}
          toggleDisplay={toggleDisplay}
        />
      }
      <Footer />
    </>
  )
}

export default App;
