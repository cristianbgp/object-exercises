function objConcat(array) {
  const newObj = {};
  array.forEach(function(obj) {
    for (key in obj) {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}
