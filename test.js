const test = {
    name:        '@stackr23/logger',
    version:     '2.3.1',
    description: 'beautyful console output helper with custom chalk extension',
    main:        './dist/index.js',
    scripts:     {
        test:               'node ./test/indexBabelRegister.js',
        'full-test':        'npm run build && npm run lint && npm run test',
        build:              'bash ./build.sh',
        'semantic-release': 'semantic-release',
        lint:               'npx eslint . --ignore-pattern=dist/**/*'
    },
    release: {
        branch:  'master',
        plugins: [
            [
                '@semantic-release/commit-analyzer',
                {
                    preset:     'angular',
                    parserOpts: {
                        noteKeywords: [
                            'BREAKING CHANGE',
                            'BREAKING CHANGES',
                            'BREAKING'
                        ]
                    }
                }
            ],
            [
                '@semantic-release/release-notes-generator',
                {
                    preset:     'angular',
                    parserOpts: {
                        noteKeywords: [
                            'BREAKING CHANGE',
                            'BREAKING CHANGES',
                            'BREAKING'
                        ]
                    },
                    writerOpts: {
                        commitsSort: [
                            'subject',
                            'scope'
                        ]
                    }
                }
            ],
            [
                '@semantic-release/changelog',
                {
                    changelogFile:  'CHANGELOG.md',
                    changelogTitle: '# Changelog\n> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)'
                }
            ],
            '@semantic-release/npm',
            [
                '@semantic-release/git',
                {
                    assets: [
                        'CHANGELOG.md',
                        'package.json'
                    ],
                    message: 'chore(release): :bookmark: ${nextRelease.version} :package: package :rocket: published\n\n${nextRelease.notes}'
                }
            ],
            '@semantic-release/github'
        ]
    },
    repository: {
        type: 'git',
        url:  'https://github.com/stackr23/logger.git'
    },
    keywords: [
        'logger',
        'console',
        'chalk',
        'stackr23'
    ],
    author:  'Stefan Friedl (DoubleU23)',
    license: 'MIT',
    bugs:    {
        url: 'https://github.com/stackr23/logger/issues'
    },
    homepage:        'https://github.com/stackr23/logger#readme',
    devDependencies: {
        '@babel/cli':                              '^7.1.5',
        '@babel/core':                             '^7.1.6',
        '@babel/plugin-proposal-class-properties': '^7.1.0',
        '@babel/preset-env':                       '^7.1.6',
        '@babel/register':                         '^7.0.0',
        'babel-eslint':                            '^10.0.1',
        'babel-preset-minify':                     '^0.5.0',
        eslint:                                    '^5.9.0',
        'eslint-config-airbnb':                    '^17.1.0',
        'eslint-plugin-import':                    '^2.14.0',
        'eslint-plugin-jsx-a11y':                  '^6.1.2',
        'eslint-plugin-node':                      '^8.0.0',
        'eslint-plugin-promise':                   '^4.0.1',
        'eslint-plugin-react':                     '^7.11.1',
        'eslint-plugin-standard':                  '^4.0.0',
        'travis-deploy-once':                      '^5.0.9'
    },
    dependencies: {
        chalk: '^2.4.1'
    }
}
