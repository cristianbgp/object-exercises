function deepCompare(o1, o2) {
  if (o1 === o2) return true;
  if (
    o1 == null ||
    typeof o1 != typeof {} ||
    o2 == null ||
    typeof o2 != typeof {}
  ) {
    return false;
  }
  for (let key in o2) {
    if (!(key in o1) || !deepCompare(o1[key], o2[key])) return false;
  }
  return Object.keys(o1).length == Object.keys(o2).length;
}

const result = deepCompare(
  { name: "Joe", age: 34, children: { name: "Rose" } },
  { name: "Joes", age: 34, children: { name: "Rose" } }
);

console.log(result);
