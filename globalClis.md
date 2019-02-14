# Cli with node
- why 
- packages
- installing globally
- private
- public

## Using commander
### multiple commands
```javascript
#!/usr/bin/env node
const util = require('util');
const prog = require('commander');
const str = 'This is a test string with the number %d and a string %s';

prog.version(require('./package.json').version, '-v, --version');

prog.command('eins')
    .alias('e')
    .option('-c, --caps', 'caps')
    .action(actioneins);

prog.command('zwei')
    .option('-f, --flag [value]', 'flag')
    .action(actionzwei);

prog.command('drei')
    .alias('d')
    .option('-r, --required <tag>', 'required value')
    .action(actiondrei);

prog.command('vier [arg]')
    .alias('V')
    .option('-t, --try', 'required value')
    .action(actionvier);

prog.command('*')
    .action(catchall);

prog.parse(process.argv);

if(!prog.args.length){
    actionstd()
}

function catchall(){
    console.log('command not found somewhere else');
}

function actionstd(){
    return console.log('standard');
}

function actioneins(cmd){
    let strformatted = util.format(str, 1, 'hi');
    return console.log(cmd.caps ? strformatted.toUpperCase() : strformatted);
}

function actionzwei(cmd){
    let strformatted = util.format(str, cmd.flag || -1, 'hi');
    return console.log(strformatted);
}

function actiondrei(cmd){
    let strformatted = util.format(str, cmd.required || -1, 'hi');
    return console.log(strformatted);
}

function actionvier(arg, cmd){
    let strformatted = util.format(str, cmd.try || -1, arg || 'llun');
    return console.log(strformatted);
}

```

### git style subcommands