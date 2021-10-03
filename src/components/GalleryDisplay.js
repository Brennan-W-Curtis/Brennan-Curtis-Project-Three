import DisplayControls from './DisplayControls.js';
import CardGallery from './CardGallery.js';
import StudyControls from './StudyControls.js'

const GalleryDisplay = props => {
    const { displayHomepage, displayModal, handleDelete, questionsArray, toggleDisplay, toggleModal } = props;
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
                        handleDelete={handleDelete} 
                        questionsArray={questionsArray}
                        toggleDisplay={toggleDisplay}
                    />
                    <StudyControls 
                        questionsArray={questionsArray}
                        displayModal={displayModal}
                        toggleModal={toggleModal}
                    />
                </div>
            </section>
        </main>
    )
}

export default GalleryDisplay;