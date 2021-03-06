// miniprogram/pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentArr:Object
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(JSON.parse(options.comments))
    var obj = JSON.parse(options.comments);
    this.setData({
      commentArr:obj
    })
  },
  /**
   * 评论详情页
   */
  toDetailComment(e){
    console.log(e)
    let commentId = e.target.dataset.index
    let comments = JSON.stringify(this.data.commentArr)
    wx.navigateTo({
      // url: '/pages/commentDetail/commentDetail?commentId=' + commentId + '&commentArr=' + this.data.commentArr,
      url: '/pages/commentDetail/commentDetail?commentId=' + commentId + '&commentArr=' + comments
    })
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