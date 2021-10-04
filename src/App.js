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
// Reminder: - Style the modal to make it conform with a responsive design. 
// Reminder: - There seems to be a bug where if the database isn't fast enough when updating the state it breaks a component.

const App = () => {
  // Store a boolean value in state that determines what content will render to the page
  const [ displayHomepage, setDisplayHomepage ] = useState(true);
  // Store a boolean value in state that determines whether the modal is visible to the user
  const [ displayModal, setDisplayModal ] = useState(false);
  // Store a boolean value in state that determines whether a question will be replaced by it's answer in the modal
  const [ displayAnswer, setDisplayAnswer ] = useState(false);
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
  // Declare a function expression that toggles between displaying the homepage and the card gallery
  const toggleDisplay = () => {
    const toggleHomepage = displayHomepage;
    // Sets the toggleHomepage value to the opposite and saves it to state
    setDisplayHomepage(!toggleHomepage);
  }
  // Declare a function expression that toggles between displaying the modal from the card gallery
  const toggleModal = () => {
    const toggleModal = displayModal;
    setDisplayModal(!toggleModal);
  }
  // Declare a function expression that monitors the current value entered by the user in the question input
  const handleQuestion = event => {
    setQuestionInput(event.target.value);
  }
  // Declare a function expression that monitors the current value entered by the user in the answer input
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
  // Declare a function expression that deletes the selected card from the gallery when called by a click event
  const handleDelete = questionId => {
    const specifiedRef = ref(realtime, questionId);
    remove(specifiedRef);
  }
  // Declare a function expression that returns a random number based on the length of an array
  const generateRandom = array => {
    const randomNumber = Math.floor(Math.random() * array.length);
    return randomNumber;
  }
  // Declare a function expression that will store a random number in state
  const handleRandom = questionsArray => {
    let randomNumber = generateRandom(questionsArray);
    // A conditional statement that prevents numbers from being used to setState more than once in a row
    if (randomIndex === randomNumber) {
      randomNumber = generateRandom(questionsArray);
    }
    setRandomIndex(randomNumber)
  }
  // Declare a function expression that will determine whether a question or it's answer will be rendered to the modal
  const handleReveal = () => {
    let answerVisible = displayAnswer
    setDisplayAnswer(!answerVisible);
  }
  return (
    <>
      <Header />
      {/* Render either the input form or the card gallery depending on whether the displayForm value in state is true or false */}
      {
        displayHomepage ?
        <HomePage
          answerInput={answerInput}
          // Pass state boolean value that determines what content will render to the page 
          displayHomepage={displayHomepage}
          handleAnswer={handleAnswer}
          handleQuestion={handleQuestion}
          handleSubmit={handleSubmit}
          questionsArray={dataPairs}
          questionInput={questionInput}
          // Pass function that will toggle which component will be rendered along with it's content
          toggleDisplay={toggleDisplay}
        /> :
        <GalleryDisplay
          displayAnswer={displayAnswer}
          displayHomepage={displayHomepage}
          displayModal={displayModal}
          handleDelete={handleDelete}
          handleRandom={handleRandom}
          handleReveal={handleReveal}
          // Pass the state array object that contains all of the data pairs that will render to the gallery 
          questionsArray={dataPairs}
          randomIndex={randomIndex}
          toggleDisplay={toggleDisplay}
          toggleModal={toggleModal}
        />
      }
      <Footer />
    </>
  )
}

export default App;