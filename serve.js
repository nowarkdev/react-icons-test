import webpack from "webpack";
var WebpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config");
var port = 8081;

export default new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    //noInfo: true,
    stats: {
        color: true
    }
}).listen(port, 'localhost', function(err, result) {
    if(err) {
        console.log(err);
    }
    console.log('Listening at localhost:' + port);
});
