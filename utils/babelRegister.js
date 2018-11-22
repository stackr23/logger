let path = require('path')

const pathNodeModules = path.normalize(
    path.resolve(__dirname, '..', 'node_modules', 'test', 'test2', 'test3', 'test5')
)

require('@babel/register')({
    ignore: [pathNodeModules]
})
