const InputForm = props => {
    const { handleSubmit } = props;
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="addQuestion" className="sr-only">Question</label>
            <input type="text" name="addQuestion" className="addQuestion" id="addQuestion" placeholder="Question." />
            <label htmlFor="addAnswer" className="sr-only">Answer</label>
            <input type="text" name="addAnswer" className="addAnswer" id="addAnswer" placeholder="Answer." />
            <div className="cardQuantity">
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default InputForm;