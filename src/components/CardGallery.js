const CardGallery = props => {
    const { questionsArray } = props;
    return (
        <div className="cardGallery">
            {/* Render all the data pairs stored in state as list items of an unordered list */}
            <ul>
                {
                    questionsArray.map((item, index) => {
                        return (
                            <li key={index} className="individualCard">{item.question}</li>
                        )
                    })
                }   
            </ul>
        </div>
    )
}

export default CardGallery;