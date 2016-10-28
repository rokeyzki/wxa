Page({
  onShow: function(){
    console.info("leanCloud onShow")
  },

  toFoo1: function() {
    wx.navigateTo({
      url: './foo1/foo1'
    })
  },
  
  toFoo2: function() {
    wx.navigateTo({
      url: './foo2/foo2'
    })
  },
})