import chalk from './chalkExt'

export const chalkExt = chalk

export default new class Logger {

    options = {
        prefix: '{yellow [StackR23]}',
        debug:  {
            color:      'cyan'
        },
        error:  {
            color:      'red'
        },
        success: {
            color:      'green'
        }
    }

    constructor(args) {}

    setPrefix(prefix) {
        this.options.prefix = prefix || ''
    }

    logArgs (...output) {
        console.log(...output)
    }

    log (str, typePrefix, styleType, styleString) {
        const prefix = this.options.prefix
        let type, color

        if (arguments.length === 1) {
            console.log(chalkExt`{bold ${this.options.prefix}} ${str}`)

            return true
        }

        if (arguments.length === 2) {
            type    = typePrefix
            color   = this.options[type].color

            typePrefix      = this.options[type].prefix || type
            styleType       = this.options[type].colorType || color
            styleString     = color
        }

        console.log(chalkExt`{${styleType} {bold ${this.options.prefix} ${typePrefix}:} {${styleString} ${str}}}`)

        return true
    }

    dir     = (args)    => console.dir(...args)

    debug   = (str) => this.log(str, 'debug')
    error   = (str) => this.log(str, 'ERROR',   this.options.error.color    + 'Bright.bgBlack', this.options.error.color)
    success = (str) => this.log(str, 'SUCCESS', this.options.success.color  + 'Bright',         this.options.success.color)

}
