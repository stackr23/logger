#/bin/bash
#
# TBD: refactor: build scripts with ? nodemon | rollup | backpack?
rm dist/* -rf
mkdir dist

npx babel ./src/index.js --out-file ./dist/index.js --source-maps inline --presets minify
npx babel ./src/chalkExt.js --out-file ./dist/chalkExt.js --source-maps inline --presets minify
