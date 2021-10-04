const DisplayGraphic = props => {
    // const { questionsArray } = props;
    return (
        <div className="displayGraphic">
            <div className="graphicCard">
                <div className="graphicContent">
                    <i className="fas fa-brain" aria-hidden="true"></i>
                    <i className="fas fa-magic" aria-hidden="true"></i>
                </div>
                {/* {
                    questionsArray !== undefined ?
                        <p>{  questionsArray[questionsArray.length - 1].question }</p> :
                        <p>Sorry, we currently seem to be having difficulty accessing our database.</p>                    
                } */}
            </div>  
        </div>
    )
}

export default DisplayGraphic;