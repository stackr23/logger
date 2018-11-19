#/bin/bash
#
# TBD: refactor: build scripts with ? nodemon | rollup | backpack?
rm dist/* -rf
mkdir dist

npx babel ./src/*.js --out-dir ./dist/ --source-maps inline --presets minify
