new Vue({
    el: "#product",
    data: {
        name: "連写カメラ",
        icon: "icon.png",
        genre: "写真",
        description: "12連写できるカメラです。<br>10～1000msの間で撮影間隔が設定できます。（多少ずれます）<br><br>本体に選んで保存できます。",
        url: "http://p0.dl.playstation.net/p0/psns/psnschk.htm?a=psns%3Abrowse%3Fproduct%3DJM2594-NPPA00274_00-0000000000000000&type=psm",
        screenshots: [
            'SS/1.png',
            'SS/2.png',
            'SS/3.png',
            'SS/4.png',
            'SS/5.png',
            'SS/6.png'
        ],
        price: "77円",
        size: "3MB",
        players: "1人",
        language: "英語(アメリカ)",
        functions: [
            'コントローラーまたは、オンスクリーンコントローラー',
            'タッチスクリーン',
            'カメラ'
        ],
        devices: {
            psvita: true,
            psvitatv: false,
            android: false
        }
    }
});