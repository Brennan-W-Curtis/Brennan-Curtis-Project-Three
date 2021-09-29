const InputForm = props => {
    return (
        <main>
            <section>
                <div className="displayControls">
                    <button></button>
                    <button></button>
                </div>
                <div className="displayGraphic">
                    <div className="randomPair"></div>
                </div>
            </section>
            <section>
                <h1>Quiz</h1>
                <h2>Improve your studying</h2>
                <form action="">
                    <label htmlFor=""></label>
                    <input type="text" />
                    <label htmlFor=""></label>
                    <input type="text" />
                    <div className="cardQuantity"></div>
                    <button type="submit"></button>
                </form>
            </section>
        </main>
    )
}

export default InputForm;