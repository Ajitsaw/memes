import Tab from "../components/Tab"
import SavedMeme from "../components/SavedMeme"
import { useSelector } from "react-redux"

export default function Resources() {
    const isMeme = useSelector(state => state.savedMemes.value)
    console.log(isMeme.length)
    return (
        <>
            {isMeme.length !== 0  && 
            <SavedMeme/>
            }
            <Tab/>
        </>
    )
}