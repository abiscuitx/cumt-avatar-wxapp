// pages/index/index.js
Page({
    /* 转发小程序 */
    onShareAppMessage: function () {
        return {
            title: "点击更换中国矿业大学专属头像",
            desc: "给你的头像盖个矿大专属戳",
            imageUrl: "/static/share_img.jpg",
            path: "/pages/index/index",
            success: function (e) {},
        };
    },
    onShareTimeline: function () {
        return {
            title: "点击更换中国矿业大学专属头像",
            desc: "给你的头像盖个矿大专属戳",
            imageUrl: "/static/share_img.jpg",
            path: "/pages/index/index",
            success: function (e) {},
        };
    },
    /* 初始数据 */
    data: {
        src: '../../static/index/empty.png',
        width: 250,
        height: 250,
        crop: false,
        statusBarHeight: 0,
        uploadImg: '../../static/index/empty.png',
        chooseImg: '../../static/index/frame/cumt/01研矿大校风.png',
        makeImg: '../../static/index/frame/cumt/01研矿大校风.png',
        imageSrc: null,
        isIphoneX: false,
        cate: 'cumt',
        cates: [{
                id: "cumt",
                name: "2023矿大迎新款",
            },
            {
                id: "school",
                name: "2023学院迎新款",
            },
            // {
            //     id: "history",
            //     name: "校庆纪念款",
            // }
        ],
        chooseImgs: {
            cumt: [{
                name: "矿大校风",
                src: "../../static/index/frame/cumt/01研矿大校风.png",
            }, {
                name: "矿大校训",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/02研矿大校训.png",
            }, {
                name: "矿大校歌",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/03研矿大校歌.png",
            }, {
                name: "矿大精神",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/04研矿大精神.png",
            }, {
                name: "迎新01",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/05学迎新01.png",
            }, {
                name: "迎新02",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/06学迎新02.png",
            }, {
                name: "迎新03",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/07学迎新03.png",
            }, {
                name: "迎新04",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/08学迎新04.png",
            }, {
                name: "黑天鹅",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/09研黑天鹅.png",
            }, {
                name: "小鹿",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/10研鹿.png",
            }, {
                name: "鸵鸟",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/11研鸵鸟.png",
            }, {
                name: "图书馆1",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/12融图书馆.png",
            }, {
                name: "图书馆2",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/14融图书馆.png",
            }, {
                name: "东门",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/13融东门.png",
            }, {
                name: "虹桥",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/15融虹桥.png",
            }, {
                name: "焦作路矿学堂",
                src: "https://pic.atcumt.com/cumt-avatar/index/frame/cumt/16融焦作路矿学堂.png",
            }],
            school: [{
                    name: "矿业学院",
                    src: "../../static/index/frame/school/16矿业学院.png",
                }, {
                    name: "矿业学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/17矿业学院.png",
                },
                {
                    name: "安全学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/29安全学院.png",
                }, {
                    name: "安全学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/30安全学院.png",
                },{
                    name: "力土学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/14力土学院.png",
                }, {
                    name: "力土学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/15力土学院.png",
                }, {
                    name: "机电学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/21机电学院.png",
                }, {
                    name: "机电学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/22机电学院.png",
                }, {
                    name: "信控学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/03信控学院.png",
                }, {
                    name: "信控学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/04信控学院.png",
                },
                {
                    name: "资源学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/01资源学院.png",
                }, {
                    name: "资源学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/02资源学院.png",
                }, {
                    name: "环测学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/23环测学院.png",
                }, {
                    name: "电气学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/26电气学院.png",
                }, {
                    name: "电气学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/27电气学院.png",
                }, {
                    name: "能动学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/10能源学院.png",
                }, {
                    name: "能动学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/11能源学院.png",
                }, {
                    name: "材物学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/28材物学院.png",
                }, {
                    name: "数学学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/07数学学院.png",
                }, {
                    name: "计算机院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/20计算机院.png",
                }, {
                    name: "经管学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/18经管学院.png",
                }, {
                    name: "经管学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/19经管学院.png",
                }, {
                    name: "公管学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/24公管学院.png",
                }, {
                    name: "公管学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/25公管学院.png",
                }, {
                    name: "马克思院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/12马克思院.png",
                }, {
                    name: "马克思院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/13马克思院.png",
                },
                {
                    name: "外文学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/05外文学院.png",
                }, {
                    name: "设计学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/08设计学院.png",
                },
                {
                    name: "设计学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/31设计学院.png",
                }, {
                    name: "人文学院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/09人文学院.png",
                }, {
                    name: "孙越崎院",
                    src: "https://pic.atcumt.com/cumt-avatar/index/frame/school/06孙越崎院.png",
                },
            ],
            //   history: [{
            //       name: "校庆纪念",
            //       src: "../../static/index/frame/history/110th.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th01.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th02.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th03.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th04.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th05.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th06.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th07.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th08.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th09.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th10.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th11.png",
            //     }, {
            //       name: "2020校庆",
            //       src: "../../static/index/frame/history/2020111th12.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th01.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th02.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th03.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th04.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th05.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th06.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th07.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th08.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th09.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th10.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th11.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th12.png",
            //     }, {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th13.png",
            //     },
            //     {
            //       name: "2021校庆",
            //       src: "../../static/index/frame/history/2021112th14.png",
            //     },
            //   ],
        }
    },
    /*iPhone X（解决底部横杠遮挡问题）--监听页面加载*/
    onLoad: function () {
        this.setData({
            "isIphoneX": this.isIphoneX(),
            "statusBarHeight": wx.getSystemInfoSync().statusBarHeight
        })
        this.makeAvatar(this.data.makeImg)
    },
    isIphoneX() {
        let info = wx.getSystemInfoSync();
        if (/iPhone X/i.test(info.model)) {
            return true;
        } else {
            return false;
        }
    },
    /*切换列表*/
    handleCate(e) {
        this.setData({
            cate: e.target.dataset.id
        })
    },
    /*切换头像框*/
    handleAvatar(e) {
        this.setData({
            chooseImg: e.target.dataset.avatar
        })
        this.makeAvatar(this.data.chooseImg)
    },
    /* 生成头像函数 */
    makeAvatar: function (url) {
        if (url.includes("https")) {
            var that = this
            wx.downloadFile({
                url: url,
                success(res) {
                    that.drawAvatar(res.tempFilePath)
                },
                fail(res) {
                    wx.showToast({
                        title: '网络错误，加载失败',
                        icon: 'none'
                    });
                }
            })
        } else {
            this.drawAvatar(url)
        }
    },
    /*绘制头像*/
    drawAvatar(url) {
        this.setData({
            makeImg: url
        }, () => {
            let context = wx.createCanvasContext('myAvatar', this);
            context.lineJoin = "round";
            context.lineWidth = 20;
            context.clearRect(0, 0, 200, 200)
            context.drawImage(this.data.uploadImg, 0, 0, 200, 200);
            context.draw(true);
            context.save();
            context.drawImage(this.data.makeImg, 0, 0, 200, 200);
            context.draw(true);
            context.save();
            setTimeout(() => {
                wx.canvasToTempFilePath({
                    canvasId: 'myAvatar',
                    success: (res) => {
                        this.setData({
                            imageSrc: res.tempFilePath,
                        });
                    },
                    fail: (res) => {
                        wx.showToast({
                            title: '请重新选择',
                        })
                    }
                });
            }, 200);
        })
    },
    /* 获取token */
    get_token() {
        let that = this
        wx.request({
            url: 'pic.abiscuit.net/static///wetoken.abiscuit.net/token?name=wetoken',
            method: 'get',
            data: {

            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success(res) {
                that.data.token = res.data.token
            }
        })
    },
    /* 检查敏感图片 */
    check(url) {
        let that = this
        wx.request({
            url: 'https://wechat.abiscuit.net?access_token=' + that.data.token,
            method: 'post',
            data: {
                openid: 'OPENID',
                scene: 1,
                version: 2,
                media_url: url,
                media_type: 2
            },
            header: {
                'content-type': 'application/raw' // 默认值
            },
            success(res) {}
        })
        return true
    },
    cancel() {
        this.setData({
            crop: false,
        })
    },
    reset() {
        this.selectComponent("#image-cropper").imgReset()
    },
    cut(e) {
        this.selectComponent("#image-cropper").getImg((res) => {
            this.setData({
                uploadImg: res.url,
                crop: false,
            }, () => {
                this.makeAvatar(this.data.makeImg)
            })
        })
    },
    /*上传剪裁头像*/
    handleUpload() {
        let that = this;
        this.get_token();
        wx.chooseMedia({
            count: 1, // 默认9
            mediaType: ['image'],
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: (res) => {
                wx.showLoading({
                    title: '图片加载中'
                })
                let status = that.check(res.tempFiles[0].tempFilePath)
                if (status) {
                    this.setData({
                        crop: true,
                        src: res.tempFiles[0].tempFilePath,
                    })
                    wx.hideLoading()
                } else {
                    wx.showToast({
                        title: '图片存在风险，请重新上传'
                    })
                }
            }
        })
    },
    recrop() {
        this.setData({
            crop: true,
        })
    },
    /*保存头像*/
    handleSaveImg() {
        wx.canvasToTempFilePath({
            canvasId: 'myAvatar',
            success: res => {
                wx.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: res => {
                        wx.showToast({
                            title: '已保存到相册'
                        })
                        setTimeout(() => {
                            /*跳转分享页面*/
                            wx.canvasToTempFilePath({
                                canvasId: 'myAvatar',
                                success: function (res) {
                                    var pic = res.tempFilePath;
                                    wx.setStorageSync('pic', pic)
                                    wx.navigateTo({
                                        url: '/pages/share/share',
                                    })
                                }
                            });
                        }, 200);
                    },
                    fail(res) {
                        wx.showToast({
                            title: '保存失败',
                            icon: 'none'
                        })
                    }
                })
            }
        })
    },
    /*跳转关于页面*/
    about() {
        wx.navigateTo({
            url: '/pages/about/about',
        })
    },
})