(function(angular,app) {
    'use strict';

    angular.module('app.enemy')
    .service('EnemyService', EnemyService);

    EnemyService.$inject = ['CONFIG','GridService','$timeout'];

    function EnemyService(CONFIG,GridService,$timeout) {

        var grid = GridService;

        /*
         *  Insert random enemies in the screen
         */
        this.insertStartEnemies = function() {
            grid.resetCells();
            for(var i=0; i<CONFIG.QTY_ENEMIES; i++) {
                grid.setRandomCell();
            }
        };

        /*
         * Delete the enemy at the passed position {x:int,y:int}
         * After the timeout create a another random enemy
         * If the enemy has been killed return true, if not return false
         */
        this.killEnemy = function(pos){
                if (grid.deleteCellAt(pos)) {
                    $timeout(function(){
                        grid.setRandomCell();
                    },CONFIG.RESPAWN_ENEMY);
                    return true;
                } else {
                    return false;
                }
        };

        this.getEnemies = function() {
            return grid.cells;
        };

    }

})(angular,enemyPage);
