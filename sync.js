// const {readFileSync} = require('fs');
// const fs = require('fs');
// fs.read

const {readFileSync,writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/scond.txt','utf8')

writeFileSync(
    './content/result.txt',
    `hello world : ${first},${second}`,
    {flag: 'a'}
    )
console.log('done with this task');
console.log('starting the next one');
