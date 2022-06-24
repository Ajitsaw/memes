import React from "react"

import MemeMaker from "../components/meme_maker"
import About from "../components/About"
import Process from "../components/Process"
import SavedMeme from "../components/SavedMeme"
import { useSelector } from "react-redux"

export default function StartPage(props) {

    // const setAlert = (type, text) => {
    //     isShowAlert({
    //         type: type,
    //         message: text
    //     })
    // }

    const isMeme = useSelector(state => state.savedMemes.value)

    
    
    return (
        <>
            <MemeMaker/>
            {isMeme.length !== 0  && 
            <SavedMeme/>
            }
            <About/>
            <Process/>
            {/* {showAlert && 
            <Alert content={showAlert}/>
            } */}
        </>
    )
}