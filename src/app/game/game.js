(function(angular,app) {
    'use strict';

    app.controller('GameCtrl', GameController);

    GameController.$inject = ['GameService','KeyboardService','$scope','$interval','$timeout'];

    function GameController(GameService,KeyboardService,$scope,$interval,$timeout) {
        this.game = GameService;
        var self = this;

        $scope.startGame = function() {
            self.game.newGame();
            $scope.enemies = self.game.enemy.getEnemies();
            $scope.player = self.game.player.getPlayer();
            $scope.bullets = self.game.bullet.getBullets();
            $scope.score = self.game.score.getScore();
        }

        $scope.startGame();

    }

})(angular,gamePage);