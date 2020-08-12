#!/usr/bin/env node
const program = require('commander');
const net = require('net');
const carrier = require('carrier');
const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs');

program
    .option('-o, --output <fileabsolutepath>', 'give a absolute file path, of any extension, that contains a list of commands, each command inside a parentheses "()"\n' +
        'Example of file:\n' +
        '\t\t(login:)\n' +
        '\t\t(password:)\n' +
        '\t\t(swa-abc-123#)\n' +
        '\t\t(                          ^ error\n' +
        '\t\t%30 : erro qualquer\n' +
        '\t\tswa-abc-123#)\n' +
        '\t\t(swa-abc-123#)\n');
program.parse(process.argv);
console.log(program.output);

// figlet.fonts(function(err, fonts) {
//     if (err) {
//         console.log('something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.dir(fonts);
// });

console.log(chalk.cyan(figlet.textSync('ECP Telnet CLI.', {font: '3D-ASCII'})));
process.stdout.write(`${chalk.bgBlue('A ECP Telnet CLI for tests purpose, by Rômulo Rocha - rrocha@hpe.com\n\n\n')}`);

let commandNum = 0;
let listOfCommands = [];

fs.readFile(program.output, 'utf8', function(err, contents) {
    const pattern = /\((.*?)\)/gs;
    let found;
    while(found = pattern.exec(contents)) {
        listOfCommands.push(found[1]);
    };
    // console.log(listOfCommands);
});

const server = net.createServer(con => {

    con.write(listOfCommands[commandNum]);

    carrier.carry(con, line => {
        process.stdout.write(`${chalk.bgBlack('Received Command: ')}`);
        process.stdout.write(`${chalk.bgBlackBright(line + '\n')}`);

        let command = listOfCommands[++commandNum];
        if(typeof command === 'undefined') {
            command = 'out_of_commands['+program.output+']';
        }
        process.stdout.write(`${chalk.bgBlack('Replies with: ')}`);
        process.stdout.write(`${chalk.bgBlackBright(command + '\n')}`);


        con.write(command);
    })

})

server.listen(4001);
