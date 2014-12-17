describe('App', function () {
	
	it('should set the background color', function () {
		var div = document.createElement('div');

		App({
			root: div,
			background: 'green'
		});

		expect(div.style.background).to.equal('green');

	});
});