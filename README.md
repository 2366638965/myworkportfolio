---
AIGC:
    Label: "1"
    ContentProducer: 001191440300708461136T1XGW3
    ProduceID: 3a7ea5f94fc086f71960e80317131bf0_2e78e4e8ac1111f1b128525400f8a581
    ReservedCode1: e33uV2OIzVqrG/VYD493eBNMiGJ0loMK8U37q6rYYCpZjnyT+zzS5SDo3ea+uodzNF9sEkxw9cjahBtY0+Pi91opNv9v5o0/9k60xMkgpQiU+uNmMM74kW7XFrD6FFSVNnXj6urj9Nqp3VAZNb8fWIqDQ0obO4jWQe7wUI8RWd2R/PGBht4acZoS1XY=
    ContentPropagator: 001191440300708461136T1XGW3
    PropagateID: 3a7ea5f94fc086f71960e80317131bf0_2e78e4e8ac1111f1b128525400f8a581
    ReservedCode2: e33uV2OIzVqrG/VYD493eBNMiGJ0loMK8U37q6rYYCpZjnyT+zzS5SDo3ea+uodzNF9sEkxw9cjahBtY0+Pi91opNv9v5o0/9k60xMkgpQiU+uNmMM74kW7XFrD6FFSVNnXj6urj9Nqp3VAZNb8fWIqDQ0obO4jWQe7wUI8RWd2R/PGBht4acZoS1XY=
---

# 作品集展示网站（My Work Portfolio）

个人电商视觉设计 / 短视频剪辑作品集静态展示网站。纯前端实现，无需服务器，双击即可本地浏览。

## 板块内容

- **设计**
  - 主图：14 个产品系列（冰格、小米、小鱼干、山楂、枸杞、礼盒、美妆、蒜蓉主图、裤子、钙片、陈皮、鹿架-空气凤梨、黑蒜、鼠标）等，约 123 张。
  - 菜单：长图展示。
  - 详情页：长图展示。
- **视频剪辑**：8 个短视频作品，点击卡片弹出播放框，按视频原始尺寸播放。

## 目录结构

```
作品/
├── index.html          # 页面入口（导航 / 筛选 / 网格 / 模态框）
├── README.md
├── css/
│   └── style.css       # 样式（轻拟物留白风格）
├── js/
│   └── app.js          # 素材清单 + 交互逻辑
├── 设计/
│   ├── 主图/<系列>/*.jpg|png
│   ├── 菜单/*.jpg
│   └── 详情页/*.jpg
└── 视频剪辑/*.mp4       # 视频素材
```

## 本地使用

直接用浏览器打开 `index.html` 即可（协议 `file://`，无需安装依赖、无需服务器）。

## 交互说明

- 图片：点击放大；滚轮滑动查看；`Shift + 滚轮` 或 `+ / −` 按钮缩放（上限 16 倍）；双击重置；`Esc` 关闭。
- 视频：卡片封面为视频首帧，点击弹出播放框，按视频原始尺寸播放。

## 技术实现

- 纯静态 HTML + CSS + JavaScript，无任何构建步骤、无后端。
- 素材路径以相对路径写死于 `js/app.js` 中的清单（`MAIN_IMAGE` / `MENU_IMAGE` / `DETAIL_IMAGE` / `VIDEOS`），保证 `file://` 本地双击可用。

## 维护说明

新增 / 重命名素材后，只需同步更新 `js/app.js` 中的素材清单即可，无需其它改动。
*（内容由AI生成，仅供参考）*
