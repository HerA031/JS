const person = {
    name: "Lizb",
    age: 27,
    hobby: "테니스",
    job: "FE Developer",
    "like cat": true,
};

console.log(person.name);
console.log(person['lick cat']);

const property = 'age'
console.log(person[property]);

person.favoriteFood = '떡볶이';
person["pet"] = "강아지";
person.job = "Educator";
delete person.job
delete person['favoriteFood']

console.log(person);

console.log("name" in person);
console.log("address" in person);

console.log(Object.keys(person));
console.log(Object.values(person));
