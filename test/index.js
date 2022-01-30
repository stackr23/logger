import {Logger} from '../src/index'

const log = new Logger({
    prefix: '{cyan.bold [CUSTOM PREFIX] }',
    debug:  {prefix: '{bold.blue CUSTOMDEBUG }'}
})

log.debug('standard debug message')
log.debug('{bgBlue.magenta CUSTOM{reset.yellow  debug}{bgBlack.cyan  info}}')

log.error('unexpected bahavior')
log.success('logger running!')

log.log('{bgBlue.bold.magenta custom output style}')

