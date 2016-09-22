describe('commonjs', function() {
  describe('instance', function() {
    it('should add pageAccelerator in exports object', function() {
      expect(window.exports.pageAccelerator).to.be.an('function');
    });
  });
});
