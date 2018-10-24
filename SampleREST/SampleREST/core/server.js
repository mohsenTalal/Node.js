var http = require("http");
var test = require("../controllers/test");
var settings = require("../settings");
var httpMsgs = require("./httpMsgs");


http.createServer(function (req, resp) {
    switch (req.method) {
        case "GET":
            if (req.url === "/") {
                httpMsgs.showHome(req, resp);
            }
            else if (req.url === "/UserList")
            {
                test.getList(req, resp);
            }
            else {
                    var UserPatt = "[0-9]+";
                    var patt = new ReqExp("/UserList/" + UserPatt);
                    if (patt.test(req.url)) {
                        patt = new ReqExp(UserPatt);
                        var empno = patt.exec(req.url);
                        test.get(req, resp, empno);
                    }
                      else {

                            httpMsgs.show404(req, resp);
                        }
            } 
            break;
        case "POST":
            if (req.url === "/UserList") ///Register 
            {
                var reqBody = '';
                req.on("data", function (data) {
                    reqBody += data;
                    if (reqBody.length > 1e7)// 10MB
                    {
                        httpMsgs.show413(req, resp);
                    }
                });
                req.on("end", function () {
                    test.add(req, resp, reqBody);
                });

            } else {
                httpMsgs.show404(req.resp);
            }
            break;
        case "PUT":
            if (req.url === "/UserList") {

            } else {
                httpMsgs.show404(req.resp);
            }
            break;
        case "DELETE":
            if (req.url === "/UserList") {

            } else {
                httpMsgs.show404(req.resp);
            }
            break;
        default:
            httpMsgs.show405(req, resp);
            break;
    }
}).listen(settings.webPort, function () {

    console.log("Started listening at: " + settings.webPort );

})
