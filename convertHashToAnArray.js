function convertHashToArray(hash) {
  const array = [];
  for (const key in hash) {
    if (hash.hasOwnProperty(key)) {
      const element = hash[key];
      array.push([key, element]);
    }
  }
  return array.sort();
}

const hash = { name: "Jeremy", age: 24, role: "Software Engineer" };
const object = convertHashToArray(hash);
console.log(object);
