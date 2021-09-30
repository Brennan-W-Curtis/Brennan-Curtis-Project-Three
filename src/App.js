import { useEffect, useState } from 'react';
import { getDatabase } from "firebase/database";
import './styles/sass/styles.css'
import Header from './components/Header.js';
import HomePage from './components/HomePage.js';
import CardDisplay from './components/CardDisplay.js';
import Footer from './components/Footer.js';

// Create a funtion that changes the state and pass that as a prop to components 

const App = () => {
  // Store a boolean value in state that determines what content will render to the page
  const [ displayForm, setDisplayForm ] = useState(true);
  // Store an array of objects in state that will retain data pairs of question and answers between user sessions
  const [ dataPairs, setDataPairs ] = useState([]);
  return (
    <>
      <Header />
      {/* Render either the input form or the card gallery depending on whether the displayForm value in state is true or false */}
      {
        displayForm ?
        <HomePage /> :
        <CardDisplay />
      }
      <Footer />
    </>
  )
}

export default App;
