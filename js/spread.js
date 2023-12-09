//const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);

const numbers = [
  1000,
  ...[1, 2, 3],
  5000,
  ...[4, 5, 6],
  7000,
  ...[7, 8, 9],
  9000,
];

console.log(numbers);

//Task

const temps = [18, 14, 12, 21, 17, 29, 34];
console.log(Math.max(...temps));
console.log(Math.min(...temps));

const lastWeekTemps = [1, 2, 3];
const currentTemps = [4, 5, 6];
const nextWeekTemps = [7, 8, 9];

const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];

console.log(allTemps);

const defaultSettings = {
  theme: "light",
  showNotifications: true,
  hideSidebar: false,
};

const userSettings = {
  showNotifications: false,
  hideSidebar: true,
};

const finalSettings = {
  ...defaultSettings,
  ...userSettings,
};

console.log(finalSettings);
