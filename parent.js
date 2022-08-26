const fork = require('child_process').fork;
const path = require('path');

const get = path.resolve('child1.js');
const parameters = [];
const child = fork(get, parameters);
child.on('message', message => {
  console.log('Message from Child 1 :'+ "",message);
  child.send('hii child 1');


});
const get1 = path.resolve('child2.js');
const parameterss = [];
const child2 = fork(get1, parameterss);
child2.on('message', message => {
  console.log('Message from Child 2 :'+ "",message);
  child2.send('hii child 2');


});



