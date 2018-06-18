//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/swiper01.jpg',
      '/images/swiper02.jpg',
      '/images/swiper03.jpg'
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    /*
    proList: [
      {
        logo: '/images/pro_01.jpg',
        title: '精英贷',
        desc: "欢迎大家选购我们的产品",
      },
      {
        logo: "/images/pro_02.jpg",
        title: "月供贷",
        desc: "欢迎大家选购我们的产品",
      },
      {
        logo: "/images/pro_03.jpg",
        title: "房贷",
        desc: "欢迎大家选购我们的产品",
      },
    ],
    */
    proList: null,
  },

  onLoad: function(){
    this.setData({
      test:'01',
    })
    this.getProList();
  },

  toDetail: function(e){
    console.log(e);
    var index = e.currentTarget.dataset.index;
    console.log(index);
  },

  toAsk: function(e){

  },

  getProList:function(){
    wx.request({
      url: 'http://j211919x31.imwork.net:3306',
      method: 'GET',
      success: function(res){
        console.log(res);
      }
    })
  }

})