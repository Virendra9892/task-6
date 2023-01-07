var cluster = require('cluster');

if (cluster.isMaster) {
    var cpuCount = require('os').cpus().length;
    console.log(`Master ${process.pid} is running`);
    console.log(`Number of CPUs is ${cpuCount}`);



  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', function () {
    cluster.fork();
  });
}else{

const express = require("express");

const userController = require("./controller/userController")



const app = express();

const port = process.env.PORT || "3000";
// console.log(`Worker with id ${process.pid} started`);

app.get("/",userController.greeting)



app.listen(port,()=>{
    console.log(`server is listening on http://localhost:${port}`);
})}