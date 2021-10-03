import ModalContainer from './ModalContainer.js';

const StudyControls = props => {
    const { displayModal, questionsArray, toggleModal } = props
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
                    questionsArray={questionsArray}
                    toggleModal={toggleModal}
                />:
                <></>
            }
        </div>
    )
}

export default StudyControls;