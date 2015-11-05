(function(angular,app) {
    'use strict';

    app.config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('intro', {
                url: '/intro',
                templateUrl: 'app/intro/intro.tpl.html',
            });
    }

})(angular,introPage);