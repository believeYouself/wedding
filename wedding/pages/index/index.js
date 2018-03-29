//index.js
//获取应用实例
const app = getApp()
//var server = app.globalData.server;
var appid = app.globalData.appid;

Page({
  data: {
    userInfo: {},
    isPlayingMusic: true,
    movies: [
      '/images/weddingDress1.jpg',
      '/images/weddingDress2.jpg',
      '/images/weddingDress3.jpg'
    ],
    music_url: 'http://dl.stream.qqmusic.qq.com/C400000VOBAv1zQol0.m4a?vkey=44CEAA9A1AF0DD6D6EE0E01C9AB46CE34F0A304AB3CC5205744E4DC4661340CA2D62AFD0E6D6E11CAD1BDE5F474B5C65C648661DD8FB4A37&guid=806240880&uin=1660493233&fromtag=66'
  },
  onLoad: function () {
    var that = this

    wx.getUserInfo({
      success: function (res) {
        that.setData({
          userInfo: res.userInfo
        })
      }
    }),
    wx.playBackgroundAudio({
      dataUrl: that.data.music_url,
      title: '',
      coverImgUrl: ''
    })
    /*
    wx.request({
      url: server,
      method: 'GET',
      data: { 'c': 'info', 'appid': appid},
      header: {
        'Accept': 'application/json'
      },
      success: function(res) {
        // console.log(res.data)
        wx.playBackgroundAudio({
          dataUrl: res.data.music_url,
          title: '',
          coverImgUrl: ''
        })

        that.setData({ 
          mainInfo: res.data.mainInfo,      
          slideList: res.data.slideList,      
          music_url: res.data.music_url
        });
      }  
    })

    wx.setClipboardData({
      data: '7mdRbr48sM',
      success: function(res) {
        wx.getClipboardData({
          success: function(res) {
            // console.log(res.data) // data
          }
        })
      }
    })
  */
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  onShareAppMessage: function (res) {
    var that = this;
    //console.log(that.data);
    return {
      title: that.data.mainInfo.share,
      imageUrl: that.data.mainInfo.thumb,
      path: 'pages/index/index',
      success: function (res) {
        wx.showToast({
          title: '分享成功',
        })
      },
      fail: function (res) {
        // 转发失败
        wx.showToast({
          title: '分享取消',
        })
      }
    }
  },

  //播放音乐与暂停音乐切换
  play: function (event) {
    if (this.data.isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: this.data.music_url,
        title: '',
        coverImgUrl: ''
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  },
})
