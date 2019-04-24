// Code your solutions in this file
const employee = ['ada', 'Brendan', 'Ali']
function printBadges(employee) {
  for (let i = 0; i < employee.length; i++) {
    console.log(`Welcome ${employee[i]}! You are employee # ${i + 1}.`)
  }
  return employee
};
  
function tailsNeverFails() {

  let flip = 0;
  while (Math.random() >= 0.5) {
    flip++
  };
  return `You got ${flip} tails in a row!`
};

