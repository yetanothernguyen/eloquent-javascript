function absolute(input) {
  if (input < 0)
    return -input;
  else
    return input;
}

function greaterThan(number) {
  return function(input) {
    return input > number;
  }
}