import InputForm from './InputForm.js';
import DisplayControls from './DisplayControls.js'
import DisplayGraphic from './DisplayGraphic.js';
// Render a mechanism of visual feedback that informs the user of their stored data pairs
    // Give the user the ability to delete previously stored data pairs
// Create an element that renders a random data pair 
 
const HomePage = () => {
    return (
        <main className="homeMain">
            <section>
                <div className="wrapper">
                    <DisplayControls />
                    <DisplayGraphic />
                </div>
            </section>
            <section>
                <div className="wrapper">
                    <h1>Neuromancy</h1>
                    <h2>Hone your mind with practiced thoughts and magical thinking</h2>
                    <InputForm />
                </div>
            </section>
        </main>
    )
}

export default HomePage;