// import chalk from 'chalk'
const chalk = require('chalk')
const chalkExt = require('../dist/chalkExt').default;

// console.log(
//     chalk.red('test'),
//     chalk`is this blue? {blue TEST}`
// )

console.log(
    // chalk('is this {blue blue?}')
    // chalk`{red TEST}`
);

let color = 'red'

console.log(
    chalkExt`{${color}Bright.bgBlack TEST}`
)


