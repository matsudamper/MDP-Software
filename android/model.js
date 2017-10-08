var products = {};
new Vue({
    el: '#products',
    data: {
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
                name: 'SmallTimer',
                dir: 'SmallTimer',
                url: 'https://play.google.com/store/apps/details?id=net.matsudamper.smalltimer'
            },
            {
                name: 'ふりったー',
                dir: 'Flitter',
                url: 'https://play.google.com/store/apps/details?id=net.matsudamper.kanon'
            },
            {
                name: 'HORIKAESHI',
                dir: 'HORIKAESHI',
                url: 'https://play.google.com/store/apps/details?id=net.matsudamper.horikaeshi'
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
                name: '淀橋',
                dir: 'Yodobashi',
                url: 'https://play.google.com/store/apps/details?id=net.matsudamper.yodobashi'
            },
            {
                name: 'Small nico',
                dir: 'Small2525',
                url: 'https://play.google.com/store/apps/details?id=net.matsudamper.small2525'
            },
            {
                name: 'プリセットカレンダー',
                dir: 'PresetCalendar',
                url: 'https://play.google.com/store/apps/details?id=net.matsudamper.presetcalendar'
            }
        ]
    },
    methods: {
        icon: function (dir) {
            return dir + "\\icon.png";
        }
    }
});