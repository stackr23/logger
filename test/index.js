/* eslint-disable-next-line import/no-unresolved */
import chalk from 'chalk'

import Logger from '../src'
import chalkExt from '../src/chalkExt'


let color = 'red'

console.log(
    chalk`{red test}`,
    chalkExt`test`,
    // chalkExt`{red test}`,
)

// Logger.error('unexpected bahavior')


// Logger.success('logger running!')
// Logger.log('{reset.magenta custom {bgBlackBright.yellow output style}}')
// Logger.debug('standard debug info')

