// forEach()

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let sum = 0;

numbers.forEach((item) => {
  sum += item;
});

console.log(sum);

// map

const doubledNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(doubledNumbers);

const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
];

const playersNames = players.map((p) => p.name);
console.log(playersNames);
const playersIDs = players.map((p) => p.id);
console.log(playersIDs);

const res = players.map(({ id, online }) => ({ id, online }));
console.log(res);
