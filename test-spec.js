describe('random tests', function() {
	it('should update all messages when I select a message', function() {
		browser.get('http://localhost:5000');
		element(by.cssContainingText('option', 'angry')).click();
		element.all(by.binding('message')).each(function(el){
			expect(el.getText()).toEqual('I am angry');
		});
	});
});