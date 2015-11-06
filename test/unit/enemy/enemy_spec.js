describe('app.enemy', function() {

    beforeEach(module('app.core'));
    beforeEach(module('app.grid'));
    beforeEach(module('app.enemy'));

    describe('EnemyService', function() {

        var gridService;
        var EnemyService;
        var CONFIG;

        beforeEach(inject(function(GridService, EnemyService, $injector) {
            gridService = GridService;
            enemyService = EnemyService;
            CONFIG = $injector.get('CONFIG');;
        }));

        describe('.insertStartEnemies', function() {
            it('should insert the amount of configured enemies', function() {
                enemyService.insertStartEnemies();
                expect(Object.keys(enemyService.getEnemies()).length).toEqual(CONFIG.QTY_ENEMIES);
            });
        });

        describe('.killEnemy', function() {
            it('should report true if there are an enemy at the position and if it has been killed and insert a random enemy', function() {
                var pos = {
                    x: 2,
                    y: 5
                };
                gridService.setCellAt(pos);
                expect(enemyService.killEnemy(pos)).toBeTruthy();
            });
        });

        describe('.killEnemy', function() {
            it('should report false if there arent an enemy at the position and if it hasnt been killed', function() {
                var pos = {
                    x: 2,
                    y: 5
                };
                expect(enemyService.killEnemy(pos).length).toBeFalsy();
            });
        });

        describe('.getEnemies', function() {
            it('should return the amount of configured enemies', function() {
                enemyService.insertStartEnemies();
                expect(Object.keys(enemyService.getEnemies()).length).toEqual(CONFIG.QTY_ENEMIES);
            });
        });

    });
});
