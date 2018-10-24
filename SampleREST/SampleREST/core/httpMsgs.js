var settings = require("../settings");

exports.show500 = function (req, resp, err) {
    if (settings.httpMsgsFormat === "HTML") {

        resp.writeHead(500, "Internal Error occurred", { "Content-Type": "text/html" });
        resp.write("<html><head><title>500</title></head><body>500: Internal error . Details:" + err + "</body></html>");

    } else {

        resp.writeHead(500, "Internal Error occurred", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "ERROR occurred " + err }));
    }
};

exports.sendJson = function (req, resp, data) {

    resp.writeHead(200, { "Content-Type": "application/json" });

    if (data) {

        resp.write(JSON.stringify(data));

    }

    resp.end();

};

exports.show405 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {

        resp.writeHead(405, "Method not suppotge", { "Content-Type": "text/html" });
        resp.write("<html><head><title>405</title></head><body>405: Method not suppotge </body></html>");

    } else {

        resp.writeHead(405, "Method not suppotge", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({data: "Method not suppotge"}));
    }
};


exports.show404 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {

        resp.writeHead(404, "Resores not found", { "Content-Type": "text/html" });
        resp.write("<html><head><title>404</title></head><body>404: Resores not found  </body></html>");

    } else {

        resp.writeHead(404, "Resores not found", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({data: "Resores not found"}));
    }
};

exports.show413 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {

        resp.writeHead(413, "Request Entity Too Large", { "Content-Type": "text/html" });
        resp.write("<html><head><title>413</title></head><body>413: Request Entity Too Large </body></html>");

    } else {

        resp.writeHead(413, "Request Entity Too Large", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({data: "Request Entity Too Large"}));
    }
};

exports.show200 = function (req, resp) {
        resp.writeHead(200,  { "Content-Type": "text/html" });
        resp.end();
};

exports.showHome = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {

        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write("<html><head><title>Home</title></head><body>Valid endpoint: <br> /UserList - GET - To List all Users </body></html>");

    } else {

        resp.writeHead(413, { "Content-Type": "application/json" });
        resp.write(JSON.stringify([
            { url: "/UserList", operation: "GET", description: "To list all Users" },
            { url: "/UserList/<empno>", operation: "GET", description: "To search for an Users" }
        ]));
    }
    resp.end();
};
