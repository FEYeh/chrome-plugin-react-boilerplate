
module.exports = {
    webpack(config, env) {
        config.output.path = __dirname + '/plugin/build'
        config.output.filename = 'index.js'
        config.output.publicPath = '/build/'
        //console.log(config)
        //process.exit(0)
        return config
    }
}
