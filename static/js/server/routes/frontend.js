var config = require('../config');

module.exports = function(app) {
    // Home route
    app.get("/", function(req, res) {
        res.render('content/index', {
            title: 'title',
            imageAssets: config.paths.images,
            cssAssets: config.paths.css
        });
    });
};
