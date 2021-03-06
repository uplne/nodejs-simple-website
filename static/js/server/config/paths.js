var path    = require('path'),
    appRoot = path.resolve(__dirname, '../../../../');

function getPaths() {
    return {
        'appRoot': appRoot,
        'config' : path.join(appRoot, 'config.js'),
        'images' : path.join(appRoot, 'static/images'),
        'js'     : path.join(appRoot, 'static/js'),
        'css'    : path.join(appRoot, 'static/css')
    };
}

module.exports = getPaths;
