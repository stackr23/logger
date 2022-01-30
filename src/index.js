/* eslint-disable no-param-reassign */
/* eslint no-console: off */
import _ from 'lodash'

import chalkExt from './chalkExt'

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

        if (arguments.length === 1) {
            console.log(chalkExt`${prefix}${str}`)
            return
        }

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
