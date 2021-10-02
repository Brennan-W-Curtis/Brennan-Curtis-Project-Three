import DisplayControls from './DisplayControls.js';
import CardGallery from './CardGallery.js';

const GalleryDisplay = props => {
    const { displayHomepage, questionsArray, toggleDisplay } = props;
    return (
        <main className="galleryMain">
            <section>
                <div className="wrapper">
                    <div className="galleryHead">
                        <div>
                            <DisplayControls 
                                displayHomepage={displayHomepage}
                                toggleDisplay={toggleDisplay}
                            />
                        </div>
                        <div>
                            <h2>Display Gallery</h2>
                        </div>
                    </div>
                    <CardGallery 
                        questionsArray={questionsArray}
                    />
                    <div className="studyControls">
                        <button className="playButton">Invoke</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default GalleryDisplay;