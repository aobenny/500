500 / Simple Config GeoIP for Quantumult X (QuantumultX)

预配置文件: 去广告分流规则、Tiktok 解锁 Rewrite、神机分流规则


## 简介

> 特点: 
> 
> + 整合多个 Quantumult X 配置文件, 利用 GeoIP 特性, 剔除部分规则, 精简规则和配置文件
> 

## 声明

本项目在多个 Quantumult X 配置文件上进行了修改、整理、收集和拓展

本项目Github地址: [github.com/smxl/500](https://github.com/smxl/500)

本项目使用配置文件托管在 Cloudflare Pages 的快速链接: [500.pages.dev](https://500.pages.dev)


##  使用

1. 选择一个配置文件, 下载或者复制

文件|地址|说明
-|-|-
500.conf|[500.conf](https://raw.githubusercontent.com/smxl/500/main/500.conf)|自行生成证书和填写 p12 和 passphrase 的配置文件
500-min.conf|[500-min.conf](https://raw.githubusercontent.com/smxl/500/main/500.conf-min)|同上, 区别是用 500.pages.dev 短链替换 raw.githubusercontent.com 链接
500cert.conf|[500cert.conf](https://raw.githubusercontent.com/smxl/500/main/500cert.conf)|需要安装下方证书证书的配置文件, 含有 p12, 无需 passphrase
500cert-min.conf|[500cert-min.conf](https://raw.githubusercontent.com/smxl/500/main/500cert-min.conf)|同上, 区别是用 500.pages.dev 短链替换 raw.githubusercontent.com 链接
23_03.cer|[23_03.cer](https://raw.githubusercontent.com/smxl/500/main/static/23_03.cer)|用 Thor 生成的 无需 passphrase 的证书, 配置名含 cert 需安装
2. Quantumult X - 风车 - 配置文件 -下载 - 粘贴 - 确定

3. 可选: Mitm - 生成证书 - 配置证书 - 安装证书

4. 系统 - 设置 - 通用 - 关于 - 信任证书

5. Quantumult X - 风车 - 节点 - 引用 (订阅) - 添加 - 填写标签和资源路径

6. Quantumult X - 风车 - misc. - 添加 GeoIP

> GeoIP2-CN
> - [Hackl0us](https://cdn.jsdelivr.net/gh/Hackl0us/GeoIP2-CN@release/Country.mmdb)
> - [soffchen](https://raw.githubusercontent.com/soffchen/GeoIP2-CN/release/Country.mmdb)

## 使用的分流规则和重写

tag 名|规则/重写|短链|原链接
-|-|-|-
ads|规则|https://500.pages.dev/xf-ads|https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Advertising.list
cn|规则|https://500.pages.dev/xf-cn|https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/China.list
unbreak|规则|https://500.pages.dev/xf-unbreak|https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Unbreak.list
hijacking|规则|https://500.pages.dev/xf-hijacking|https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Hijacking.list
global|规则|https://500.pages.dev/xf-global|https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Global.list
privacy|规则|https://500.pages.dev/xf-privacy|https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Guard/Privacy.list
tg|规则|https://500.pages.dev/xf-tg|https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Filter/Extra/Telegram/Telegram.list
ads|重写|https://500.pages.dev/xr-ads|https://raw.githubusercontent.com/DivineEngine/Profiles/master/Quantumult/Rewrite/Block/Advertising.conf
bili|重写|https://500.pages.dev/xr-bili|https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.qxrewrite
emby|重写|https://500.pages.dev/xr-emby|https://subweb.oss-cn-hongkong.aliyuncs.com/Module/embyUnlocked.conf
tiktok|重写|https://500.pages.dev/xr-tiktok|https://raw.githubusercontent.com/Semporia/TikTok-Unlock/master/Quantumult%20X/TikTok-US.conf
youtube|重写|https://500.pages.dev/xr-youtube|https://raw.githubusercontent.com/Orz-3/QuantumultX/master/YouTube.conf
js|重写|https://500.pages.dev/xr-js|https://raw.githubusercontent.com/Orz-3/QuantumultX/master/JS.conf
jsc|重写|https://500.pages.dev/xr-jsc|https://raw.githubusercontent.com/Orz-3/QuantumultX/master/JS_GetCookie.conf
box|重写|https://500.pages.dev/xr-box|https://raw.githubusercontent.com/chavyleung/scripts/master/box/rewrite/boxjs.rewrite.quanx.conf
v|重写|https://500.pages.dev/xr-v|https://raw.githubusercontent.com/smxl/500/main/xd/v.conf
install|重写|https://500.pages.dev/xr-install|https://raw.githubusercontent.com/smxl/500/main/xd/install.conf
search|重写|https://500.pages.dev/xr-search|https://raw.githubusercontent.com/smxl/500/main/xd/search.conf
embyplus|重写|https://500.pages.dev/xr-embyplus|https://raw.githubusercontent.com/smxl/500/main/xd/embyplus.conf


## 附带的小工具

工具|作用|链接/补充
-|-|-
ipa 安装 (无需重写)|通过 shu 安装名为 app.ipa 的旧版本应用|https://500.pages.dev/static/
ipa 安装 (需要重写)|通过 shu 安装名为 app.ipa 的旧版本应用|https://500.pages.dev/static/
快速搜索 (需要重写)|设置 Safari 默认搜索引擎为 DuckDuckGo|默认谷歌, 前缀两个字母指定其他搜索引擎 Baidu:bd/Magi:mm/Twitter:tt/YouTube:yt/WolframAlpha:wa + 空格 + 关键词
VIP Free 解析 (无需重写)|三个高可用解析, 在新窗口打开视频|https://500.pages.dev/static/vf.html
VIP Free 解析 (需要重写)|三个高可用解析, 在新窗口打开视频|https://vf.im
VIP Video 解析 (无需重写)|三个高可用解析, 在当前窗口播放视频|https://500.pages.dev/static/vv.html
VIP Video 解析 (需要重写)|三个高可用解析, 在当前窗口播放视频|https://vv.im


## 推荐

+ [Orz-3](https://github.com/Orz-3/QuantumultX)

  > 由神机规则修改而来，修改了默认策略组，增加了正则筛选策略组，并集成了Nobyda的去广告脚本和重写，附带按task脚本作者分类的task订阅，可按需求订阅

+ [KOP-XIAO](https://github.com/KOP-XIAO/QuantumultX)

  > 各个模块的说明非常详细，特别推荐 Quantumult X 资源解析器
