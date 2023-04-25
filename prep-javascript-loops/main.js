// create your loops here.
function whileLoop1() {
  const newArray = [];
  let i = 0;
  while (i < 10) {
    newArray.push(i);
    i++;
  }
  return newArray;
}

console.log('whileLoop1 output', whileLoop1());

function whileLoop2() {
  const newArray = [];
  let i = 0;
  while (i < 19) {
    newArray.push(i);
    i += 2;
  }
  return newArray;
}

console.log('whileLoop2 output', whileLoop2());

function forLoop1() {
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}

console.log('forLoop1 output', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion', i, '!');
  }
}

forLoop2();

function forInLoop1(object) {
  const newArray = [];
  for (const prop in object) {
    newArray.push(prop);
  }
  return newArray;
}

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

console.log('for in loop 1 output ', forInLoop1(object));

function forInLoop2(object) {
  const newArray = [];
  for (const prop in object) {
    newArray.push(object[prop]);
  }
  return newArray;
}

console.log('for in loop 2 output ', forInLoop2(object));
