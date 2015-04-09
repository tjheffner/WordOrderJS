describe('count', function() {
  it("will return an overall count of 1 for the input 'a'", function() {
    expect(count("a")).to.eql([1, ['a']]);
  });

  it("will return an overall count of 2 for the input 'a cat'", function() {
    expect(count("a cat")).to.eql([2, ['a', 'cat']]);
  });

  it("will return an overall count of 3 for the input 'cat a cat'", function() {
    expect(count("cat a cat")).to.eql([3, ['cat', 'a']]);
  });

  it("will return an overall count of 6 for the input 'dog dog cat cat cat tree'", function() {
    expect(count("dog dog cat cat cat tree")).to.eql([6, ['cat', 'dog', 'tree']]);
  });

});
