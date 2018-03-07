require('dotenv').config()
const { FuseBox, Sparky, WebIndexPlugin, CSSPlugin, SassPlugin, QuantumPlugin, JSONPlugin, EnvPlugin } = require('fuse-box')
const { src, task, watch, context, fuse } = require('fuse-box/sparky')
const TypeHelper = require('fuse-box-typechecker').TypeHelper

var typeHelper = TypeHelper({
    tsConfig: './tsconfig.json',
    basePath:'./',
    tsLint:'./tslint.json',
    name: 'App typechecker',
})

context(class {
    getConfig() {
        return FuseBox.init({
            homeDir: 'src',
            output: 'dist/$name.js',
            target : 'browser@es5',
            cache: !this.isProduction,
            hash: this.isProduction,
            useTypescriptCompiler : true,
            plugins: [
                EnvPlugin({
                    MSAL_APPID: process.env.MSAL_APPID
                }),
                [
                    SassPlugin({
                        indentedSyntax: true,
                        importer: true
                    }),
                    CSSPlugin()
                ],
                JSONPlugin(),
                WebIndexPlugin({
                    template: 'src/index.html'
                }),
                this.isProduction && QuantumPlugin({
                    bakeApiIntoBundle: 'app',
                    manifest : true,
                    uglify: true,
                    minify: true,
                    treeshake: true,
                    extendServerImport: true,
                    ensureES5: true,
                })
            ]
        })
    }
    createBundle(fuse) {
        // TODO break out a vendor bundle
        const app = fuse.bundle('app')
            if(!this.isProduction) {
                app.hmr()
                app.watch()
                app.sourceMaps(true)
                app.completed(proc => {
                    console.log(`\x1b[36m%s\x1b[0m`, `client bundled`)
                        // run the type checking
                        typeHelper.runSync()
                    })
            }
        app.instructions('>index.tsx')
        return app
    }
})

task('clean', () => src('dist').clean('dist').exec())

task('default', ['clean'], async context => {
    const fuse = context.getConfig()
    fuse.dev()
    context.createBundle(fuse)
    await fuse.run()
})

task('dist', ['clean'], async context => {
    context.isProduction = true
    const fuse = context.getConfig()
    context.createBundle(fuse)
    await fuse.run()
})
