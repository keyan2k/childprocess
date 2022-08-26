const fork = require('child_process').fork;
const path = require('path');

if (process.send) {
  process.send("Hello parent am child 2");
 

}
process.on('message', message => {
  console.log('Message from Parent:', message);
});




