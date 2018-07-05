var app = getApp();
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [],
    imgUrl: [
      'https://www.wzyhome.date/test/1.jpg',
      'https://www.wzyhome.date/test/2.jpg',
      'https://www.wzyhome.date/test/3.jpg',
      'https://www.wzyhome.date/test/4.jpg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var images = [];
    images.push({
      'address':'https://www.wzyhome.date/test/1.jpg',
    });
    images.push({
      'address': 'https://www.wzyhome.date/test/2.jpg',
    });
    images.push({
      'address': 'https://www.wzyhome.date/test/3.jpg',
    });
    images.push({
      'address': 'https://www.wzyhome.date/test/4.jpg',
    });

    this.setData({
      images:images
    });
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
  
  },

  //查看图片
  viewImg: function(event) {
    var src = event.currentTarget.dataset.src;
    wx.previewImage({
      current: src,//当前显示图片的http链接
      urls: this.data.imgUrl//需要预览的图片http链接列表
    })
  }
})