import React from "react"
import "./App.scss"
import demodata from "./data/demo.json"
function App() {
    const [shopData, setShopData] = React.useState({})
    const [keyWord, setKeyWord] = React.useState("S001")
    React.useEffect(() => {
        reorganizeByShop()
    }, []) // didMount

    const reorganizeByShop = () => {
        const listOfShop = []
        // 找出總共有幾間shop
        demodata.forEach((d) => {
            if (listOfShop.indexOf(d.shopid) === -1) {
                listOfShop.push(d.shopid)
            }
        })

        console.log("總共有哪些shopID", listOfShop)
        // 整理新的by shop資料
        const newData = {}
        //目標結構
        /**

    { S001:[{
            orderid: "31076582227611",
            userid: "123",
            shopid: "S001",
            event_time:"2019-12-27 00:23:03",
            },{
            orderid: "31076582227611",
            userid: "123",
            shopid: "S001",
            event_time:"2019-12-27 00:23:03",
            } 
        ],
      S002:[{
            orderid: "31076582227611",
            userid: "123",
            shopid: "S001",
            event_time:"2019-12-27 00:23:03",
            },{
            orderid: "31076582227611",
            userid: "123",
            shopid: "S001",
            event_time:"2019-12-27 00:23:03",
            } 
        ],
    }
*/
        listOfShop.map((shop) => {
            newData[shop] = [] // 建立 S001:[],
            demodata.forEach((d) => {
                if (d.shopid === shop) {
                    newData[shop].push(d)
                }
            })
        })
        console.log("byShop DATA", newData)

        setShopData(newData)
    }
    return (
        <div className="App">
            <input
                value={keyWord}
                onChange={(e) => {
                    const val = e.target.value
                    setKeyWord(val)
                }}
            />
            <ul className="title">
                <li>
                    <h2>SHOP:{keyWord}資料map印出</h2>
                </li>
            </ul>
            {shopData[keyWord]?.map((item) => {
                // ?代表確認是否存在 才做下一步，沒加會報錯
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
