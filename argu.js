console.clear();


console.log(process.argv);
const [ ,,arg3]=process.argv;
console.log(arg3);
const [ , p]=arg3.split('=');
console.log(p);