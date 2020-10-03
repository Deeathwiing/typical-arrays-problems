
exports.min = function min (array) {
    if (!Array.isArray(array) || array.length <=0) return 0;
  return Math.min(...array);
}

exports.max = function max (array) {
    if (!Array.isArray(array) || array.length <=0) return 0;
    

  return Math.max(...array);
}

Math.avg = (arr) => {
  let sum = 0;
  arr.forEach(element => {
      sum += element;
  });
  return sum/arr.length;
}

exports.avg = function avg (array) {
    if (!Array.isArray(array) || array.length <=0) return 0;
    

  return Math.avg(array);
}
