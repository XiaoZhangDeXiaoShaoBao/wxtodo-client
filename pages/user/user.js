var config = require('../../config');

Page({

  data: {
    avatar: '',
    name: ''
  },

<<<<<<< HEAD
  onShow: function () {
    this.setData(getApp().globalData.userInfo);
=======
  onLoad: function () {
    this.setData({
      avatar: wx.getStorageSync('avatar') || 'https://yunlaiwu0.cn-bj.ufileos.com/teacher_avatar.png',
      name: wx.getStorageSync('name') || ''
    });
  },

  //未点完成失去焦点复原（change优先于blur触发）
  blurName: function(e) {
    this.setData({ name: wx.getStorageSync('name') });
>>>>>>> 78da45adc187eaafb0a70ff3e0dd9af866db7fe8
  },

  changeName: function(e) {
    var name = e.detail.value.trim();
    var that = this;

    if(name) {

      wx.showLoading({
        title: '更新用户信息',
        mask: true
      });
      
      getApp().request({
        url: '/user',
        method: 'patch',
        data: {
          name: name
        },
        success: function() {
          wx.hideLoading();
          getApp().globalData.userInfo.name = name;
          that.data.name = name;
        }
      });
    }
<<<<<<< HEAD
    else {
      this.setData({
        name: this.data.name
      });
    }
=======
>>>>>>> 78da45adc187eaafb0a70ff3e0dd9af866db7fe8

  },

  changeAvatar: function(e) {

    var that = this;
    
    wx.chooseImage({
      success: function (res) {

        wx.showLoading({
          title: '更新用户信息',
          mask: true
        });

        wx.uploadFile({
          header: {
            skey: wx.getStorageSync('skey')
          },
          url: config.host + '/user/avatar',
          filePath: res.tempFilePaths[0],
          name: 'avatar',
          success: function(res) {
            getApp().request({
              url: '/user',
              method: 'patch',
              data: {
                avatar: res.data
              },
              success: function () {
                wx.hideLoading();
                getApp().globalData.userInfo.avatar = res.data;
                that.setData({ avatar: res.data });
              }
            });

          }
        });
        
      }
    });
  }
})