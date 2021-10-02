const QuestionCard = props => {
    const { id, question } = props;
    return (
        <li
            className="individualCard"
            id={id}
        >
            {question}
            <i  
                className="fas fa-window-close" 
                aria-hidden="true"
            >
            </i>
        </li>

    )
}

export default QuestionCard;