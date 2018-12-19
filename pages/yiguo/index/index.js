//index.js
//获取应用实例
var app = getApp()

Page({
  data: {
    diaries: [{
      meta: { // 内容元数据
        cover: "http://m.chanyouji.cn/index-cover/64695-2679221.jpg?imageView2/1/w/620/h/330/format/jpg",
        avatar: "https://pic4.zhimg.com/e515adf3b_xl.jpg",
        title: "此刻静好，愿幸福长存",
        meta: "2016.10.17",
        create_time: "2016.10.18 11:57:27",
        nickName: "肥肥的小狗熊",
      }
    }, {
      meta: { // 内容元数据
        cover: "http://m.chanyouji.cn/articles/625/ca9e50f74e273041e3a399bf5528f7b5.jpg?imageView2/1/w/620/h/330/format/jpg",
        avatar: "https://pic4.zhimg.com/e515adf3b_xl.jpg",
        title: "梦想实现的地方-马达加斯加第二季",
        meta: "2013.8.10",
        create_time: "2016.10.18 11:57:27",
        nickName: "小闹钟",
      }
    }],
    toView: "",
    motto: 'MiHome_Store',
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 100,
    newgoods: [{
      "hg_pic": "http://img14.yiguoimg.com/e/ad/2016/160914/585749449477366062_260x320.jpg"
    }, {
      "hg_pic": "http://img09.yiguoimg.com/e/ad/2016/161011/585749449909281099_260x320.jpg"
    }, {
      "hg_pic": "http://img12.yiguoimg.com/e/ad/2016/160914/585749449480249646_260x320.jpg"
    }],
    hotgoods: [{
        "more_pic": "http://img13.yiguoimg.com/e/albums/2017/170630/153403897791357662_800x468.jpg"
      }, {
        "more_pic": "http://img14.yiguoimg.com/e/albums/2017/170629/153403897729786589_800x468.jpg",
      }, {
        "more_pic": " http://img12.yiguoimg.com/e/albums/2017/170626/153403897618375386_596x379.jpg",
      }, {
        "more_pic": " http://img12.yiguoimg.com/e/albums/2017/170621/153403897468003029_800x468.jpg",
      }



    ],
    banner_list: [{
        "banner": [{
            "pic_url": "../../../images/banner01.png",
          },
          {
            "pic_url": "../../../images/banner02.png",
          },
          {
            "pic_url": "../../../images/banner03.png",
          }
        ]
      },
      {
        "banner": []
      }
    ]
  },
  onPullDownRefresh: function() {
    console.log('onPullDownRefresh')
  },
  scroll: function(e) {
    if (this.data.toView == "top") {
      this.setData({
        toView: ""
      })
    }
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  tap: function() {
    this.setData({
      toView: "top"
    })
  },
  onLoad: function() {
    console.log("微信商城开发(欢迎合作)")
    console.log("微信号：k1009756987")
    console.log("博客：htmlk.cn ")
    console.log("QQ群：654226989 ")
  }
})