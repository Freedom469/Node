// CommonJs, every file is module (by default)
// Modules - Encapsulated code (only share minimun)

const os = require('os');
//info about current user
const user = os.userInfo();
console.log(user);

//system uptime
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);