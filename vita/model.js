var products = {};
new Vue({
    el: '#products',
    data: {
        items: [
            {
                name: 'LiveStreaming Tweet',
                dir: 'LiveStreamingTweet',
                url: 'LiveStreamingTweet/'
            },
            {
                name: '4PhotoTweet',
                dir: '4PhotoTweet',
                url: '4PhotoTweet/'
            },
            {
                name: 'StopWatchTimer',
                dir: 'StopWatchTimer',
                url: 'StopWatchTimer/'
            },
            {
                name: 'SpiritLevel',
                dir: 'SpiritLevel',
                url: 'SpiritLevel/'
            },
            {
                name: 'QR Editor',
                dir: 'QREditor',
                url: 'QREditor/'
            },
            {
                name: '加算器方式電卓',
                dir: 'Calculator',
                url: 'Calculator/'
            },
            {
                name: 'Mute Camera',
                dir: 'MuteCamera',
                url: 'MuteCamera/'
            },
            {
                name: '連写カメラ',
                dir: 'ContinuousShooting',
                url: 'ContinuousShooting/'
            },
            {
                name: 'Dot Maker',
                dir: 'DotMaker',
                url: 'DotMaker/'
            },
            {
                name: 'PhotoEdit',
                dir: 'PhotoEdit',
                url: 'PhotoEdit/'
            }

        ]
    },
    methods: {
        icon: function (dir) {
            return dir + "\\icon.png";
        }
    }
});