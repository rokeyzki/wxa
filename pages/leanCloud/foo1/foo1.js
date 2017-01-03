const app = getApp();
// const AV = require('../../../utils/av-weapp-2.0.0-beta.1.js');

Page({
  onShow: function(options) {
    console.info('foo1 onShow')

    // console.dir(app.globalData)

    // const query = new AV.Query('FooClass');
    // console.dir(query)
    
    // // 查询
    // query.get('573ecb4c2e958a00661de8c4').then(function (data) {
    //   console.info('LeanCloud 查询成功')
    //   console.dir(data)
    // }, function (error) {
    //   console.error('LeanCloud 查询失败')
    //   console.error(error)
    // });

    // 保存
    // var FooClass = AV.Object.extend('FooClass');
    // var fooClass = new FooClass();
    // fooClass.set('fieldOne','工作');
    // fooClass.save().then(function (data) {
    //   console.info('LeanCloud 保存成功')
    //   console.dir(data.id);
    // }, function (error) {
    //   console.error('LeanCloud 保存失败')
    //   console.error(error);
    // });

  }
})