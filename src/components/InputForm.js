const InputForm = () => {
    return (
        <form action="">
            <label htmlFor="question" className="sr-only">Question</label>
            <input type="text" name="question" className="question" id="question" placeholder="Please enter a question." />
            <label htmlFor="answer" className="sr-only">Answer</label>
            <input type="text" name="answer" className="answer" id="answer" placeholder="Please enter the corresponding answer." />
            <div className="cardQuantity">
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default InputForm;