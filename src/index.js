/* eslint no-console: off */
import chalkExt from './chalkExt'

class Logger {
    constructor() {
        this.options = {
            prefix: '{yellow [StackR23]}',
            debug:  {
                color: 'cyan'
            },
            error: {
                color: 'red'
            },
            success: {
                color: 'green'
            }
        }
    }

    setPrefix(prefix) {
        this.options.prefix = prefix || ''
    }

    log(str, typePrefix, styleType, styleString) {
        if (arguments.length === 1) {
            console.log(chalkExt`{bold ${this.options.prefix}} ${str}`)

            return true
        }

        if (arguments.length === 2) {
            const type = typePrefix
            const {color, prefix, colorType} = this.options[type]

            typePrefix = prefix || type
            styleType = colorType || color
            styleString = color
        }

        console.log(
            chalkExt`{${styleType} {bold ${
                this.options.prefix
            } ${typePrefix}:} {${styleString} ${str}}}`
        )

        return true
    }

    dir = arg => console.dir(...arg)

    debug = str => this.log(str, 'debug')

    error = str =>
        this.log(
            str,
            'ERROR',
            `${this.options.error.color}Bright.bgBlack`,
            this.options.error.color
        )

    success = str =>
        this.log(
            str,
            'SUCCESS',
            `${this.options.success.color}Bright`,
            this.options.success.color
        )
}

export default new Logger()
