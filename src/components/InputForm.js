const InputForm = props => {
    const { answerInput, handleAnswer, handleQuestion, handleSubmit, questionInput } = props;
    return (
        <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="addQuestion" className="sr-only">Question</label>
            <input 
                type="text" 
                name="addQuestion" 
                className="addQuestion" 
                id="addQuestion" 
                placeholder="Question" 
                onChange={ handleQuestion }
                value={ questionInput }
            />
            <label htmlFor="addAnswer" className="sr-only">Answer</label>
            <input 
                type="text" 
                name="addAnswer" 
                className="addAnswer" 
                id="addAnswer" 
                placeholder="Answer"
                onChange={ handleAnswer } 
                value={ answerInput }
            />
            <button type="submit">Submit</button>
        </form>
    )
}

export default InputForm;