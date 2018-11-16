# @stackr23/logger
> __beautyful console output helper__

[![npm version](https://badge.fury.io/js/%40stackr23%2Flogger.svg?v100)](http://npm.im/@stackr23/logger)
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)
[![Maintenance][maintenance-img]][maintenance-url]
[![Semantic Versioning][semantic-img]][semantic-url]
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![GitMoji][gitmoji-img]][gitmoji-url]

```javascript
import Logger from '@stackr23/logger'

Logger.success('logger running!')
Logger.error('unexpected bahavior')
Logger.debug('casual debug info')
Logger.log('{reset.magenta custom {bgBlackBright.yellow output style}}')
```
![gitbash-output](gitbash-output.png?raw=true)

### custom style

for custom strings you can use chalks [tagged template literal](https://github.com/chalk/chalk#tagged-template-literal) syntax  

# TBD - CLI/bash usage
> not implemented yet

`npx @stackr23/logger "{yellow.bold my outout string}"`

## TBD

* npm publish
* log levels
* options
* input validation
* ...

<!-- badge urls -->
[gitmoji-img]: https://img.shields.io/badge/gitmoji-%20😻-FF5A79.svg?style=flat-square  
[gitmoji-url]: https://gitmoji.carloscuesta.me  
[maintenance-img]: https://img.shields.io/badge/Maintained%3F-yes-green.svg
[maintenance-url]: https://GitHub.com/stackR23/react23/graphs/commit-activity
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[semantic-img]: https://img.shields.io/badge/semantic-versioning-red.svg
[semantic-url]: https://semver.org/
<!-- /badge urls -->