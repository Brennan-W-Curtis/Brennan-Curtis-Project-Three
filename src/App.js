import { useEffect, useState } from 'react';
import realtime from './firebase.js';
import { ref, onValue, push, remove } from 'firebase/database';
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

  const [ questionInput, setQuestionInput ] = useState("");
  const [ answerInput, setAnswerInput ] = useState("");

  useEffect(() => {
    const dbRef = ref(realtime);
    onValue(dbRef, snapshot => {
      const myData = snapshot.val();
      const questionsArray = [];
      for (let object in myData) {
        const dataPair = {
          key: object,
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
  const handleQuestion = event => {
    setQuestionInput(event.target.value);
  }
  const handleAnswer = event => {
    setAnswerInput(event.target.value);
  }
  // Store the user's input upon a submit event being fired when the form button is clicked
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
      alert("Please ensure you've input text in both the question and answer fields.")
    }
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
          questionInput={questionInput}
          handleQuestion={handleQuestion}
          answerInput={answerInput}
          handleAnswer={handleAnswer}
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
