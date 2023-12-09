function fnA(value, callback) {
  callback(2);
  console.log(value);
}

function fnB(item) {
  console.log("This is callback. ", item);
}

fnA(23, fnB);

function doMath(a, b, callback) {
  const result = callback(a, b);
  return result;
}

function add(x, y) {
  return x + y;
}

console.log(doMath(10, 20, add));

//визначення геолокації

function onGetPositionSuccess(position) {
  console.log("Call onGetPositionSuccess");
  console.log(position);
}

function onGetPositionError(error) {
  console.log("Call onGetPositionError");
  console.log(error);
}

window.navigator.geolocation.getCurrentPosition(
  onGetPositionSuccess,
  onGetPositionError
);

//відкладений виклик, інтервали
function callback() {
  console.log("Через 2 сек в таймауті. Це колбек");
}

console.log("В коді перед таймаутом");
setTimeout(callback, 2000);
console.log("В коді після таймаута");
