const ModalContainer = props => {
    const { questionsArray, toggleModal } = props;
    return (
        <div className="modalContainer">
            <div className="modalContent">
            <p>{ questionsArray[0].question }</p>
            <button className="invokeButton">Reveal</button>
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
            </div>
        </div>
    )
}

export default ModalContainer;