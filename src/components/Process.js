import { useSelector } from "react-redux"

export default function Process() {
    const darkmode = useSelector(state => state.darkState.value)
    
    return (
        <section className={darkmode ? "process py-medium bg-light-gray dark" : "process py-medium bg-light-gray"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h3>
                                How to Generate a meme for free
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="process__single">
                            <span>STEP 1</span>
                            <h5>Choose random image</h5>
                            <p>
                                Choose one of 100 available meme templates. Just by clicking a button and just use your creativity.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="process__single">
                            <span>STEP 2</span>
                            <h5>Create a meme</h5>
                            <p>
                                When the file is uploaded, you can change the meme template if you like. Then enter text, adjust font and crop the frame by selecting an option.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="process__single">
                            <span>STEP 3</span>
                            <h5>Save your own meme</h5>
                            <p>
                                Playback the video meme or take a close look at the image to make sure you did great. Now save the result by clicking the appropriate button.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}