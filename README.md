500 / Simple Config GeoIP for Quantumult X (QuantumultX)

预配置文件: 去广告分流规则、Tiktok 解锁 Rewrite、神机分流规则


## 简介

> 特点: 
> 
> + 整合多个 Quantumult X 配置文件, 利用 GeoIP 特性, 剔除部分规则, 精简规则和配置文件
> 

## 声明

本项目在多个 Quantumult X 配置文件上进行了修改、整理、收集和拓展

本项目Github地址: [https://github.com/smxl/500](https://github.com/smxl/500)

本项目使用配置文件托管在 Cloudflare Pages 的快速链接: [https://500.pages.dev](https://500.pages.dev)


##  使用

1. 选择一个配置文件, 下载或者复制

文件|地址|说明
-|-|-
500-min.conf|[500-min.conf](https://raw.githubusercontent.com/smxl/500/main/500-min.conf)|自行生成证书和填写 p12 和 passphrase 的配置文件
500-min-cert.conf|[500-min-cert.conf](https://raw.githubusercontent.com/smxl/500/main/500-min-cert.conf)|需安装下方证书的配置文件, 已填写 p12 且无需 passphrase
23_03.cer|[23_03.cer](https://raw.githubusercontent.com/smxl/500/main/static/23_03.cer)|用 Thor 生成的 无需 passphrase 的证书, 配置名含 cert 需安装
2. Quantumult X - 风车 - 配置文件 -下载 - 粘贴 - 确定

3. 可选: Mitm - 生成证书 - 配置证书 - 安装证书

4. 系统 - 设置 - 通用 - 关于 - 信任证书

5. Quantumult X - 风车 - 节点 - 引用 (订阅) - 添加 - 填写标签和资源路径

6. Quantumult X - 风车 - misc. - 添加 GeoIP

> GeoIP2-CN 二选一即可
> - [Hackl0us](https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb)
> - [soffchen](https://github.com/soffchen/GeoIP2-CN/raw/release/Country.mmdb)

## 使用的分流规则和重写

tag 名|规则/重写|短链|介绍
-|-|-|-
ads|规则|https://500.pages.dev/xf-ads|去广告阻止
cn|规则|https://500.pages.dev/xf-cn|大陆服务直联
global|规则|https://500.pages.dev/xf-global|国际服务
hijacking|规则|https://500.pages.dev/xf-hijacking|劫持
privacy|规则|https://500.pages.dev/xf-privacy|隐私
tg|规则|https://500.pages.dev/xf-tg|Telegram
unbreak|规则|https://500.pages.dev/xf-unbreak|规则修正
aqi|重写|https://500.pages.dev/xr-aqi|天气 AQI US, 单独使用
adlite|重写|https://500.pages.dev/xr-adlite|复写去广告
adscript|重写|https://500.pages.dev/xr-adscript|脚本去广告
upgrade|重写|https://500.pages.dev/xr-upgrade|屏蔽APP更新检查
ads|重写|https://500.pages.dev/xr-ads|重写去广告
bili|重写|https://500.pages.dev/xr-bili|Bilibili 界面优化
emby|重写|https://500.pages.dev/xr-emby|Emby 解锁, 无通知
tiktok-us|重写|https://500.pages.dev/xr-tiktok|TikTok US
youtube|重写|https://500.pages.dev/xr-youtube|YouTube 去广告
jike|重写|https://500.pages.dev/xr-jike|即可去直播
lk|重写|https://500.pages.dev/xr-lk|国外服务 Fake VIP
js|重写|https://500.pages.dev/xr-js|脚本去广告和比价
jsc|重写|https://500.pages.dev/xr-jsc|脚本获取Cookies
box|重写|https://500.pages.dev/xr-box|BoxJS
v|重写|https://500.pages.dev/xr-v|VIP 视频解析重写
install|重写|https://500.pages.dev/xr-install|shu 安装 app.ipa 重写
search|重写|https://500.pages.dev/xr-search|DuckDuckGo 搜索引擎重写
embyplus|重写|https://500.pages.dev/xr-embyplus|Emby 下载, 不建议
res|重写|https://500.pages.dev/xr-res|大陆软件优化

## 附带的小工具

工具|作用|链接/补充
-|-|-
ipa 安装 (无需重写)|通过 shu 安装名为 app.ipa 的旧版本应用|https://500.pages.dev/static/
ipa 安装 (需要重写)|通过 shu 安装名为 app.ipa 的旧版本应用|https://500.pages.dev/static/
快速搜索 (需要重写)|设置 Safari 默认搜索引擎为 DuckDuckGo|默认谷歌, 前缀两个字母指定其他搜索引擎 Baidu:bd/Magi:mm/Twitter:tt/YouTube:yt/WolframAlpha:wa + 空格 + 关键词
VIP Free 解析 (无需重写)|三个高可用解析, 在新窗口打开视频|https://500.pages.dev/static/vf
VIP Free 解析 (需要重写)|三个高可用解析, 在新窗口打开视频|https://vf.im
VIP Video 解析 (无需重写)|三个高可用解析, 在当前窗口播放视频|https://500.pages.dev/static/vv
VIP Video 解析 (需要重写)|三个高可用解析, 在当前窗口播放视频|https://vv.im


## 推荐

+ [Orz-3](https://github.com/Orz-3/QuantumultX)

  > 由神机规则修改而来，修改了默认策略组，增加了正则筛选策略组，并集成了Nobyda的去广告脚本和重写，附带按task脚本作者分类的task订阅，可按需求订阅

+ [KOP-XIAO](https://github.com/KOP-XIAO/QuantumultX)

  > 各个模块的说明非常详细，特别推荐 Quantumult X 资源解析器
