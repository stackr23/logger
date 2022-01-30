/* eslint-disable no-param-reassign */
/* eslint no-console: off */
import _ from 'lodash'
<<<<<<< HEAD
import chalk from 'chalk'
// import chalkExt from './chalkExt'
=======

import chalkExt from './chalkExt'
>>>>>>> 1871a68 (* feat: pass options to Logger instance)

// TODO: use static props -> update babel!
class Logger {

    defaults = {
        prefix:  '{bold.yellow [StackR23] }',
        log:     {style: 'reset', prefix: 'bold.yellow LOG - '},
        debug:   {style: 'cyan', prefix: '{bold.cyan DEBUG: }'},
        error:   {style: 'red', prefix: '{bold.red ERROR: }'},
        success: {style: 'green', prefix: '{bold.green SUCCESS: }'}
    }

    constructor(options) {
        this.options = _.merge(this.defaults, options)
        console.log('this.defaults :>> ', this.defaults)
        console.log('this.options :>> ', this.options)
    }

    log(str, type = 'log', styleCustom) {
        const {prefix, [type]: typeOptions} = this.options

<<<<<<< HEAD
            return true
        }

        const {style, prefix} = this.options
        const typeOptions = this.options[type]

=======
        if (arguments.length === 1) {
            console.log(chalkExt`${prefix}${str}`)
            return
        }

>>>>>>> 1871a68 (* feat: pass options to Logger instance)
        console.log(
            (prefix ? chalkExt`${prefix}` : '') +
            (typeOptions.prefix ? chalkExt`${typeOptions.prefix}` : '') +
            chalkExt`{${typeOptions.style} ${str}}`
        )
    }

    debug   = str => this.log(str, 'debug')
    error   = str => this.log(str, 'error')
    success = str => this.log(str, 'success')
}

export {Logger}
export default new Logger()
