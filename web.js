var express = require("express");
var fs = require("fs");
var htmlfile = "index.html";
var sitemapfile = "sitemap.xml";

var app = express();
app.configure(function () {
    app.use(express.cookieParser());
    app.use(express.bodyParser());
    app.use('/data', express.static(__dirname + '/data'));
    app.use(app.router);    
});


app.get("/index.html", function(req, res) {
    var html = fs.readFileSync(htmlfile).toString();
    res.send(html);
});

app.get("/index2.html", function(req, res) {
    var html = fs.readFileSync("index2.html").toString();
    res.send(html);
});

app.get("/index3.html", function(req, res) {
    var html = fs.readFileSync("index3.html").toString();
    res.send(html);
});


app.get("/result.html", function(req, res) {
    var html = fs.readFileSync("result.html").toString();
    res.send(html);
});

app.get("/result2.html", function(req, res) {
    var html = fs.readFileSync("result2.html").toString();
    res.send(html);
});

app.get("/result3.html", function(req, res) {
    var html = fs.readFileSync("result3.html").toString();
    res.send(html);
});


//Send both register and / to the registration page
app.get("/register.html", function(req, res) {
    var html = fs.readFileSync("register.html").toString();
    res.send(html);
});

app.get("/", function(req, res) {
    var html = fs.readFileSync("register.html").toString();
    res.send(html);

});

var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log("Listening on " + port);
});
