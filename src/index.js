/* eslint-disable no-param-reassign */
/* eslint no-console: off */
import _ from 'lodash'
import chalk from 'chalk'

import chalkExt from './chalkExt'

class Logger {

    // use static props -> update babel!
    defaults = {
        prefix:      '[StackR23]',
        style:       'yellowBright.bold',
        debug:       {style: 'cyan', prefix: 'DEBUG'},
        error:       {style: 'red', prefix: 'ERROR'},
        success:     {style: 'green', prefix: 'SUCCESS'}
    }

    constructor(options) {
        this.options = _.merge(this.defaults, options)
    }

    log(str, type, styleCustom) {
        // if (arguments.length === 1) {
        //     console.log(chalkExt`{${this.options.prefixColor}.bold ${this.options.prefix}} ${str}`)

        //     return true
        // }

        const {style, prefix} = this.options
        const typeOptions = this.options[type]

        // concat chalk string to prevent extra spaces
        // if (prefix) {}

        console.log(
            chalk`{${style} ${prefix}} {bold.${typeOptions.style} ${typeOptions.prefix}:}`,
            chalk`{${styleCustom || typeOptions.style} ${str}}`
            // chalkExt`{bold ${prefix}:} {${styleString} ${str}}`
        )

        return true
    }

    dir     = arg => console.dir(...arg)

    debug   = str => this.log(str, 'debug')

    error   = str => this.log(str, 'error') //, `${this.options.errorColor}Bright.bgBlack`, this.options.errorColor)

    success = str => this.log(str, 'success') //, `${this.options.successColor}Bright`, this.options.successColor)
}

export {Logger}
export default new Logger()
