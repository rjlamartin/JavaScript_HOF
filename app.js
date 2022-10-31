// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number){
    return (plusNumber) => {
        return plusNumber + number;
    }
}

let plus15 = plus(15);

console.log(plus15(10));

//Exercise 2

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
];

users.forEach((user) => console.log(user.name));

//Exercise 3

let newUsers = users.map((user) => {
    return { name: user.name, score: user.score };
});

console.log(newUsers);

//Exercise 4

let activeUsers = users.filter((user) => user.isActive);

console.log(activeUsers);

//Exercise 5

users.sort((a, b) => {
    console.log(a.score, b.score);

    return b.score - a.score;

    if (a.score > b.score){
        return 1
    } else if (a.score < b.score){
        return -1
    }else{
        return 0
    }
});

console.log(users);

//Exercise 6

let scoreSum = users.reduce((prevValue, currValue, index, array) => {
    return prevValue + currValue.score;
}, 0);

let avg = scoreSum/users.length;

console.log(scoreSum, avg);