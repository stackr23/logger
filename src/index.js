/* eslint-disable no-param-reassign */
/* eslint no-console: off */
import _ from 'lodash'

import chalkExt from './chalkExt'

class Logger {

    // use static props -> update babel!
    defaults = {
        prefix:  '[StackR23]',
        debug:   {style: 'cyan', prefix: 'DEBUG'},
        error:   {style: 'red', prefix: 'ERROR'},
        success: {style: 'green', prefix: 'SUCCESS'}
    }

    constructor(options) {
        console.log('options :>> ', options)

        this.options = _.merge(this.defaults, options)
    }

    log(str, type, styleStringCustom) {
        // if (arguments.length === 1) {
        //     console.log(chalkExt`{${this.options.prefixColor}.bold ${this.options.prefix}} ${str}`)

        //     return true
        // }

        console.log(this.options[type])
        const {styleString, prefix} = this.options[type]


        console.log(
            chalkExt`{bold ${prefix}:} {${styleString} ${str}}`
        )

        return true
    }

    dir     = arg => console.dir(...arg)

    debug   = str => this.log(str, 'debug')

    error   = str => this.log(str, 'error') //, `${this.options.errorColor}Bright.bgBlack`, this.options.errorColor)

    success = str => this.log(str, 'success') //, `${this.options.successColor}Bright`, this.options.successColor)
}

export default new Logger()
