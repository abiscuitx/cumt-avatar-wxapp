# cumt-avatar-wxapp-115th

> 文档分析：Claude Sonnet 4.5
> 生成日期：2025 年 11 月 10 日

中国矿业大学115周年校庆头像戳小程序——矿小戳

- main 分支：主分支，通常与 prod 分支保持一致。
- prod 生产分支：线上运行的正式版本，自动拉取更新。
- release 开发分支：115th开发,代码归档。

| ![](https://raw.githubusercontent.com/abiscuitx/github-pic/main/web/20251110200524272_bb5eae546bf845266ae3121cdecea058.png) | ![](https://raw.githubusercontent.com/abiscuitx/github-pic/main/web/20251110200559250_2246797e425fd8a0b00c5504a50ea403.png) | ![](https://raw.githubusercontent.com/abiscuitx/github-pic/main/web/20251110200612499_52b91f32106947a6e6a81907eee31767.png) |
| :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |

## 项目简介

中国矿业大学115周年校庆头像戳小程序——矿小戳

项目特性：

- 主页：头像框选择、头像剪裁、合成下载
- 海报分享：10 种海报风格
- 关于我们：微信朋友圈样式
- 分包+自建图床：解决图片资源过多的问题

## 快速开始

## 项目架构

```
cumt-avatar-wxapp/
├── components/          # 组件目录
│   ├── image-cropper/   # 头像剪裁组件
│   └── image-synthesis/ # 图像合成组件
├── devdocs/             # 开发资料
├── packageA/            # 主页分包
│   ├── pages/
│   │   └── index/       # 主页
│   └── static/          # 主页静态资源
├── packageB/            # 分享分包
│   ├── pages/
│   │   └── share/       # 海报分享页
│   └── static/          # 分享静态资源
├── packageC/            # 关于分包
│   ├── pages/
│   │   └── about/       # 关于我们页
│   └── static/          # 关于静态资源
├── pages/               # 主包页面
│   └── index/           # 主入口
├── static/              # 主包静态资源
├── app.js               # 小程序逻辑
├── app.json             # 小程序配置
├── app.wxss             # 小程序样式
├── project.config.json  # 项目配置
├── project.private.config.json # 私有配置
└── sitemap.json         # 站点地图
```

### 核心功能/目录

#### 主页 (packageA)

头像框选择、剪裁和合成功能。

#### 海报分享 (packageB)

提供 10 种海报风格的分享功能。

#### 关于我们 (packageC)

微信朋友圈样式的关于页面。

## 开发说明

### 技术栈

- 微信小程序框架
- JavaScript
- WXML
- WXSS

## 许可证

本项目采用 Apache License 2.0 许可，详见仓库根目录的 `LICENSE` 文件。
