const QuestionCard = props => {
    const { answer, handleDelete, id, question } = props;
    return (
        <li
            className="individualCard"
            id={id}
        >
            <div className="cardInner">
                <div className="cardFront">
                    {question}
                </div>
                <div className="cardBack">
                    {answer}
                </div>
            </div>
            <button
                onClick={() => handleDelete(id)}
                >
                <i  
                    className="fas fa-window-close" 
                    aria-hidden="true"
                    title="Forget"
                    >
                </i>
            </button>
        </li>

    )
}

export default QuestionCard;