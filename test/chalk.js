// import chalk from 'chalk'
const chalk = require('chalk')

// const Logger = require('../src/index').default
const chalkExt = require('../dist/chalkExt').default


// Logger.error('ERROR TEST')

// console.log(
//     chalk.red('test'),
//     chalk`is this blue? {blue TEST}`
// )

let color = 'red'
console.log(
    chalk`{red TEST}`
)


console.log(
    chalkExt`{${color}Bright.bgBlack TEST}`
)


