const { spawn } = require('child_process');
const { stdout } = require('process');

const a1 = spawn('a.exe');
const a2 = spawn('python', ['msgqueue.py'])



a1.stdout.on('data', (data) => {

    a2.stdin.end(data);
 
});

a1.stderr.on('data', (data) => {
    console.error(data.toString());
});

a1.on('exit', (code) => {
    console.log(`Child exited with code ${code}`);
});

a2.stdout.on('data', (data) => {
    console.log(`이게되네...`);

    
});

a2.stderr.on('data', (data) => {
    console.error(data.toString());
});

a2.on('exit', (code) => {
    console.log(`Child2 exited with code ${code}`);
});

setInterval(() => { a1.stdin.end(`1`) }, 3000)



