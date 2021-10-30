// 用法详见: https://github.com/smxl/500
let body=`<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>VIP Free 视频解析</title>
        <link href="https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div class="header h1 text-center">
                <h1>VIP Free 视频解析</h1>
                <small>无需账户, 选取 API 粘贴视频地址后直接播放</small>
            </div>
            <div class="main">
                <form class="form-horizontal" method="post">
                    <div class="form-group">
                        <label for="api" class="col-sm-2 control-label">选取 API</label>
                        <div class="col-sm-10">
                            <select id="api" name="api" class="form-control"></select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="url" class="col-sm-2 control-label">粘贴 / 输入</label>
                        <div class="col-sm-10">
                            <input type="url" class="form-control" id="url" name="url" placeholder="视频地址" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="button" id="play" class="btn btn-primary">解析</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="main">
                <div class="form-horizontal">
                    <div class="form-group">
                        <label for="api" class="col-sm-2 control-label">API <a href="javascript:setDefault();">重置</a></label>
                        <div class="col-sm-10">
                            <textarea rows="3" id="apiList" class="form-control">
https://okjx.cc/?url=
👌 支持搜索
https://z1.m1907.cn/?jx=
👍 较推荐
https://17kyun.com/api.php?url=</textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer text-center">
                <p>
                    API 获取: <a href="https://zuh.yuh.im/go/?redurl=https://vip.yeyulingfeng.com/jiekou.html" target="_blank" rel="noopener noreferrer nofollow">1</a>
                    <a href="https://zuh.yuh.im/go/?redurl=https://greasyfork.org/zh-CN/scripts/370634" target="_blank" rel="noopener noreferrer nofollow">2</a>
                    <a href="https://zuh.yuh.im/go/?redurl=https://greasyfork.org/zh-CN/scripts/398195" target="_blank" rel="noopener noreferrer nofollow">3</a>
                </p>
                <p>修改自: <a href="https://zuh.yuh.im/go/?redurl=https://vip.yantuz.cn/" target="_blank" rel="noopener noreferrer nofollow">岩兔站</a></p>
            </div>
        </div>
        <script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="https://cdn.bootcss.com/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
        <script>
            function setApi() {
                $("#api").children().remove();
                var apilist = $("#apiList").val().split(/\r?\n/);
                for (var i = 0; i < apilist.length; i++) {
                    $("#api").append("<option>" + apilist[i] + "</option>");
                }
            }
            $("#apiList").blur(function () {
                setApi();
                $.cookie("apiList", $("#apiList").val());
            });
            $("#play").click(function () {
                $api = $("#api").val();
                $url = $("#url").val();
                // if ($url == "" || $url == null || !/^http.*$/.test($url)) {
                //     alert("视频地址不正确！");
                //     return;
                // }
                if ($url == "" || $url == null || !/^http.*=$/.test($api)) {
                    alert("无效API！");
                    return;
                }
                window.open($api + $url);
            });
            function init() {
                var ckapi = $.cookie("apiList");
                if (ckapi && ckapi != "") {
                    $("#apiList").val(ckapi);
                }
                setApi();
            }
            init();
            function setDefault() {
                $.cookie("apiList", "");
                window.location.reload();
            }
        </script>
    </body>
</html>`

const Status = "HTTP/1.1 200 OK";
const Headers = {};
const Data = body;
const Response = {
    status: Status,
    //headers: Headers, // Optional.
    body: Data // Optional.
};

$done(Response);
