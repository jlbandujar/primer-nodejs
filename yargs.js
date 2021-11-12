var colors = require('colors');
const argv = require('yargs')
            .option('b',{
                alias:'base',
                type:'number',
                demandOption:true
            })
            .check( (argv,options)=> { git 
                if ( isNaN(argv.b)) {
                    throw 'La base tiene que ser un número'
                } else {
                    return true
                }
            })
            .argv;
console.clear();
console.log("Prueba".inverse);
console.log(process.argv);
console.log(argv);
console.log("base:", argv.base)