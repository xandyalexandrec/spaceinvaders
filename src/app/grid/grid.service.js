(function(angular, app) {
    'use strict';

    app.service('GridService', GridService);

    GridService.$inject = ['CONFIG'];

    function GridService(CONFIG) {
        this.cells = {};

        /*
         * Delete all the cells
         */
        this.resetCells = function() {
            this.cells = {};
        }

        /*
         * Randomly insert a new cell
         */
        this.setRandomCell = function() {
            this.setCellAt(this.randomAvailableCell());
        };

        /*
         * Insert a cell at specif position
         */
        this.setCellAt = function(pos) {
            var xPos = this._coordinatesToPosition(pos);
            this.cells[xPos] = {
                x: pos.x,
                y: pos.y
            };
        };

        /*
         * Return a cell at specif position
         */
        this.getCellAt = function(pos) {
            var xPos = this._coordinatesToPosition(pos);
            if (this.cells[xPos]) {
                return this.cells[xPos];
            } else {
                return null;
            }
        };

        /*
         * Remove a cell at specif position
         */
        this.deleteCellAt = function(pos) {
            var xPos = this._coordinatesToPosition(pos);
            if (this.cells[xPos]) {
                this.cells[xPos] = undefined;
                return true;
            } else {
                return false;
            }
        };

        /*
         * Get a randomly available cell from all the currently available cells
         */
        this.randomAvailableCell = function() {
            var cells = this.availableCells();
            if (cells.length > 0) {
                return cells[Math.floor(Math.random() * cells.length)];
            }
        };

        /*
         * Get all the available cells
         */
        this.availableCells = function() {
            var cells = [],
                self = this;

            this.forEach(function(x, y) {
                var foundTile = self.getCellAt({
                    x: x,
                    y: y
                });
                if (!foundTile) {
                    cells.push({
                        x: x,
                        y: y
                    });
                }
            });

            return cells;
        };

        /*
        * Run a callback for every cell
        */
        this.forEach = function(cb) {
            var totalSize = CONFIG.SCREEN_SIZE * CONFIG.SCREEN_SIZE - CONFIG.SCREEN_SIZE;
            for (var i = 0; i < totalSize; i++) {
                var pos = this._positionToCoordinates(i);
                cb(pos.x, pos.y, this.cells[i]);
            }
        };

        /*
         * Helper to convert coordinates to position
         */
        this._coordinatesToPosition = function(pos) {
            return (pos.y * CONFIG.SCREEN_SIZE) + pos.x;
        };

        /*
         * Helper to convert x to x,y
         */
        this._positionToCoordinates = function(i) {
            var x = i % CONFIG.SCREEN_SIZE,
                y = (i - x) / CONFIG.SCREEN_SIZE;
            return {
                x: x,
                y: y
            };
        };

    }

})(angular, gridPage);
