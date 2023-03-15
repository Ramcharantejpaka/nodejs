var cluster = require('cluster');
if(cluster.isworker){
    console.log('Child thread');
}else{
    console.log('Parent thread');
    cluster.fork();
    cluster.fork();
    cluster.fork();
}