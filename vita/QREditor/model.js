new Vue({
    el: "#product",
    data: {
        name: "QR Editor",
        icon: "icon.png",
        genre: "ユーティリティ",
        description: "QRコードを読み取り、作成、QRコードに含まれたURLを抽出してブラウザを開くことができます。<br><br>QRコードをカメラを使ってスキャンします。<br>読み込みが終わったら自動で止まります。<br>本体に保存されたQRコードからもスキャンすることができます。<br><br>作成したQRコードを本体に保存できます。<br><br>これらはオフラインで使用できます。<br>※一部日本語などを含むQRコードではその部分が文字化けする場合があります。<br><br>QRコード機能はZXingを利用しています。<br>ZXingライセンスはApache License, Version 2.0に基づいています。 http://www.apache.org/licenses/LICENSE-2.0",
        url: "http://p0.dl.playstation.net/p0/psns/psnschk.htm?a=psns%3Abrowse%3Fproduct%3DJM2594-NPPA00268_00-0000000000000000&type=psm",
        screenshots: [
            'SS/1.png',
            'SS/2.png',
            'SS/3.png',
            'SS/4.png',
            'SS/5.png',
            'SS/6.png',
            'SS/7.png',
            'SS/8.png'
        ],
        price: "52円",
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