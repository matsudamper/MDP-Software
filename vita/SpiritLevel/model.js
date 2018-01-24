new Vue({
    el: "#product",
    data: {
        name: "水平器",
        icon: "icon.png",
        genre: "ユーティリティ",
        description: "水平器です。<br>２つのモードがあり、線と面で使えます。<br>0を押すとそこが基準になります。",
        url: "http://p0.dl.playstation.net/p0/psns/psnschk.htm?a=psns%3Abrowse%3Fproduct%3DJM2594-NPPA00279_00-0000000000000000&type=psm",
        screenshots: [
            'SS/1.png',
            'SS/2.png',
            'SS/3.png'
        ],
        price: "52円",
        size: "3MB",
        players: "1人",
        language: "英語(アメリカ)",
        functions: [
            'コントローラーまたは、オンスクリーンコントローラー',
            'タッチスクリーン',
            'モーションセンサー',
            '位置データ'
        ],
        devices: {
            psvita: true,
            psvitatv: false,
            android: false
        }
    }
});