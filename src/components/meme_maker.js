import React from "react"
import { useSelector, useDispatch } from "react-redux";
import { addMeme } from "../features/Memes";
import { setAlert } from "../features/Alert";

export default function MemeMaker(props) {

    const Dispatch = useDispatch();

    const memeList = useSelector(state => state.savedMemes.value)
    const darkmode = useSelector(state => state.darkState.value);
    
    const [meme, setMeme] = React.useState(
        {
            id: 0,
            topText: "",
            bottomText: "",
            image: "https://i.imgflip.com/1ihzfe.jpg"
        }
    );

    const [apiData, setApiData] = React.useState(null)

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setApiData(data.data.memes))
    }, []);


    function inputClick(event) {
        const {value, name} = event.target
        const length = memeList.length + 1
        setMeme(prev => ({
                ...prev,
                [name]: value,
                id: length
        }))
    }
    

    function randomImage() {
        const index = Math.floor(Math.random() * apiData.length)
        setMeme(prev => (
            {
                ...prev,
                image: apiData[index].url,
            }
        ))
    }

    function handlerSave() {
        Dispatch(addMeme(meme));
        Dispatch(setAlert({
            class: "success",
            message: "Meme has been saved!"
        }));
        setTimeout(() => {
            Dispatch(setAlert({
                class: "",
                message: ""
            }));
        }, 3000);
        setMeme(prev => (
            {
                ...prev,
                topText: "",
                bottomText: "",
            }
        ))

    }

    return (
        <section className={darkmode ? "maker py-medium dark" : "maker py-medium"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h1>Meme Maker</h1>
                            <h4>Make a meme online from videos, images & GIF</h4>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input type="text" name="topText" onChange={inputClick} value={meme.topText} id="" placeholder="Top Text" />
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input type="text" name="bottomText" onChange={inputClick} value={meme.bottomText} id="" placeholder="Bottom Text"/>
                                </div>
                            </div>
                        </div>
                       
                        <div className="holder">
                            <button className="button button--secondary" onClick={handlerSave}>
                                Save Meme
                            </button>
                            <div className="button-text">
                                <button className="button" onClick={randomImage}>
                                    Get Random Image
                                </button>
                                <small>Click the button to get a random image</small>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-5">
                        <div className="image-block">
                            {meme.topText && <div className="top">{meme.topText}</div>}
                            <img src={meme.image} alt="" />
                            {meme.bottomText && <div className="bottom">{meme.bottomText}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}