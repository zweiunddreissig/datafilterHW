# YT 作業

### 兩個選項

1. 整理資料成 array obj 後，用 map 塞進卡裡
    - 嘗試過沒辦法做出來，才可以選選項 2
2. 手動找到你要的資料，傳給每個 data(至少要 4 張）

### Card 吃的資料格式

```
{
    videoId: "pal1RvauKBU",
    description:"【抖音神曲2020】#抖音流行歌曲2020-T..",
    imgUrl: "https://i.ytimg.com/vi/pal1RvauKBU/hqdefault.jpg",
}
```

### 原資料結構

```
   {
        "kind": "youtube#searchResult",
        "etag": "tybaNH97SnfOQ_uadAw2CW1YOnM",
        "id": { "kind": "youtube#video", "videoId": "pal1RvauKBU" },
        "snippet": {
            "publishedAt": "2020-06-17T22:00:13Z",
            "channelId": "UCiBfeXK4qw9QAqx92RErhxA",
            "title": "【抖音神曲2020】#抖音流行歌曲 2020-TIK TOK抖音音樂熱門歌單-2020年抖音最火流行歌曲推荐 - 2020最新 + 抖 音 音乐 + 抖音歌單 [ 芒種, 少年 , 你的答案 ]",
            "description": "【抖音神曲2020】#抖音流行歌曲2020-TIK TOK抖音音樂熱門歌單-2020年抖音最火流行歌曲推荐- 2020最新+ 抖音音乐+ 抖音歌單[ 芒種, 少年, 你的答案...",
            "thumbnails": {
                "default": { "url": "https://i.ytimg.com/vi/pal1RvauKBU/default.jpg", "width": 120, "height": 90 },
                "medium": { "url": "https://i.ytimg.com/vi/pal1RvauKBU/mqdefault.jpg", "width": 320, "height": 180 },
                "high": { "url": "https://i.ytimg.com/vi/pal1RvauKBU/hqdefault.jpg", "width": 480, "height": 360 }
            },
            "channelTitle": "Jean Huang",
            "liveBroadcastContent": "none",
            "publishTime": "2020-06-17T22:00:13Z"
        }
    },

```

### 對應的資料欄位

```
{
    ...
    "id":{
        ...,
        "videoId":"____",
    },
    "snippet":{
        title:"____",
        thumbnails:{
            "high": {
                "url":"____"
            }
        }
        ...
    }
    ...
}
```
