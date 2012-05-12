describe("absolute", function() {
  it("returns the absolute value", function() {
    expect(absolute(0)).toEqual(0);
    expect(absolute(5)).toEqual(5);
    expect(absolute(-5)).toEqual(5);
  });
});

describe("greaterThan", function() {
  it("returns the correct test function", function() {
    var greaterThan5 = greaterThan(5);
    expect(greaterThan5(6)).toEqual(true);
    expect(greaterThan5(5)).toEqual(false);
  });
});