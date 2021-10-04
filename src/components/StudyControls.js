import ModalContainer from './ModalContainer.js';

const StudyControls = props => {
    const { displayAnswer, displayModal, handleRandom, handleReveal, questionsArray, randomIndex, toggleModal } = props
    return (
        <div className="studyControls">
            <button 
                className="playButton"
                onClick={toggleModal}
            >Invoke</button>
            {
                // If displayModal's value is true it will display the modal if it's false it will render a react fragment
                displayModal ?
                <ModalContainer
                    displayAnswer={displayAnswer}
                    handleRandom={handleRandom}
                    handleReveal={handleReveal}
                    questionsArray={questionsArray}
                    randomIndex={randomIndex}
                    toggleModal={toggleModal}
                />:
                <></>
            }
        </div>
    )
}

export default StudyControls;