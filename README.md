# 魏莹芬个人学术主页

英文首页是 `dist/index.html`，中文首页是 `dist/zh.html`。两页共用一份[动态与论文数据](dist/content.js)。在 GitHub Pages 启用自动发布后，提交一次内容即可更新两个版本。

## 日常更新

1. 在 GitHub 仓库中打开 [dist/content.js](dist/content.js)，点击铅笔图标。
2. 新增动态时，在 `"news": [` 下一行插入一条记录。新增论文时，插入到 `"publications": [` 下一行。可复制下方模板，替换示例文字并保留末尾的逗号。
3. 点击 **Commit changes**，提交到默认分支。如果仓库要求拉取请求，合并后会自动发布。打开 **Actions → Publish homepage** 查看进度，运行成功后点击部署地址即可查看新版。

动态按月份倒序，论文按年份倒序。同月或同年的条目按填写顺序展示。中文译文可稍后补充，缺少译文时中文版先显示英文。

### 动态模板

```js
{
  "date": "2026-11",
  "text": "English news text",
  "textZh": "中文动态正文"
},
```

### 论文模板

```js
{
  "year": 2026,
  "title": "English paper title",
  "titleZh": "中文论文标题",
  "authors": "First Author, Second Author",
  "venue": "Journal or conference name",
  "url": "https://doi.org/在此替换为实际DOI"
},
```

如需提供 PDF，先在 GitHub 的 `dist/assets/` 中上传文件，再给论文记录添加 `"pdf": "assets/paper.pdf"`。可选的 `url` 字段用于链接动态详情或论文出版商页面。

## 首次接入 GitHub Pages

1. 在目标 GitHub 仓库的默认分支根目录放入本项目的 `dist/`、`scripts/`、`.github/workflows/pages.yml` 和 `README.md`。请保留这些目录的层级，工作流按此查找页面和内容。如果旧站已有 Pages 部署工作流，切换时停用旧工作流，以免两个版本交替上线。
2. 在 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。[GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
3. 在 **Actions → Publish homepage → Run workflow** 中选择默认分支并运行一次。以后默认分支的页面、资源或发布配置有改动时，GitHub 会自动检查内容，并将 `dist/` 发布为网站根目录。

## 预览与修正

双击 `dist/index.html` 即可本地预览，点击页首的“中文”可检查译文。如已安装 Node.js，在项目根目录运行 `node scripts/check-content.mjs`，可提前检查内容格式、必填字段、动态月份和本地 PDF 路径。

发布失败时，在 **Actions → Publish homepage** 打开失败的运行。若 **Check homepage content** 报错，按日志修正后再提交，检查通过才会部署。若已上线的文字有误，直接改正并再次提交即可。

个人简介、单位和联系方式分别在两个 HTML 入口中维护。配色与布局在 `dist/style.css`。
