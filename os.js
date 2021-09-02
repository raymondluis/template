const os = require('os')

//info about user
const user = os.userInfo()
console.log(user);

// method return system uptime i seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release : os.release(),
    titalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS);