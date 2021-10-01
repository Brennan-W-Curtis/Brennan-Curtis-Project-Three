const DisplayControls = props => {
    const { displayHomepage, toggleDisplay } = props;
    return (
        <div className="displayControls">
            {
                displayHomepage ?
                <button onClick={toggleDisplay}>Gallery</button> :
                <button onClick={toggleDisplay}>Input</button>
            }
        </div>
    )
}

export default DisplayControls;