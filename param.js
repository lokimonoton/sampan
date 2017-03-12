var app = require('express')();
var bodyParser = require('body-parser');
var express=require('express');
app.get("/", function (req,res) {
res.send("hai")
});
 var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
        var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.listen(port, ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), ipaddress, port);
        });
        
app.post("/postmark",bodyParser.json(), function (req,res) {
    console.log("mulai part 2")
  console.log(req.body)
    res.status(200).send("bismillah")
})