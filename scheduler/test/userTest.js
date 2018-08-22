var should = require('chai').should();

var isTrue = true;
it("should succeed", function () {
    isTrue.should.be.a('boolean');
    isTrue.should.equal(true);
});
it("should fail", function(){
    isTrue.should.equal(false);
})