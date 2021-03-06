// 用法详见: https://github.com/smxl/500
let body=`<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>VIP Video 视频解析</title>
        <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div class="header h1 text-center">
                <h1>VIP Video 视频解析</h1>
                <small>无需账户, 选取 API 粘贴视频地址解析后直接播放</small>
            </div>
            <div class="main">
                <form class="form-horizontal" method="post">
                    <div class="form-group">
                        <label for="api" class="col-sm-2 control-label">选取 API</label>
                        <div class="col-sm-10">
                            <select id="jk" size="1" onchange="fnChange()" class="form-control">
                                <optgroup label="推荐 - 无广"><option value="https://okjx.cc/?url=">okjx</option></optgroup>
                                <optgroup label="支持搜索 - 有广"><option value="https://z1.m1907.cn/?jx=">m1907</option></optgroup>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="url" class="col-sm-2 control-label">粘贴 / 输入</label>
                        <div class="col-sm-10"><input type="url" class="form-control" id="vipurl" placeholder="视频地址" /></div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10"><button type="button" onclick="onPlay()" class="btn btn-primary">解析</button> <button type="button" onclick="onClear()" class="btn btn-primary">清空</button></div>
                    </div>
                </form>
            </div>
            <div class="footer text-center"><p>不存储任何视频内容, 所有视频相关内容来自互联网</p></div>
        </div>
        <iframe src="" id="play" width="100%" height="50%" frameborder="0" allowfullscreen scrolling="no" style="position:absolute"></iframe>
        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script>
            function init() {
                document.getElementById("jk");
            }
            init();
            function fnChange() {}
            function onClear() {
                document.getElementById("vipurl").value = "";
            }
            function onPlay() {
                var e = document.getElementById("jk"),
                    t = e.options[e.selectedIndex].value,
                    n = document.getElementById("vipurl").value,
                    o = document.getElementById("play");
                0 < n.length && (o.src = t + n);
            }
        </script>
    </body>
</html>
`

const Status = "HTTP/1.1 200 OK";
const Headers = {};
const Data = body;
const Response = {
    status: Status,
    //headers: Headers, // Optional.
    body: Data // Optional.
};

$done(Response);
