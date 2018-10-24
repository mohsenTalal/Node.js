var db = require("../core/db");
var httpMsgs = require("../core/httpMsgs");


exports.getList = function (req, resp) {
    db.execteSql("SELECT * FROM Users", function (data , err) {
        if (err) {

            httpMsgs.show500(req, resp, err);

        } else {

            httpMsgs.sendJson(req, resp, data);
        }
        resp.end();
    });
};

exports.get = function (req, resp, empno) {
    db.execteSql("SELECT * FROM Users WHERE UserName=" + UserName + "AND Password=" + Password  , function (data, err) {
        if (err) {
            httpMsgs.show500(req, resp, err);
        } else {
            httpMsgs.sendJson(req, resp, data);
        }
    });
};

exports.add = function (req, resp, reqBody) {
    try {
        if (!reqBody) throw new Error("Input not valid");
        var data = JSON.parse(reqBody);
        if (data) {
            var sql = "INSERT INTO Users (UserName, Password, Email, Rights) VALUES ";
            sql += "('" + data.UserName + "','" + data.Password + "','" + data.Email + "','" + data.Rights + "')";
            db.execteSql(sql, function (data, err) {
                if (err) {
                    httpMsgs.show500(req, resp, err);
                } else {
                    httpMsgs.show200(req, resp);
                }
            });
        }
        else {
            throw new Error("Input not valid");
        }
    } catch (ex) {
        httpMsgs.show500(req, resp, err);
    }
};

exports.update = function (req, resp, reqBody) {

};

exports.delete = function (req, resp, reqBody) {

};