new Vue({
    el: "#product",
    data: {
        name: "Mute Camera",
        icon: "icon.png",
        genre: "写真",
        description: "消音カメラです。<br />前/後ろのカメラで撮影できます。",
        url: "http://p0.dl.playstation.net/p0/psns/psnschk.htm?a=psns%3Abrowse%3Fproduct%3DJM2594-NPPA00275_00-0000000000000000&type=psm",
        screenshots: [
            'SS/1.png',
            'SS/2.png',
            'SS/3.png'
        ],
        price: "129円",
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