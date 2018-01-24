new Vue({
    el: "#product",
    data: {
        name: "Photo Edit",
        icon: "icon.png",
        genre: "写真",
        description: "複数の画像をつなげて保存、ツイートができます。<br>画像のピクセル単位でのカット、ピクセル指定でのリサイズができます。<br>（画像のサイズは同じでないといけません。）",
        url: "http://p0.dl.playstation.net/p0/psns/psnschk.htm?a=psns%3Abrowse%3Fproduct%3DJM2594-NPPA00254_00-0000000000000000&type=psm",
        screenshots: [
            'SS/1.png',
            'SS/2.png',
            'SS/3.png',
            'SS/4.png',
            'SS/5.png',
            'SS/6.png',
            'SS/7.png',
            'SS/8.png',
            'SS/9.png',
            'SS/10.png'
        ],
        price: "129円",
        size: "4MB",
        players: "1人",
        language: "日本語/英語(アメリカ)",
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