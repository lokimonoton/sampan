var app = require('express')();
var bodyParser = require('body-parser');
var express=require('express');
app.get("/", function (req,res) {
res.send("hai")
});
 var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
        var port      = process.env.OPENSHIFT_NODEJS_PORT || 8080;
app.listen(port, ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), ipaddress, port);
        });