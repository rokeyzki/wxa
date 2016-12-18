Page({
  onLoad: function(){
    console.info("css1 onLoad")
  },

  toDemo1: function() {
    wx.navigateTo({
      url: './demo1/demo1'
    })
  },
})