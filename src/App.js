import { useEffect, useState } from 'react';
import realtime from './firebase.js';
import { ref, onValue, push, remove } from 'firebase/database';
import './styles/styles.css'
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import GalleryDisplay from './components/GalleryDisplay.js';
import Footer from './components/Footer.js';

// Reminder: - Potential error handling feature, is to limit the number of characters a user can input to prevent interface from breaking.
// Reminder: - Potential error handling feature, determine a way to render a different prompt on the display graphic is the questionsArray is empty.

const App = () => {
  // All values that are stored within state
  const [ displayHomepage, setDisplayHomepage ] = useState(true);
  const [ displayModal, setDisplayModal ] = useState(false);
  const [ displayAnswer, setDisplayAnswer ] = useState(false);
  const [ dataPairs, setDataPairs ] = useState([]);
  const [ questionInput, setQuestionInput ] = useState("");
  const [ answerInput, setAnswerInput ] = useState("");
  const [ randomIndex, setRandomIndex ] = useState(0);

  // Access the values stored within the realtime database and update state with the most recent version
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

  // Toggles between displaying the homepage and the card gallery
  const toggleDisplay = () => {
    const toggleHomepage = displayHomepage;
    setDisplayHomepage(!toggleHomepage);
  }

  // Toggles between whether the modal is displayed in front of the card gallery
  const toggleModal = () => {
    const toggleModal = displayModal;
    setDisplayModal(!toggleModal);
  }

  // Monitors the current value entered by the user in the question input
  const handleQuestion = event => {
    setQuestionInput(event.target.value);
  }

  // Monitors the current value entered by the user in the answer input
  const handleAnswer = event => {
    setAnswerInput(event.target.value);
  }

  // Store the user's input upon a submit event or remind them both a question and answer must be entered then clear them afterwards
  const handleSubmit = event => {
    event.preventDefault();
    if (answerInput && questionInput) {
      const dbRef = ref(realtime)
      const dataPair = {
        question: questionInput,
        answer: answerInput
      } 
      push(dbRef, dataPair);
      setAnswerInput("");
      setQuestionInput("");
    } else {
      alert("Please ensure you've input text in both the question and answer fields before submitting.")
    }
  }

  // Deletes a targeted question card from the gallery by accessing it's id property 
  const handleDelete = questionId => {
    const specifiedRef = ref(realtime, questionId);
    remove(specifiedRef);
  }

  // Returns a random number based on the length of an input array
  const generateRandom = array => {
    const randomNumber = Math.floor(Math.random() * array.length);
    return randomNumber;
  }

  // Generates a random number based on the number of questions in state and stores it
  const handleRandom = questionsArray => {
    let randomNumber = generateRandom(questionsArray);
    if (randomIndex === randomNumber) {
      randomNumber = generateRandom(questionsArray);
    }
    setRandomIndex(randomNumber)
  }

  // Determines whether a question or answer will be rendered to the modal
  const handleReveal = () => {
    let answerVisible = displayAnswer
    setDisplayAnswer(!answerVisible);
  }
  
  return (
    <>
      <Header />
      {
        displayHomepage ?
        <HomePage
          answerInput={answerInput}
          displayHomepage={displayHomepage}
          handleAnswer={handleAnswer}
          handleQuestion={handleQuestion}
          handleSubmit={handleSubmit}
          questionsArray={dataPairs}
          questionInput={questionInput}
          toggleDisplay={toggleDisplay}
        /> :
        <GalleryDisplay
          displayAnswer={displayAnswer}
          displayHomepage={displayHomepage}
          displayModal={displayModal}
          handleDelete={handleDelete}
          handleRandom={handleRandom}
          handleReveal={handleReveal}
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