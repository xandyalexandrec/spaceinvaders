(function(angular,app) {
    'use strict';

    app.service('GameService', GameService);

    GameService.$inject = ['EnemyService','PlayerService','BulletService','ScoreService','KeyboardService','$interval','$timeout'];

    function GameService(EnemyService,PlayerService,BulletService,ScoreService,KeyboardService,$interval,$timeout) {
        this.enemy = EnemyService;
        this.player = PlayerService;
        this.bullet = BulletService;
        this.score = ScoreService;

        /*
         *  Insert random enemies in the screen
         *  Insert the player
         *  Clear any bullet fired
         *  Reset the score
         *  Init the keyboard
         */
        this.newGame = function() {
            var self = this;

            this.enemy.insertStartEnemies();
            this.player.setPlayer();
            this.bullet.resetBullets();
            this.score.resetScore();

            KeyboardService.init();
            KeyboardService.on(function(key) {
                $timeout(function(){
                    self.move(key);
                },0)
            });
        };

        /*
         * The player can use the keyboard to fire using the key space
         * and move using the arrow left and right
         */
        this.move = function(key) {
            switch(key) {
                case 'left':
                    this.player.moveLeft();
                    break;
                case 'right':
                    this.player.moveRight();
                    break;
                case 'space':
                    this.bullet.shoot();
                    break;
            }
        }

    }

})(angular,gamePage);
