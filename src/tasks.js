import data from "./data.json";

const task11Result = (animals) => {
  const result = {};
  result.dogs = animals.filter((animal) => animal.type === "dog").length;
  result.cats = animals.filter((animal) => animal.type === "cat").length;
  result.avgage = Math.floor(
    animals.reduce((acc, int) => acc + int.age, 0) / animals.length
  );
  return JSON.stringify(result);
};

console.log(task11Result(data));

const task12Result = (animals) => {
  return animals.filter((animal) => animal.type === "dog" && animal.breed)
    .length;
};

console.log(task12Result(data));

const task13Result = (animals) => {
  return animals.filter(
    (animal) =>
      (animal.type === "cat" && animal.breed) ||
      (animal.type === "dog" && !animal.breed)
  );
};

console.log(task13Result(data));

const task14Result = (animals) => {
  const cats = animals
    .filter((animal) => animal.type === "cat")
    .sort((a, b) => {
      if (a.age < b.age) {
        return 1;
      }
      if (a.age > b.age) {
        return -1;
      }
      return 0;
    });
  const dogs = animals
    .filter((animal) => animal.type === "dog")
    .sort((a, b) => {
      if (a.age > b.age) {
        return 1;
      }
      if (a.age < b.age) {
        return -1;
      }
      return 0;
    });
  return [...cats, ...dogs];
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
  let mult = 1;
  for (let i = 1; i <= n; i++) {
    mult *= number;
  }
  return mult;
  /* return number ** n */
};

console.log(myPowFunc(3, 4));

const myFlatFunc = (inputArray) => {
  return inputArray.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? myFlatFunc(val) : val),
    []
  );
};

console.log(myFlatFunc([1, 3, 5, [1, [4, 5], "asdf", [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
