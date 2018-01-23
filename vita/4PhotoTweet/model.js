new Vue({
    el: "#product",
    data: {
        lineupId: 0486,
        name: "4PhotoTweet",
        icon: "icon.png",
        genre: "ソーシャルネットワーク",
        description: "遂に標準アプリではできない（2015/04）Twitterへの複数画像が投稿できるように！！！<br>これでゲーム画面をたくさんシェアしよう<br><br>自分の好きなアプリ名を使うことができます。<br>この機能を使えば合計2アカウント使うこともできます。<br>アプリ登録はここから→https://apps.twitter.com/",
        url: "http://www.jp.playstation.com/info/support/sp_20150311_psm_info.html#!0531",
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