import QuestionCard from './QuestionCard.js';

const CardGallery = props => {
    const { handleDelete, questionsArray, toggleDisplay } = props;
    return (
        <div className="cardGallery">
            {/* Render all the data pairs stored in state as list items of an unordered list */}
            <ul>
                {
                    questionsArray.length > 0 ?
                        questionsArray.map((item, index) => {
                            return (
                                <QuestionCard 
                                    key={index}
                                    id={item.id}
                                    handleDelete={handleDelete} 
                                    question={item.question} 
                                    answer={item.answer}
                                />
                            )
                        }) :
                        // Not sure if this is a good method of error handling instances where there are no stored questions
                        questionsArray.length >= 1 ?
                            <p>We're currently loading your questions, sorry for the inconvenience.</p> :
                            toggleDisplay()
                }   
            </ul>
        </div>
    )
}

export default CardGallery;