500 / Simple Config GeoIP for Quantumult X (QuantumultX) 预配置文件: Apple News 解锁规则 + 捷径, 去广告分流规则, TikTok 解锁 Rewrite, 神机分流规则, VIP 视频解析重写 + 捷径

## 简介
> + 整合多个 Quantumult X 配置文件, 利用 GeoIP 特性, 剔除部分规则, 精简规则和配置文件
- [使用方法](https://github.com/smxl/500#使用方法)
- [分流规则和重写](https://github.com/smxl/500#分流规则和重写)
- [捷径](https://github.com/smxl/500#捷径)
- [小工具](https://github.com/smxl/500#小工具)
- [Clash 配置](https://github.com/smxl/500#clash-配置)
- [推荐](https://github.com/smxl/500#推荐)

## 声明

本项目在多个 Quantumult X 配置文件上进行了修改、整理、收集和拓展

本项目Github地址: [https://github.com/smxl/500](https://github.com/smxl/500)

本项目使用配置文件托管在 Cloudflare Pages 的快速链接: [https://500.pages.dev](https://500.pages.dev)

##  使用方法

1. 选择一个配置文件, 下载或者复制

文件|地址|说明
-|-|-
23_03.cer|[23_03.cer](https://github.com/smxl/500/blob/main/static/23_03.cer?raw=true)|证书, Thor 生成无需 passphrase, 500-min-cert.conf 需安装
500-min-cert.conf|[500-min-cert.conf](https://github.com/smxl/500/raw/main/500-min-cert.conf)|需安装证书的配置文件, 已填写 p12 且无需 passphrase
500-min.conf|[500-min.conf](https://github.com/smxl/500/raw/main/500-min.conf)|无证书的配置文件
2. Quantumult X - 风车 - 配置文件 -下载 - 粘贴 - 确定

3. 可选: Mitm - 生成证书 - 配置证书 - 安装证书

4. 系统 - 设置 - 通用 - 关于 - 信任证书

5. Quantumult X - 风车 - 节点 - 引用 (订阅) - 添加 - 填写标签和资源路径

6. Quantumult X - 风车 - misc. - 添加 GeoIP

> GeoIP2-CN 二选一即可
> - [Hackl0us](https://github.com/Hackl0us/GeoIP2-CN/raw/release/Country.mmdb)
> - [soffchen](https://github.com/soffchen/GeoIP2-CN/raw/release/Country.mmdb)

## 分流规则和重写

tag 名|类型|短链|介绍
-|-|-|-
ads|规则|https://500.pages.dev/xf-ads|去广告阻止
cn|规则|https://500.pages.dev/xf-cn|大陆服务直联
global|规则|https://500.pages.dev/xf-global|国际服务
hijacking|规则|https://500.pages.dev/xf-hijacking|防劫持
privacy|规则|https://500.pages.dev/xf-privacy|隐私
tg|规则|https://500.pages.dev/xf-tg|Telegram
unbreak|规则|https://500.pages.dev/xf-unbreak|规则修正
-|||-
adlite|重写|https://500.pages.dev/xr-adlite|复写去广告
ads|重写|https://500.pages.dev/xr-ads|重写去广告
adscript|重写|https://500.pages.dev/xr-adscript|脚本去广告
apple|重写|https://500.pages.dev/xr-apple|解锁受限的 Apple 服务, Apple News, AQI US, Siri 建议
aqi|重写|https://500.pages.dev/xr-aqi|AQI US, 单独使用
bili|重写|https://500.pages.dev/xr-bili|Bilibili 界面优化
box|重写|https://500.pages.dev/xr-box|BoxJS
emby|重写|https://500.pages.dev/xr-emby|Emby 解锁, 无通知
fake|重写|https://500.pages.dev/xr-fake|Fake Pro 解锁, lk 的基础上进行了精简, 并增加了 Spotify Pro
jike|重写|https://500.pages.dev/xr-jike|即刻去直播
js|重写|https://500.pages.dev/xr-js|脚本去广告和比价
jsc|重写|https://500.pages.dev/xr-jsc|脚本获取 Cookies
lk|重写|https://500.pages.dev/xr-lk|国外服务 Fake VIP
tiktok|重写|https://500.pages.dev/xr-tiktok|TikTok US
upgrade|重写|https://500.pages.dev/xr-upgrade|屏蔽APP更新检查
youtube|重写|https://500.pages.dev/xr-youtube|YouTube 去广告
embyplus|重写|https://500.pages.dev/xr-embyplus|Emby 下载
install|重写|https://500.pages.dev/xr-install|Shu 安装 app.ipa 重写
res|重写|https://500.pages.dev/xr-res|大陆软件优化
search|重写|https://500.pages.dev/xr-search|DuckDuckGo 搜索引擎重写
v|重写|https://500.pages.dev/xr-v|VIP 视频解析重写
video|重写|https://500.pages.dev/xr-video|视频重写 3in1, 含 VIP 视频解析重写, TikTok US, YouTube 去广告

FAQ: 你可以根据自己的情况调整上述规则和重写是否需要启用, 举例: 如果你很少使用海外软件, 那么 ```lk 重写 https://500.pages.dev/xr-lk 国外服务 Fake VIP``` 其中提供的多款软件的 VIP/Pro 解锁则对你无用 [其中部分重写已经失效], 同理如此 ```fake https://500.pages.dev/xr-fake Fake Pro 解锁``` 是该规则的精简

## 捷径

演示效果:
- https://500.pages.dev/archive/apple-news-hevc.mp4

捷径|作用|链接
-|-|-
Apple News QX|访问 Apple News 的捷径, 配合本配置文件|https://500.pages.dev/sc-news
Pade|捷径打开: 支付宝 [主扫 + 被扫 + 健康码], 云闪付 [被扫 + 乘车码], 微信 [主扫]|https://500.pages.dev/sc-pade
VIP Free|生成 VIP 视频解析网址的捷径, 可配合电视浏览器 + 远程输入法使用|https://500.pages.dev/sc-vip

FAQ: 你需要完成手机的基本设置才可以使用 Apple News QX, 比如修改 - 设置 - 通用 - 语言和地区 - 区域 - 美国 etc.

## 小工具

工具|作用|链接/补充
-|-|-
无需重写||
ipa 安装|通过 shu 安装名为 app.ipa 的旧版本应用|https://500.pages.dev/static/
VIP Free 解析|高可用解析, 在新窗口打开视频|https://500.pages.dev/static/vf
VIP Video 解析|高可用解析, 在当前窗口播放视频|https://500.pages.dev/v
需要重写||
快速搜索|设置 Safari 默认搜索引擎为 DuckDuckGo|默认谷歌, 前缀两个字母指定其他搜索引擎 Baidu:bd/Magi:mm/Twitter:tt/YouTube:yt/WolframAlpha:wa + 空格 + 关键词
VIP Video 解析|高可用解析, 在当前窗口播放视频|https://v.im

[TikTok 21.0.0 plist removed.ipa](https://transfer.sh/eFAkw1/TikTok%2021.0.0%20plist%20removed.ipa?cYGngGphgS7n) 11.09.2021 实测可用, ipa 已经去除 iTunesMetadata.plist 文件, 请用自己账户下载的 ipa 解压缩后替换

你可以下载旧版本 [iTunes 12.6.5.3](https://support.apple.com/zh-cn/HT208079) 配合 [iOS旧版应用下载v5.1](https://wwx.lanzoui.com/iBE4Emzgbkj) 抓包或者通过 [Fiddler](https://telerik-fiddler.s3.amazonaws.com/fiddler/FiddlerSetup.exe) 输入 ```bpu MZBuy.woa``` 添加断点, 手动修改版本 ID 为 ```843820050```

FAQ: 你需要使用非香港地区的代理才可以使用 TikTok, 这也是本配置文件默认不启用香港节点的原因

## Clash 配置

抽空搞了一个 Clash 配置文件, 使用了 proxy-providers, rule-providers 所以配置文件干净又简单

下载: [500-min-clash.yaml](https://github.com/smxl/500/raw/main/500-min-clash.yaml) 需要使用 [Premium Core](https://github.com/Dreamacro/clash/releases/tag/premium)

iOS 也有了 Clash 客户端: [Choc](https://testflight.apple.com/join/J5QPqXKO), 但是目前不支持 rule-set, 则可以使用 [500-min-clash-nset.yaml](https://github.com/smxl/500/raw/main/500-min-clash-nset.yaml)

如果需要使用自己的订阅, 你可以修改注释中的 ```你的订阅链接```, 然后取消掉配置中全部注释即可

```
proxy-providers:
  # My: # 你也可以将 url 换成你的 clash 节点订阅链接
  #   type: http
  #   path: ./my.yaml
  #   url: https://api.10101.io/sub?target=clash&url=你的订阅链接&list=true
...
```

## 推荐

+ [Orz-3](https://github.com/Orz-3/QuantumultX)

  > 由神机规则修改而来, 修改了默认策略组, 增加了正则筛选策略组, 并集成了 Nobyda 的去广告脚本和重写, 附带按 task 脚本作者分类的 [task 订阅](https://github.com/Orz-3/QuantumultX/tree/master/Task#%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95), 可按需求订阅

+ [KOP-XIAO](https://github.com/KOP-XIAO/QuantumultX)

  > 各个模块的说明非常详细, 特别推荐 Quantumult X 资源解析器

+ [VirgilClyne](https://github.com/VirgilClyne/iRingo)
  > 解锁完整的 Apple 功能和集成服务

+ [blackmatrix7](https://github.com/blackmatrix7/ios_rule_script)
  > 各平台的分流规则、复写规则及自动化脚本