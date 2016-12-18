Page({
  onLoad: function(){
    console.info("ui onLoad")
  },

  toCSS1: function() {
    wx.navigateTo({
      url: './css1/css1'
    })
  },

  toCSS6: function() {
    wx.navigateTo({
      url: './css6/css6'
    })
  },
})