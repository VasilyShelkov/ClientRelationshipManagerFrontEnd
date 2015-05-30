var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.js');
var pathToHammerjs = path.resolve(node_modules, 'hammerjs/hammer.min.js');
var pathToMoment = path.resolve(node_modules, 'moment/min/moment.min.js')

var bowerComponents = path.resolve(__dirname, 'bower_components');
var pathToMaterializeCSS = path.resolve(bowerComponents, 'materialize/dist/css/materialize.min.css');
var pathToMaterializeJS = path.resolve(bowerComponents, 'materialize/dist/js/materialize.min.js');
var pathToJquery = path.resolve(bowerComponents, 'jquery/dist/jquery.min.js');

module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'src/js/home.js')],
    resolve: {
        alias: {
            'react': pathToReact,
            'jquery': pathToJquery,
            'hammerjs': pathToHammerjs,
            'materializeJS': pathToMaterializeJS,
            'materializeCSS': pathToMaterializeCSS,
            'moment': pathToMoment
        }
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
      loaders: [
        {test: /\.jsx?$/, loader: 'babel'},
        {test: /\.css$/, loader: "style!css"},
        {test: /\.woff|.ttf|.svg|.eot$/,loader: 'url?limit=250000'}
      ],
      noParse: [
        pathToReact,
        pathToMaterializeJS,
        pathToMaterializeCSS,
        pathToJquery,
        pathToHammerjs,
        pathToMoment
      ]
    }
};
