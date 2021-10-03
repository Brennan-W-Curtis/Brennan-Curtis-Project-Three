import InputForm from './InputForm.js';
import DisplayControls from './DisplayControls.js'
import DisplayGraphic from './DisplayGraphic.js';
// Render a mechanism of visual feedback that informs the user of their stored data pairs
    // Give the user the ability to delete previously stored data pairs
// Create an element that renders a random data pair 
 
const HomePage = props => {
    const { answerInput, displayHomepage, handleAnswer, handleQuestion, handleSubmit, questionInput, toggleDisplay } = props;
    return (
        <main className="homeMain">
            <div className="wrapper">
                <section className="graphicSection">
                    {/* When the user clicks on the buttons for the display controls a click event fires that changes the state value for displayHomepage */}
                    <DisplayControls
                        toggleDisplay={toggleDisplay}
                        displayHomepage={displayHomepage}
                    />
                    <DisplayGraphic />
                </section>
                <section className="formSection">
                    <h2 className="brandingStatement">Hone your mind with practiced thoughts and magical thinking.</h2>
                    <p>Enter a question and answer in both fields before submitting to cast a spellcard.</p>
                    <InputForm 
                        handleSubmit={handleSubmit}
                        questionInput={questionInput}
                        handleQuestion={handleQuestion}
                        answerInput={answerInput}
                        handleAnswer={handleAnswer}
                    />
                </section>
            </div>
        </main>
    )
}

export default HomePage;