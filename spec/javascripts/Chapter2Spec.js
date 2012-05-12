describe("twoPowTen", function() {
  it("returns 2 to the power of 10", function() {
    expect(twoPowTen()).toEqual(1024);
  });
});

describe("twoPowTenFor", function() {
  it("returns 2 to the power of 10", function() {
    expect(twoPowTenFor()).toEqual(1024);
  });
});

describe("triangle", function() {
  it("returns the triangle", function() {
    var triangle_string =  "*\n" +
                           "**\n" +
                           "***\n" +
                           "****\n" +
                           "*****\n" +
                           "******\n" +
                           "*******\n" +
                           "********\n" +
                           "*********\n" +
                           "**********\n";
    expect(triangle()).toEqual(triangle_string);
  });
});

describe("triangleFor", function() {
  it("returns the triangle", function() {
    var triangle_string =  "*\n" +
                           "**\n" +
                           "***\n" +
                           "****\n" +
                           "*****\n" +
                           "******\n" +
                           "*******\n" +
                           "********\n" +
                           "*********\n" +
                           "**********\n";
    expect(triangleFor()).toEqual(triangle_string);
  });
});

describe("triangleInnerWhile", function() {
  it("returns the triangle", function() {
    var triangle_string =  "*\n" +
                           "**\n" +
                           "***\n" +
                           "****\n" +
                           "*****\n" +
                           "******\n" +
                           "*******\n" +
                           "********\n" +
                           "*********\n" +
                           "**********\n";
    expect(triangleInnerWhile()).toEqual(triangle_string);
  });
});