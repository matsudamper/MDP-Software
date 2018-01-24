new Vue({
    el: "#product",
    data: {
        name: "4PhotoTweet",
        icon: "icon.png",
        genre: "ソーシャルネットワーク",
        description: "遂に標準アプリではできない（2015/04）Twitterへの複数画像が投稿できるように！！！<br>これでゲーム画面をたくさんシェアしよう<br><br>自分の好きなアプリ名を使うことができます。<br>この機能を使えば合計2アカウント使うこともできます。<br>アプリ登録はここから→https://apps.twitter.com/",
        url: "http://p0.dl.playstation.net/p0/psns/psnschk.htm?a=psns%3Abrowse%3Fproduct%3DJM2594-NPPA00289_00-0000000000000000&type=psm",
        screenshots: [
            'SS/1.png',
            'SS/2.png',
            'SS/3.png',
            'SS/4.png'
        ],
        price: "103円",
        size: "3MB",
        players: "1人",
        language: "英語(アメリカ)",
        functions: [
            'コントローラーまたは、オンスクリーンコントローラー',
            'タッチスクリーン'
        ],
        devices: {
            psvita: true,
            psvitatv: true,
            android: false
        }
    }
});