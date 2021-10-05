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