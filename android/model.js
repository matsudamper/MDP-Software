var products = {};
new Vue({
    el: '#categories',
    data: {
        categories: [
            {
                title: "SONY Small Application",
                dir: "SONYSmallApp",
                items: [
                    {
                        name: 'SmallMemo',
                        dir: 'smallmemo',
                        url: 'https://play.google.com/store/apps/details?id=com.matsudamper.smallmemopad'
                    },
                    {
                        name: 'SmallTweet',
                        dir: 'SmallTweet',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.smalltweet'
                    },
                    {
                        name: 'SmallTimer',
                        dir: 'SmallTimer',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.smalltimer'
                    },
                    {
                        name: 'Small Lamp',
                        dir: 'SmallLamp',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.smalllamp'
                    },
                    {
                        name: 'Small Tube',
                        dir: 'SmallTube',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.smalltube'
                    },
                    {
                        name: 'Small nico',
                        dir: 'Small2525',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.small2525'
                    }
                ]
            },
            {
                title: "Small Application for All Device",
                dir: "SmallAppForAllDevice",
                items: [
                    {
                        name: '履歴ランチャー',
                        dir: 'RecentLauncher',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.recentlauncher',
                        description: "スモールアプリのランチャーを再現",
                        date: "2018-5-5"
                    },
                    {
                        name: 'Small Tube for All Device',
                        dir: 'SmallTube',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.smallapp.smalltube',
                        description: "バックグラウンドでYoutubeを再生"
                    },
                    {
                        name: 'Small Timer for All Device',
                        dir: 'SmallTimer',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.smallapp.smalltimer',
                        description: "横長で邪魔にならないタイマー"
                    },
                    {
                        name: 'Small Lamp for All Device',
                        dir: 'SmallLamp',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.smallapp.smalllamp'
                    },
                    {
                        name: 'Small Browser for All Device',
                        dir: 'SmallBrowser',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.smallapp.smallbrowser',
                        description: "他のことをしながら調べ物ができる"
                    },
                    {
                        name: 'フロートウィジェット',
                        dir: 'FloatWidget',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.smallapp.smallwidget',
                        description: "ウィジェットをスモールアプリ化させる機能を再現",
                    }
                ]
            },
            {
                title: "Other Products",
                dir: "Others",
                items: [
                    {
                        name: 'One Mio',
                        dir: 'OneMio',
                        url: 'https://play.google.com/store/apps/details?id=com.matsudamper.onemio'
                    },
                    {
                        name: 'Tweet Bookark',
                        dir: 'TweetBookark',
                        url: 'https://play.google.com/store/apps/details?id=com.matsudamper.TweetBookmark'
                    },
                    {
                        name: 'Rotate Screenshot',
                        dir: 'RotateScreenshot',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.rotatescreenshot'
                    },
                    {
                        name: 'PhotoEditRotate',
                        dir: 'PhotoEditRotate',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.photorotate'
                    },
                    {
                        name: 'ふりったー',
                        dir: 'Flitter',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.kanon',
                        description: "フリック操作のTwitterクライアント"
                    },
                    {
                        name: 'HORIKAESHI',
                        dir: 'HORIKAESHI',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.horikaeshi'
                    },
                    {
                        name: '淀橋',
                        dir: 'Yodobashi',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.yodobashi'
                    },
                    {
                        name: 'プリセットカレンダー',
                        dir: 'PresetCalendar',
                        url: 'https://play.google.com/store/apps/details?id=net.matsudamper.presetcalendar',
                        description: "一日のまとまった予定が一気に追加できる"
                    }
                ]
            }
        ]
    },
    methods: {
        icon: function (category_dir, dir) {
            return category_dir + "\\" + dir + "\\icon.png";
        }
    }
});
(function () {
    var urlHash = location.hash;
    if (urlHash) {
        document.querySelector(urlHash).scrollIntoView(true);
    }
})()