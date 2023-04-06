//pm2 start print.js --restart-delay=300000 sets 5 minute delay
// pm2 log
// pm2 list
// pm2 delete 0

console.log("hello world");
setTimeout(function f(){console.log("hello world 2")}, 6000);

