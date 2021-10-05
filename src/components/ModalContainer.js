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
                {
                    // If the boolean value stored in state evaluate to true than it will display the answer based upon the randomIndex value in state, will render a button that changes the number stored in randomIndex, and toggles the value stored within displayAnswer.  
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
                        // Otherwise it will render a question based upon the randomIndex value in state and a button that will toggle the value stored within displayAnswer.
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