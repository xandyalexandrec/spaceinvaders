(function(angular,app) {
    'use strict';

    app.constant('CONFIG', {
        SCREEN_SIZE: 9, // Amount of cells, from 0 to 9
        QTY_ENEMIES: 5, // Maximum amount of enemies
        RESPAWN_ENEMY: 1000, // Respwan time in ms
        VEL_BULLET: 200, // Bullet speed in ms
        SCORE: 10 // Value which the score increases
    });
})(angular,corePage);

