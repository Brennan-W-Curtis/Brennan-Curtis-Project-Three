import QuestionCard from './QuestionCard.js';

const CardGallery = props => {
    const { questionsArray } = props;
    return (
        <div className="cardGallery">
            {/* Render all the data pairs stored in state as list items of an unordered list */}
            <ul>
                {
                    questionsArray.map((item, index) => {
                        return (
                            <QuestionCard 
                                key={index}
                                id={index} 
                                question={item.question} 
                            />
                        )
                    })
                }   
            </ul>
        </div>
    )
}

export default CardGallery;