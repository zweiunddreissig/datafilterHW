import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import ByShop from "./ByShop"
import App from "./App"
import HW from "./youtubeHW"

import * as serviceWorker from "./serviceWorker"

// ReactDOM.render(
//   <React.StrictMode>
//      <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// )
// ReactDOM.render(
//     <React.StrictMode>
//         <ByShop />
//     </React.StrictMode>,
//     document.getElementById("root")
// )

ReactDOM.render(
    <React.StrictMode>
        <HW />
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
