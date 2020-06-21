import * as React from "react"

import "./style.scss"

const Card = (props) => {
    const { videoId, imgUrl, title } = props.data
    console.log("props", props)
    return (
        <div className="card">
            <a href={`https://www.youtube.com/watch?v=${videoId}`}>
                <div className="img">{imgUrl ? <img src={imgUrl} alt="" /> : null}</div>
                <div className="title">{title}</div>
            </a>
        </div>
    )
}

export default Card
