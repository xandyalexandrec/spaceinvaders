angular.module("templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("app/game/game.tpl.html","<header>\n    <h1 class=\"score\" ng-if=\"score\">SCORE: {{score.value}}</h1>\n    <button class=\"btn-primary btn-fixed\" ng-click=\"startGame()\">NEW GAME</button>\n</header>\n<section>\n    <article ng-if=\"enemy\" ng-repeat=\"enemy in enemies\" class=\"enemy invaders grid\" ng-class=\"\'grid-\'+enemy.x+\'-\'+enemy.y\"></article>\n    <article ng-if=\"bullet\" ng-repeat=\"bullet in bullets\" class=\"bullet invaders grid\" ng-class=\"bullet.explode ? \'explode \'+\'grid-\'+bullet.x+\'-\'+bullet.y : \'grid-\'+bullet.x+\'-\'+bullet.y\">\n    </article>\n    <article ng-if=\"player\" class=\"player invaders grid\" ng-class=\"\'grid-\'+player.x+\'-\'+player.y\"></article>\n</section>\n");
$templateCache.put("app/intro/intro.tpl.html","\n<section class=\"intro\">\n    <article>\n        <button class=\"btn-primary\" ui-sref=\"game\">NEW GAME</button>\n    </article>\n    <article>\n        <h2>Commands</h2>\n    </article>\n    <article>\n        <span class=\"key\">◀ </span>\n        <span class=\"key\">▶</span>\n        <span>Move the nav</span>\n    </article>\n    <article>\n        <span class=\"key space\">SPACE</span>\n        <span>Shoot</span>\n    </article>\n</section>");}]);