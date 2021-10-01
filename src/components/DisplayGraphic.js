const DisplayGraphic = props => {
    const { questionsArray, randomIndex } = props;
    return (
        <div className="displayGraphic">
            <div className="randomQuestion">
                <p>Random Question</p>
            </div>  
        </div>
    )
}

export default DisplayGraphic;