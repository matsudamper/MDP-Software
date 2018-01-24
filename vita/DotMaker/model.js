new Vue({
    el: "#product",
    data: {
        name: "Dot Maker",
        icon: "icon.png",
        genre: "写真",
        description: "1×1～32×32のドット絵を作成、本体に保存できます。<br>セーブすればまた後で作業を続けることができます。<br><br>機能<br>９つのパレット<br>Lと進むボタンで消しゴム<br>Rと進むでスポイト<br>グリッドを表示<br>背景に好きな画像を貼り付ける",
        url: "http://p0.dl.playstation.net/p0/psns/psnschk.htm?a=psns%3Abrowse%3Fproduct%3DJM2594-NPPA00262_00-0000000000000000&type=psm",
        screenshots: [
            'SS/1.png',
            'SS/2.png',
            'SS/3.png',
            'SS/4.png',
            'SS/5.png'
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