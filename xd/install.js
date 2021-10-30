// 用法详见: https://github.com/smxl/500
let body=`<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"><plist version="1.0"><dict><key>items</key><array><dict><key>assets</key><array><dict><key>kind</key><string>software-package</string><key>url</key><string>http://127.0.0.1/download?path=%2Fapp.ipa</string></dict></array><key>metadata</key><dict><key>bundle-identifier</key><string>*</string><key>bundle-version</key><string>1.0</string><key>kind</key><string>software</string><key>title</key><string>app.ipa</string></dict></dict></array></dict></plist> `

const Status = "HTTP/1.1 200 OK";
const Headers = {};
const Data = body;
const Response = {
    status: Status,
    //headers: Headers, // Optional.
    body: Data // Optional.
};

$done(Response);
