describe('app.grid', function() {

	beforeEach(module('app.core'));
	beforeEach(module('app.grid'));

	describe('GridService', function() {

		var gridService;
		var CONFIG;

		beforeEach(inject(function(GridService, $injector) {
			gridService = GridService;
			CONFIG = $injector.get('CONFIG');;
		      screen_size = CONFIG.SCREEN_SIZE * CONFIG.SCREEN_SIZE - CONFIG.SCREEN_SIZE;
		}));

		describe('.randomAvailableCell', function() {
      		it('should report if there are any matches available when there are matches', function() {
      			expect(gridService.randomAvailableCell()).toBeTruthy();
      		});
		});

		describe('.availableCells', function() {
		    it('should report an object with 90% of the screen size length', function() {
		        expect(gridService.availableCells().length).toEqual(screen_size);
		    });
		});

		describe('.resetCells', function() {
      		it('should clear out the cells in the grid', function() {
				var nullObj = {},
				cells = {};
				for (var x = 0; x < screen_size; x++) {
					cells[x] = x;
				}
				gridService.cells = cells;
				gridService.resetCells();
      			expect(gridService.cells).toEqual(nullObj);
      		});
		});

		describe('.setRandomCell', function() {
      		it('should insert a cell in a random position', function() {
				var pos = {x:2,y:5};
				gridService.setRandomCell();
      			expect(Object.keys(gridService.cells).length).toEqual(1);
      		});
		});

		describe('.setCellAt', function() {
      		it('should set a cell at a specific position', function() {
				var pos = {x:2,y:5};
				gridService.setCellAt(pos);
      			expect(gridService.getCellAt(pos)).toEqual(pos);
      		});
		});

		describe('.getCellAt', function() {
      		it('should return a cell at a specific position', function() {
				var pos = {x:2,y:5};
				gridService.setCellAt(pos);
      			expect(gridService.getCellAt(pos)).toEqual(pos);
      		});
		});

		describe('.deleteCellAt', function() {
      		it('should delete a cell at a specific position', function() {
				var pos = {x:2,y:5};
				gridService.setCellAt(pos);
				gridService.deleteCellAt(pos);
      			expect(gridService.getCellAt(pos)).toEqual(null);
      		});
		});

	});
});