//app.js
// const AV = require('./utils/av-weapp-2.0.0-beta.1.js')

App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // AV.init({
    //   appId: "JfOG2qyOtPT8YJn2inEdXJyu-gzGzoHsz",
    //   appKey: "bwdd6wOL2z5NVMtc8OMjnA1B",
    // })

  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null,
    testInfo:'hhhhhhhhhhhhhhhhhhhhhhhhh'
  }
})