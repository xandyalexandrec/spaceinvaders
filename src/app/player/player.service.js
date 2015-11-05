(function(angular,app) {
    'use strict';

    app.service('PlayerService', PlayerService);

    PlayerService.$inject = ['CONFIG','GridService'];

    function PlayerService(CONFIG) {

        var player = {};

        /*
         *  Set the player at the bottom y and center x
         */
        this.setPlayer = function() {
            var x = Math.floor(CONFIG.SCREEN_SIZE / 2),
            y = CONFIG.SCREEN_SIZE;
            player.x = x;
            player.y = y;
        };

        this.getPlayer = function() {
            return player;
        };

        this.moveLeft = function(){
            if (player.x > 0) {
                player.x += -1;
            }
        };

        this.moveRight = function(){
            if (player.x < CONFIG.SCREEN_SIZE) {
                player.x += 1;
            }
        };


    }

})(angular,playerPage);
