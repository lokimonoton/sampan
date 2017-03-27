var axios=require('axios@0.15.2');
module.exports=function(cb){
    axios.get("http://bismillah-plokot.rhcloud.com").then(function(data){
    cb(null,JSON.stringify(data))
})
.catch(function(err){
    cb(null,"error "+JSON.stringify(err))
})
    
}