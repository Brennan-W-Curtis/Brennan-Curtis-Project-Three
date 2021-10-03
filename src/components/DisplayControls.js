const DisplayControls = props => {
    const { displayHomepage, toggleDisplay } = props;
    return (
        <div className="displayControls">
            {
                displayHomepage ?
                <button onClick={toggleDisplay}>Codex</button> :
                <button onClick={toggleDisplay}>Create</button>
            }
        </div>
    )
}

export default DisplayControls;