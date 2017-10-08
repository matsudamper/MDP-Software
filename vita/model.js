var products = {};
new Vue({
    el: '#products',
    data: {
        items: [
            {
                name: 'LiveStreaming Tweet',
                dir: 'LiveStreamingTweet',
                url: 'http://www.jp.playstation.com/psn/psm/title/#!0531'
            },
            {
                name: '4PhotoTweet',
                dir: '4PhotoTweet',
                url: 'http://www.jp.playstation.com/psn/psm/title/#!0486'
            },
            {
                name: 'StopWatchTimer',
                dir: 'StopWatchTimer',
                url: 'http://www.jp.playstation.com/psn/psm/title/#!0465'
            },
            {
                name: 'SpiritLevel',
                dir: 'SpiritLevel',
                url: 'http://www.jp.playstation.com/psn/psm/title/#!0471'
            },
            {
                name: 'QR Editor',
                dir: 'QREditor',
                url: 'http://www.jp.playstation.com/psn/psm/title/#!0450'
            },
            {
                name: '加算器方式電卓',
                dir: 'Calculator',
                url: 'http://www.jp.playstation.com/psn/psm/title/#!0400'
            },
            {
                name: 'Mute Camera',
                dir: 'MuteCamera',
                url: 'http://www.jp.playstation.com/psn/psm/title/#!0463'
            },
            {
                name: '連写カメラ',
                dir: 'ContinuousShooting',
                url: 'http://www.jp.playstation.com/psn/psm/title/#!0462'
            },
            {
                name: 'Dot Maker',
                dir: 'DotMaker',
                url: 'http://www.jp.playstation.com/psn/psm/title/#!0443'
            },
            {
                name: 'PhotoEdit',
                dir: 'PhotoEdit',
                url: 'http://www.jp.playstation.com/psn/psm/title/#!0426'
            }

        ]
    },
    methods: {
        icon: function (dir) {
            return dir + "\\icon.png";
        }
    }
});