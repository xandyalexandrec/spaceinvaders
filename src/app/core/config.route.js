(function(angular,app) {
    'use strict';

    app.config(RouteConfig);

    RouteConfig.$inject = ['$urlRouterProvider'];

    function RouteConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise('/intro');
    }

})(angular,corePage);