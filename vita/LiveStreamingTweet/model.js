new Vue({
    el: "#product",
    data: {
        name: "LiveStreamingTweet",
        icon: "icon.png",
        genre: "ソーシャルネットワーク",
        description: "遂にTwitterの「UserStream」対応アプリが登場！<br><br>・操作<br>左スティック : タイムライン高速スクロール、画像表示時に移動<br>右スティック : 画像表示時に拡大縮小<br>□ボタン :　画像表示時にダウンロード<br><br>・機能<br>ツイート（「,.」もしくは「、。」で改行可能）<br>複数画像添付ツイート<br>固定文機能（ツイート末尾に任意の文字を自動追加）<br>Retweet、Favorites、及びその削除、reply<br>ツイート削除<br>リンクシェア（引用RT、画像引用、その他URL）<br>リンクをブラウザでオープン<br>画像ダウンロード<br><br>・ユーザー情報の表示<br>ツイート、お気に入り、ヘッダー、プロフィールの表示<br><br>※本アプリは大容量の通信をします。",
        url: "http://p0.dl.playstation.net/p0/psns/psnschk.htm?a=psns%3Abrowse%3Fproduct%3DJM2594-NPPA00319_00-0000000000000000&type=psm",
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
        price: "309円",
        size: "4MB",
        players: "1人",
        language: "英語(アメリカ)/英語(イギリス)",
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