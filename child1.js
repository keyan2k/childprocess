const fork = require('child_process').fork;

const path = require('path');
if(process.send) {
  process.send("Hello parent am child 1");
}

process.on('message', message => {
  console.log('message from parent:', message);
});







