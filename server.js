/* eslint-disable */

var path = require("path");
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");
var fs = require("fs");

var app = express();
var compiler = webpack(config);
var serverPort = process.env.PORT || 3000;

app.use(require("webpack-dev-middleware")(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get("*", function (req, res) {
  var isAYGLFTalkFile = req.url.indexOf('/yglf-talk') !== -1;
  if (isAYGLFTalkFile) {
    var isYGLFTalkRoot = req.url === '/yglf-talk/';
    if (isYGLFTalkRoot) {
      res.sendFile(path.join(__dirname, 'yglf-talk/index.html'));
    } else {
      const filePath = path.join(__dirname + req.url);
      if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
      }
    }
  }
  else {
    res.sendFile(path.join(__dirname, "index.html"));
  }
});

app.listen(serverPort, "localhost", function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Listening at http://localhost:" + serverPort);
});
