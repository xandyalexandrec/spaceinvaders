describe('app.grid', function() {

	beforeEach(module('app.core'));
	beforeEach(module('app.grid'));

	describe('GridService', function() {

		var gridService;
		var CONFIG;

		beforeEach(inject(function(GridService, CONFIG) {
			gridService = GridService;
			CONFIG = CONFIG;
		}));

		describe('.randomAvailableCell', function() {
      		it('should report there are matches available when there are matches', function() {
      			expect(gridService.randomAvailableCell()).toBeTruthy();
      		});
		});

	});
});