import React from "react"
import "./App.scss"
import Card from "./component/card"
function App() {
    const [myData, setMyData] = React.useState([])
    React.useEffect(() => {
        console.log("didMount 放資料整理")
    }, []) // didMount

    const fackData = {
        videoId: "GB_S2qFh5lU",
        title: "Billie Eilish - No Time To Die (Audio)",
        imgUrl: "https://i.ytimg.com/vi/GB_S2qFh5lU/hqdefault.jpg",
    }
    return (
        <div className="App">
            <h2>HW: 印出 YOUBUTE卡片介紹</h2>
            <Card data={fackData} />
        </div>
    )
}

export default App
