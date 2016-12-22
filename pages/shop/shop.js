Page({
  data: {
    imgUrls: [
      'http://fakeimg.pl/420x252/', // (420/20) * 12 = 252
      'http://fakeimg.pl/420x252/',
      'http://fakeimg.pl/420x252/'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

  onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      desc: '自定义分享描述',
      path: '/page/user?id=123'
    }
  },

  onReachBottom: function () {
    console.log('到达底部')
  }
});