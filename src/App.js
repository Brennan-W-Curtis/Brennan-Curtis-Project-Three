import { useEffect, useState } from 'react';
import Header from './components/Header.js';
import InputForm from './components/InputForm.js';
import CardDisplay from './components/CardDisplay.js';
import Footer from './components/Footer.js';

const App = () => {
  const [ displayForm, setDisplayForm ] = useState(true);
  // Create a boolean variable in state that determines whether the form is rendered or the list of data pairs
    // Render a form to the page that allows the user to submit a question and answer and store each pair in state
    // Render a mechanism of visual feedback that informs the user of their stored data pairs
      // Give the user the ability to delete previously stored data pairs
    // Create an element that renders a random data pair   

  return (
    <>
      <Header />
      {
        displayForm ?
        <InputForm /> :
        <CardDisplay />
      }
      <Footer />
    </>
  )
}

export default App;
