const path            = require('path')

const pathNodeModules = path.normalize(
    path.resolve(__dirname, '..', 'node_modules'),
)

require('@babel/register')({
    ignore: [ pathNodeModules ],
})
