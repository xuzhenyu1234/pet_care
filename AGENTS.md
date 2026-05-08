# AGENTS.md

## 项目概览

这是一个宠物洗护门店单页官网项目，品牌名为“汪喵泡泡屋 / Pet Grooming House”。页面用于展示宠物洗护、美容造型、皮毛护理、护理流程、客户评价、门店信息和在线预约入口。

当前项目已经从原始静态 `index.html` 迁移为 Next.js 项目。后续开发应优先维护 `app/` 下的 Next.js 版本；根目录 `index.html` 仅作为原始静态页面备份参考。

## 技术栈

- 框架：Next.js App Router
- 前端：React + TypeScript
- 样式：全局 CSS，主要在 `app/globals.css`
- 包管理：npm，锁文件为 `package-lock.json`
- 当前锁定依赖中可见版本：Next `16.2.5`，React `19.2.6`，React DOM `19.2.6`

## 关键目录和文件

- `app/layout.tsx`：全局布局、`zh-CN` HTML 语言和页面 metadata。
- `app/page.tsx`：主页主体，是 client component，包含导航、Hero、服务、套餐、流程、评价、到店信息和预约表单。
- `app/globals.css`：全部视觉样式、响应式布局、卡片、表单、地图/门店图、评价轮播和滚动显现动画。
- `public/assets/services/`：服务项目图片资源。
- `public/assets/store/store-interior.png`：门店实景示意图。
- `public/assets/wuhan-university-amap-style.svg`：武汉大学校内位置的高德地图风格示意图。
- `index.html`：迁移前的静态单页备份，不是当前 Next.js 入口。
- `.next/`、`node_modules/`、`*.tsbuildinfo`：构建、依赖或缓存产物，不要手动维护。

## 页面功能

- 顶部导航锚点：`#services`、`#pricing`、`#process`、`#reviews`、`#booking`。
- Hero 区展示品牌文案、行动按钮、服务数据和宠物视觉区。
- 服务项目包含基础洗护、美容造型、皮毛护理，以及其他扩展服务卡片。
- 洗护套餐展示普通价和会员价。
- 护理流程展示到店检查、分区洗护、吹整修剪、离店反馈。
- 客户评价使用数组在 JSX 中渲染，并通过 CSS marquee 横向滚动。
- 到店信息包含营业时间、地址“湖北省武汉市 武汉大学校内”、门店图、地图示意图和预约电话占位。
- 在线预约表单目前是静态演示，点击“发送预约意向”只会 `alert`，没有真实提交。
- `defaultArrivalTime` 在客户端计算为“明天 09:30”，作为预约时间默认值。
- `.fade-up` 元素依赖 `IntersectionObserver` 在客户端进入视口后添加 `.visible`。

## 运行命令

`package.json` 中定义了：

```bash
npm run dev
npm run build
npm run start
```

本机 Node.js/npm 安装在 `D:\node.js`。如果当前 PowerShell 找不到 `npm`，使用：

```powershell
$env:Path='D:\node.js;'+$env:Path
npm.cmd run dev
```

也可以直接用完整路径：

```powershell
& 'D:\node.js\npm.cmd' run build
```

在 Codex 沙箱中，`next build` 或 `next dev/start` 可能因为启动子进程报 `spawn EPERM`。这通常是执行权限限制，不代表代码错误；需要用提升权限重新运行验证命令。

## 开发注意事项

- 文件包含中文和 emoji，请保持 UTF-8。PowerShell 直接输出有时会显示乱码，必要时使用 UTF-8 读取。
- 修改页面内容优先改 `app/page.tsx`，样式优先改 `app/globals.css`。
- 图片引用使用 public 根路径，例如 `/assets/services/basic-bath.png`。
- 真实预约、地图 API、微信二维码、后台管理、真实电话等尚未接入，目前仍是静态展示或占位文案。
- 如果要接入真实高德地图，需新增 API key、浏览器端脚本加载策略和降级态；当前 SVG 地图是本地静态资源。
- 保持当前视觉风格：温暖明亮、橙色/青绿色/黄色点缀、圆角卡片、适合宠物护理门店。

## Git 和同步

- 远程仓库：`https://github.com/xuzhenyu1234/pet_care.git`
- 默认分支：`main`
- 最近已从 `origin/main` 拉取云端更新，工作区曾确认与远程同步。
- 拉取云端修改时优先使用 `git pull --ff-only`，避免无意创建合并提交。

## 已知限制

- 当前没有 lint 脚本和测试脚本。
- `next.config.ts` 当前为空配置。
- 预约表单没有真实提交能力。
- `index.html` 可能与 Next.js 版本逐渐不同步，不应作为主要维护对象。
