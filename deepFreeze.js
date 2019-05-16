Object.deepFreeze = function(object) {
  Object.freeze(object);
  for (var key in object) {
    if (typeof object[key] === typeof {}) {
      Object.deepFreeze(object[key]);
    }
  }
};

var a = { b: [42, { x: 9 }] };
Object.deepFreeze(a);

a.b = 42;
console.log(a.b);
