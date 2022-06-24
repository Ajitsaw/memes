
import React from "react"
import Savedmemeitem from "./Savedmemeitem"
import { useSelector, useDispatch } from "react-redux"
import { deleteMemes } from "../features/Memes"
import { setAlert } from "../features/Alert"

export default function SavedMeme(props) {
    const dispatch = useDispatch();

    const memeList = useSelector(state => state.savedMemes.value)
    const darkmode = useSelector(state => state.darkState.value)

    function onclick(id) {
        dispatch(deleteMemes({id:id}));
        dispatch(setAlert({
            class: "success",
            message: "Meme has been Deleted!"
        }));
        setTimeout(() => {
            dispatch(setAlert({
                class: "",
                message: ""
            }));
        }, 3000);
    }

    const allMemes = memeList.map(item => {
        return (
            <Savedmemeitem key={item.id} id={item.id} top={item.topText} bottom={item.bottomText} img={item.image} onclick={onclick}/>
        )
    })

    return (
        <section className={darkmode ? "resources py-medium bg-light-gray dark" : "resources py-medium bg-light-gray"}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text">
                            <h2>Saved Memes</h2>
                            <p>
                                All the memes will show here
                            </p>
                        </div>
                        
                    </div>
                </div>
                <div className="row">
                    {allMemes}
                </div>
            </div>
        </section>
    )
}