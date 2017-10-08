var products = {};
new Vue({
    el: '#products',
    data: {
        items: [
            {
                name: 'HORIKAESHI',
                dir: 'HORIKAESHI',
                url: 'https://www.microsoft.com/ja-jp/store/p/horikaeshi/9nblggh528nh'
            },
            {
                name: 'OneMio',
                dir: 'OneMio',
                url: 'https://www.microsoft.com/ja-jp/store/p/onemio/9nblggh51wj7'
            }
        ]
    },
    methods: {
        icon: function (dir) {
            return dir + "\\icon.png";
        }
    }
});