(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const accounts = require('../routes/accounts');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/accounts', accounts);

  };

})(module.exports);
