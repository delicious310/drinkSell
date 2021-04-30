// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    color: '#000',
    background: '#f8f8f8',
    show: true,
    animated: false,
    statusBarHeight: 0, //标题栏高度
    navSixList:[{
      imgurl:'../../images/weibo.png',
      title:'微博'
    },
    {
      imgurl:'../../images/zongyi.png',
      title:'综艺'
    }
  ]
  },

  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
          let that = this
          wx.getSystemInfo({
            success(res) {
              that.statusBarHeight = res.statusBarHeight
              that.dpr = res.devicePixelRatio
            }
          })
  },
  goWeibo(){
    wx.navigateToMiniProgram({
      appId: 'wx9074de28009e1111',
      path: 'pages/index/index?blog_id=4622289448731702',
      envVersion: 'release',
      success(res) {
        // 打开成功
      }
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})