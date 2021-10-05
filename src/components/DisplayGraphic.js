const DisplayGraphic = props => {
    const { questionsArray } = props;
    return (
        <div className="displayGraphic">
            <div className="graphicCard">
                <div className="graphicContent">
                    <i className="fas fa-brain" aria-hidden="true"></i>
                    <i className="fas fa-magic" aria-hidden="true"></i>
                </div>
                {
                    questionsArray[questionsArray.length - 1] !== undefined ?
                        <p className="graphicText" title="Latest spell">{  questionsArray[questionsArray.length - 1].question }</p> :
                        <p className="graphicText">Waiting...</p>                    
                }
            </div>  
        </div>
    )
}

export default DisplayGraphic;