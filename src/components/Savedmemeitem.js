
import React from "react"

export default function Savedmemeitem(props) {
    return (
        <div className="col-lg-3 col-md-6" key={props.id}>
            <div className="resources__single">
                <div className="icon" onClick={()=>props.onclick(props.id)}>
                    +
                </div>
                <div className="top">
                    {props.top}
                </div>
                <div className="img">
                    <img src={props.img} alt={props.top} />
                </div>
                <div className="bottom">
                    {props.bottom}
                </div>
            </div>
        </div>
    )
}