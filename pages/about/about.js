// pages/about/about.js
Page({
    onShareAppMessage: function () {
        return {
          title: "点击更换中国矿业大学专属头像",
          desc: "给你的头像盖个矿大专属戳",
          imageUrl: "/static/share_img.jpg",
          path: "/pages/index/index",
          success: function (e) {
            console.log(e);
          },
        };
      },
      data: {
        // 预览图片列表
        files: [
          '../../static/index/static/about/wx01.png',
          '../../static/index/static/about/wx02.png',
          '../../static/index/static/about/wx03.png',
          '../../static/index/static/about/wx04.png',
        ],
    },
      onShareTimeline: function () {
        return {
          title: "点击更换中国矿业大学专属头像",
          desc: "给你的头像盖个矿大专属戳",
            imageUrl: "/static/share_img.jpg",
          path: "/pages/index/index",
          success: function (e) {
            console.log(e);
          },
        };
      },
      previewImage: function(e) {
        console.log(e)
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files, // 需要预览的图片http链接列表
            showmenu:true
        })
    },
    copy:function(e){
      console.log(e)
      wx.setClipboardData({
        data: e.currentTarget.id,
      })
    }
})