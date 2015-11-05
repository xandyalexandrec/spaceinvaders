(function(angular,app) {
    'use strict';

    app.service('BulletService', BulletService);

    BulletService.$inject = ['CONFIG','PlayerService','EnemyService','ScoreService','GenerateUniqueId','$timeout'];

    function BulletService(CONFIG,PlayerService,EnemyService,ScoreService,GenerateUniqueId,$timeout) {

        var player = PlayerService;
        var enemy = EnemyService;
        var bullets = {};
        var timeout = [];

        /*
         * Push a new bullet in the screen
         * It start from the same position as the player.
         * Then try to kill a enemy at same position.
         */
        this.shoot = function() {
            var pos = angular.copy(player.getPlayer());
            var index = GenerateUniqueId.next();
            bullets[index] = pos;
            tryToKill(pos, index);
        }

        this.getBullets = function() {
            return bullets;
        };

        /*
         * Reset the object of bullets and cancel all timeouts
         */
        this.resetBullets = function() {
            bullets = {};
            angular.forEach(timeout, function(timeout) {
                $timeout.cancel(timeout);
            });
            timeout.length = 0;
        }

        function deleteBullet(index) {
            bullets[index] = undefined;
        }

        function moveBullet(index) {
            if (bullets[index].y === 0) {
                deleteBullet(index);
            } else {
                bullets[index].y += -1;
            }
        }

        /*
         * Then try to kill a enemy at position passed.
         * If it kill the enemy, the bullet explode on the screen, and after the timeout, it's deleted.
         * If it don't find a enemy, after the timeout, it moves up and try to kill at the new position.
         * If bullet's y got a 0, the bullet is deleted.
         */
        function tryToKill(pos, index) {
            if (enemy.killEnemy(pos)) {
                bullets[index].explode = true;;
                $timeout(function(){
                    deleteBullet(index);
                },CONFIG.VEL_BULLET)
                ScoreService.inscreaseScore();
            } else {
                timeout.push($timeout(function(){
                    moveBullet(index);
                    if (bullets[index]) {
                        tryToKill(pos, index);
                    }
                },CONFIG.VEL_BULLET));
            }
        }



    }

})(angular,bulletPage);
