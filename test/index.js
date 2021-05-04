import chalk from 'chalk'

import Logger from '../src/index'
import chalkExt from '../src/chalkExt'

console.log(
    chalk`There are {red.bold 5280 feet} in a mile.`
)

let color = 'blue',
    str = 'fgdgfsdg'

console.log(
    chalk`{${color} ${str}}`
)


// /* eslint-disable-next-line import/no-unresolved */
// import chalk from 'chalk'

// // import Logger from '../src'
// // const chalkExt = require('../dist/chalkExt').default


// let color = 'red'


Logger.error('unexpected bahavior')


Logger.success('logger running!')
// Logger.log('{reset.magenta custom {bgBlackBright.yellow output style}}')
// Logger.debug('standard debug info')

