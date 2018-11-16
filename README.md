# @stackr23/logger
> __beautyful console output helper__

[![Build Status](https://travis-ci.com/stackr23/logger.svg?branch=master)](https://travis-ci.com/stackr23/logger)
[![Greenkeeper badge](https://badges.greenkeeper.io/stackr23/logger.svg)](https://greenkeeper.io/)
[![Maintenance][maintenance-img]][maintenance-url]
[![PRs Welcome][pr-welcome]](http://makeapullrequest.com)<br />
[![npm version](https://img.shields.io/npm/v/%40stackr23%2Flogger.svg)](http://npm.im/@stackr23/logger)
[![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org) 
[![Semantic Versioning][semantic-img]][semantic-url]
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
[gitmoji-img]: https://img.shields.io/badge/%F0%9F%98%BB-gitmoji-F2BF00.svg
[gitmoji-url]: https://gitmoji.carloscuesta.me  
[maintenance-img]: https://img.shields.io/badge/Maintained-yes-brightgreen.svg
[maintenance-url]: https://GitHub.com/stackR23/react23/graphs/commit-activity
[pr-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg
[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg
[semantic-url]: https://semver.org/
<!-- /badge urls -->
