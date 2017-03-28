var app = require('express')();
var bodyParser = require('body-parser');
var express=require('express');
app.get("/", function (req,res) {
var exec = require('child_process').exec;
exec('ps -ef | grep nheqminer', function(error, stdout, stderr)  {
  if (error) {
    console.error('exec error: '+error);
    return;
  }
  res.send('stdout: '+stdout);
  console.log('stderr: '+stderr);
});
});
 var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
app.listen(port,ip, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), ip, port);
        });
        
app.post("/postmark",bodyParser.json(), function (req,res) {
    console.log("mulai part 2")
  console.log(req.body)
    res.status(200).send("bismillah")
})
app.get("/nheqminer", function (req,res) {
    console.log("mulai part 2")
  var nheq=require("./nheq")()
    res.status(200).send("bismillah")
})