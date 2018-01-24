new Vue({
    el: "#product",
    data: {
        name: "StopWatch/Timer",
        icon: "icon.png",
        genre: "ユーティリティ",
        description: "・ストップウォッチ<br>ラップタイムは100個まで記録できます。それ以上はリセットされて１に戻ります。<br><br>・タイマー<br>99時間59分59秒まで設定できます<br>時間になったら音でお知らせ。",
        url: "http://www.jp.playstation.com/info/support/sp_20150311_psm_info.html#!0531",
        screenshots: [
            'SS/1.png',
            'SS/2.png',
            'SS/3.png',
            'SS/4.png'
        ],
        price: "52円",
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