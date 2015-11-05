(function(angular, app) {
        'use strict';

        app.service('ScoreService', ScoreService);

        ScoreService.$inject = ['CONFIG'];

        function ScoreService(CONFIG) {
                var score = {
                        value: 0
                };

                this.inscreaseScore = function() {
                        score.value += CONFIG.SCORE;
                }

                this.resetScore = function() {
                        score.value = 0;
                }

                this.getScore = function() {
                        return score;
                }

        }

})(angular, scorePage);
