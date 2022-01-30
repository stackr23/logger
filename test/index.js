import {Logger} from '../src/index'

const log = new Logger({
    prefix: '{cyan.bold [CUSTOM PREFIX] }',
    debug:  {prefix: '{bold.blue CUSTOMDEBUG }'}
})

log.debug('standard debug message')
log.debug('{bgBlue.magenta CUSTOM{reset.yellow  debug}{bgBlack.cyan  info}}')

log.error('unexpected bahavior')
log.success('logger running!')
<<<<<<< HEAD
// Logger.log('{reset.magenta custom {bgBlackBright.yellow output style}}')
Logger.debug('standard debug info')
=======

log.log('{bgBlue.bold.magenta custom output style}')
>>>>>>> 1871a68 (* feat: pass options to Logger instance)

