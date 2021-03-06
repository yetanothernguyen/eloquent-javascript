function twoPowTen() {
  var result = 1, count = 0;
  while (count < 10) {
    result *= 2;
    count += 1;
  }

  return result;
}

function twoPowTenFor() {
  var result = 1;
  for (var count = 0; count < 10; count += 1)
    result *= 2;
  return result;
}

function triangle() {
  var line = "";
  var result = "";
  var count = 0;
  while (count < 10) {
    line += "*";
    result += line + "\n";
    count += 1;
  }

  return result;
}

function triangleFor() {
  var line = "", result = "";
  for (var count = 0; count < 10; count += 1) {
    line += "*";
    result += line + "\n";
  }

  return result;
}

function triangleInnerWhile() {
  var count = 1;
  var result = "";
  while (count <= 10) {
    var inner_count = 0;
    while (inner_count < count) {
      result += "*";
      inner_count += 1;
    }
    result += "\n";
    count += 1;
  }

  return result;
}