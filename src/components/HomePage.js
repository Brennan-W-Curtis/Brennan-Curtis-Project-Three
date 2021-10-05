import InputForm from './InputForm.js';
import DisplayControls from './DisplayControls.js'
import DisplayGraphic from './DisplayGraphic.js';
 
const HomePage = props => {
    const { answerInput, displayHomepage, handleAnswer, handleQuestion, handleSubmit, questionsArray, questionInput, toggleDisplay } = props;
    return (
        <main className="homeMain">
            <div className="wrapper">
                <section className="graphicSection">
                    <DisplayControls
                        displayHomepage={displayHomepage}
                        toggleDisplay={toggleDisplay}
                    />
                    {/* Displays the most recent question to have been recorded by a user. */}
                    <DisplayGraphic 
                        questionsArray={questionsArray}
                    />
                </section>
                <section className="formSection">
                    <h2 className="brandingStatement">Hone your mind with practiced thoughts and magical thinking.</h2>
                    <p>Enter a spell of your choice in the form of a question and answer to record it for review in the codex.</p>
                    <InputForm 
                        answerInput={answerInput}
                        handleAnswer={handleAnswer}
                        handleQuestion={handleQuestion}
                        handleSubmit={handleSubmit}
                        questionInput={questionInput}
                    />
                </section>
            </div>
        </main>
    )
}

export default HomePage;