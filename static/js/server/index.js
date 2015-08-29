var express    = require('express'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    favicon    = require('static-favicon'),
    errorHandler = require('errorhandler'),
    exphbs     = require('express-hbs'),
    path       = require('path'),
    config     = require('./config'),
    routes     = require('./routes'),
    helpers    = require('./helpers'),
    appRoot    = config.paths.appRoot;

    console.log(appRoot);

function init() {
    app = express();

    setupServer();
}

function setupServer() {
    // Configure server
    app.use(bodyParser());
    app.use(methodOverride());
    app.use(express.static(path.join(appRoot, 'static')));
    app.use('/public', express.static(path.join(config.paths.appRoot, 'public')));

    app.use(errorHandler({
        dumpExceptions: true,
        showStack: true
    }));

    // Template engine
    app.engine('hbs', exphbs.express3({
        partialsDir: appRoot + '/static/views/partials',
        defaultLayout: appRoot + '/static/views/layouts/default.hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', appRoot + '/static/views');

    helpers.registerHelpers();
    
    // Start server
    app.listen(config.server.port, function() {
        console.log('Express server listening on port %d in %s mode', config.server.port, app.settings.env);
    });

    routes.frontend(app);
}

module.exports = init;
