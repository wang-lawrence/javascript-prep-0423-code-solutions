const person = {
  firstName: 'Lawrence',
  lastName: 'Wang',
  hobby: 'Basketball',
};

console.log({ ...person });

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is " + fullName);

person.job = 'Actuary';
console.log("The person's current job is : " + person.job);

person.previoiusJob = 'Finance Analyst';
console.log("The person's previous job is : " + person['previoiusJob']);

console.log('The complete person object: ', person);
