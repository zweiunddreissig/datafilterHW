import React from "react"

import "./App.scss"
import demodata from "./data/demo.json"
function App() {
    return (
        <div className="App">
            <ul className="title">
                <li>
                    <h2>array 資料map印出</h2>
                </li>
            </ul>
            {demodata.map((item) => {
                return (
                    <ul className="order_list" key={item.orderid}>
                        <li>
                            <div>
                                <b>訂單編號：</b>
                                {item.orderid}
                            </div>
                            <div>
                                <b>店家名稱：</b>
                                {item.shopid}
                            </div>
                            <div>
                                <b>購買人：</b>
                                {item.userid}
                            </div>
                            <div>
                                <b>交易時間：</b>
                                {item.event_time}
                            </div>
                        </li>
                    </ul>
                )
            })}
        </div>
    )
}

export default App
