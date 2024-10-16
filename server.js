const express = require('express');
const app = express();
const PORT = 8080;

app.get('api',);


app.listen(PORT,(err,res)=>{
if(err){
    console.log("failed");
}
else{
console.log("sucess");
}
})