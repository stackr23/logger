Warning: React version not specified in eslint-plugin-react settings. See https://github.com/yannickcr/eslint-plugin-react#configuration.
import chalk from 'chalk'

// no arrow function -> preserve context!
export default function (parts, ...substitutions) {
    const rawResults = []
    const cookedResults = []

    parts.forEach((v, i) => {
        rawResults.push(parts.raw[i])
        cookedResults.push(parts[i])

        if (i < substitutions.length) {
            rawResults.push(substitutions[i])
            cookedResults.push(substitutions[i])
        }
    })

    const chalkParts = [cookedResults.join('')]
    chalkParts.raw = [rawResults.join('')]

    return chalk(chalkParts)
}
