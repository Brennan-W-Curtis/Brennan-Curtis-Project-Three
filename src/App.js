import { useEffect, useState } from 'react';
import realtime from './firebase.js';
import { ref, onValue, push, remove } from 'firebase/database';
import './styles/sass/styles.css'
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import GalleryDisplay from './components/GalleryDisplay.js';
import Footer from './components/Footer.js';

// Question: - Should I create a separate module and move all of the functions I've declared there?
// Question: - My use of a second ternary expression prevents the user from accessing the card gallery which is intented but throws an error to the console, should I address this?
// Reminder: - Render a different display controls or disable changing state if the dataPairs state value is 0.
// Reminder: - If the user deletes the last card in the gallery it should change the displayHomepage state value to true.
// Features: - When the invoke button is pressed a function is called that displays a modal with a random question. The user is able to progress
            // through all the questions saved to state with view questions being removed from the list of remaining available questions. They are
            // able to progress forward when clicking on a chevron button.
// Features: - Render a random question to the display graphic component.
// Features: - Upon load a message in a modal should appear on screen to inform the user what the application's purpose is to add context to the
            // flowery language.  

const App = () => {
  // Store a boolean value in state that determines what content will render to the page
  const [ displayHomepage, setDisplayHomepage ] = useState(true);
  // Store a boolean value in state that determines whether the modal is visible to the user
  const [ displayModal, setDisplayModal ] = useState(false);
  // Store an array of objects in state that will retain data pairs of question and answers between user sessions
  const [ dataPairs, setDataPairs ] = useState([]);
  // Store the user's input from the form in state
  const [ questionInput, setQuestionInput ] = useState("");
  const [ answerInput, setAnswerInput ] = useState("");
  // Store a random number within the range of the number of data pairs in order to randomly generate a question for the modal
  const [ randomIndex, setRandomIndex ] = useState(0);
  // Access the values stored within the realtime database and update the state with the most recent version
  useEffect(() => {
    const dbRef = ref(realtime);
    onValue(dbRef, snapshot => {
      const myData = snapshot.val();
      const questionsArray = [];
      for (let object in myData) {
        const dataPair = {
          id: object,
          question: myData[object].question,
          answer: myData[object].answer
        }
        questionsArray.push(dataPair);
      }
      setDataPairs(questionsArray);
    })
  }, [])
  // Create a function expression that toggles between displaying the homepage and the card gallery
  const toggleDisplay = () => {
    const toggleHomepage = displayHomepage;
    // Sets the toggleHomepage value to the opposite and saves it to state
    setDisplayHomepage(!toggleHomepage);
  }
  // Create a function expression that toggles between displaying the modal from the card gallery
  const toggleModal = () => {
    const toggleModal = displayModal;
    setDisplayModal(!toggleModal);
  }
  // Create a function expression that monitors the current value entered by the user in the question input
  const handleQuestion = event => {
    setQuestionInput(event.target.value);
  }
  // Create a function expression that monitors the current value entered by the user in the answer input
  const handleAnswer = event => {
    setAnswerInput(event.target.value);
  }
  // Store the user's input upon a submit event being fired when the form button is clicked
  const handleSubmit = event => {
    event.preventDefault();
    // Created a conditional statement that requires the user have entered text in both the question and answer inputs
    if (answerInput && questionInput) {
      // Storing a reference to the realtime database to access later
      const dbRef = ref(realtime)
      // Store both inputs within an object
      const dataPair = {
        question: questionInput,
        answer: answerInput
      } 
      // Sends the data from the object to the realtime database
      push(dbRef, dataPair);
      // Reset both inputs upon submission to allow for the user to enter more inputs
      setAnswerInput("");
      setQuestionInput("");
    } else {
      alert("Please ensure you've input text in both the question and answer fields before submitting.")
    }
  }
  // Declare a function that deletes the selected card from the gallery when called by a click event
  const handleDelete = questionId => {
    const specifiedRef = ref(realtime, questionId);
    remove(specifiedRef);
  }
  // Declare a function that returns a random number based on the length of an array
  const randomNumber = array => {
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
          questionInput={questionInput}
          handleQuestion={handleQuestion}
          answerInput={answerInput}
          handleAnswer={handleAnswer}
          // Pass function that will toggle which component will be rendered along with it's content
          toggleDisplay={toggleDisplay}
        /> :
        <GalleryDisplay
          handleDelete={handleDelete}
          // Pass the state array object that contains all of the data pairs that will render to the gallery 
          questionsArray={dataPairs}
          displayHomepage={displayHomepage}
          toggleDisplay={toggleDisplay}
          displayModal={displayModal}
          toggleModal={toggleModal}
        />
      }
      <Footer />
    </>
  )
}

export default App;
