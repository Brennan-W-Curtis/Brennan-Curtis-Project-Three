const ModalContainer = props => {
    const { displayAnswer, handleRandom, handleReveal, questionsArray, randomIndex, toggleModal } = props;
    return (
        <div className="modalContainer">
            <div className="modalContent">
                <button
                    className="closeButton"
                >
                    <i  
                        onClick={toggleModal}
                        className="fas fa-window-close" 
                        aria-hidden="true"
                        >
                    </i>
                </button>
                <div className="brandingLogo">
                    <i className="fas fa-brain" aria-hidden="true"></i>
                    <i className="fas fa-magic" aria-hidden="true"></i>
                </div>
                {
                    // If the displayAnswer value is true than it will display the question's answer and a button to render the next question
                    displayAnswer ?
                        <>
                            <p>{ questionsArray[randomIndex].answer }</p>
                            <button 
                                className="invokeButton"
                                onClick={() => {
                                    handleRandom(questionsArray)
                                    handleReveal()
                                }}
                            >Next</button>
                        </> :
                        <>
                            <p>{ questionsArray[randomIndex].question }</p>
                            <button 
                                className="invokeButton"
                                onClick={handleReveal}
                            >Reveal</button>
                        </>
                }
            </div>
        </div>
    )
}

export default ModalContainer;