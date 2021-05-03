/* eslint-disable no-param-reassign */
/* eslint no-console: off */
import _ from 'lodash'

import chalkExt from './chalkExt'

class Logger {

    // use static props -> update babel!
    defaults = {
        prefix:  '[StackR23]',
        debug:   {color: 'cyan', prefix: 'DEBUG'},
        error:   {color: 'red', prefix: 'ERROR'},
        success: {color: 'green', prefix: 'SUCCESS'}
    }

    constructor(options) {
        console.log('options :>> ', options)

        this.options = _.merge(this.defaults, options)
        console.log('this.defaults :>> ', this.defaults)
        console.log('this.options :>> ', this.options)
    }

    log(str, typePrefix, styleType, styleString) {
        if (arguments.length === 1) {
            console.log(chalkExt`{${this.options.prefixColor}.bold ${this.options.prefix}} ${str}`)

            return true
        }

        if (arguments.length === 2) {
            const type  = typePrefix
            const {color, prefix} = this.options[type] //

            typePrefix  = prefix || type
            // styleType   = colorType || color
            styleString = color
        }

        console.log(
            // ${styleType}
            chalkExt`{{bold ${this.options.prefix} ${typePrefix}:} {${styleString} ${str}}`
        )

        return true
    }

    dir     = arg => console.dir(...arg)

    debug   = str => this.log(str, 'debug')

    error   = str => this.log(str, 'error') //, `${this.options.errorColor}Bright.bgBlack`, this.options.errorColor)

    success = str => this.log(str, 'success') //, `${this.options.successColor}Bright`, this.options.successColor)
}

export default new Logger()
