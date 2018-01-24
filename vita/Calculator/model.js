new Vue({
    el: "#product",
    data: {
        name: "加算器方式電卓",
        icon: "icon.png",
        genre: "ユーティリティ",
        description: "電卓です。<br>加算器方式電卓を参考に作られています。<br><br>何回かの動作ごとにメッセージが入ります。<br>アプリ内で課金すると表示されなくなります。<br>動作をご確認の上ご購入ください。",
        url: "http://p0.dl.playstation.net/p0/psns/psnschk.htm?a=psns%3Abrowse%3Fproduct%3DJM2594-NPPA00241_00-0000000000000000&type=psm",
        screenshots: [
            'SS/1.png',
            'SS/2.png',
            'SS/3.png'
        ],
        price: "無料/52円(アプリ内課金)",
        size: "3MB",
        players: "1人",
        language: "日本語",
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