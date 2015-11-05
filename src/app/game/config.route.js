(function(angular,app) {
    'use strict';

    app.config(RouteConfig);

    RouteConfig.$inject = ['$stateProvider'];

    function RouteConfig($stateProvider) {
        $stateProvider
            .state('game', {
                url: '/game',
                templateUrl: 'app/game/game.tpl.html',
                controller: 'GameCtrl'
            });
    }

})(angular,gamePage);