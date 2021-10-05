import QuestionCard from './QuestionCard.js';

const CardGallery = props => {
    const { handleDelete, questionsArray, toggleDisplay } = props;
    return (
        <div className="cardGallery">
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
                        questionsArray.length === 0 ?
                            toggleDisplay() :
                            <></> 
                }   
            </ul>
        </div>
    )
}

export default CardGallery;