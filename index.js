//let num1 = 10.22324
//let num2 = 25;
//console.log(`Number 1 is ${num1}`);
//console.log(`Number 2 is ${num2}`);

function add(num1, num2) {
  return num1 += num2;
}
let a = add(num1,num2);
console.log(`${num1}+${num2} = ${a}`);

function subtract(num1, num2) {
  return num1 -= num2;
}
//let b = subtract(num1, num2);
//console.log(`${num1}-${num2} = ${b}`);

function multiply(num1, num2){
  return num1 * num2;
}
//let c = multiply(num1, num2);
//console.log(`${num1}*${num2} = ${c}`);

function divide(num1,num2) {
  return num1 / num2;
}
//let d = divide(num1, num2);
//console.log(`${num1}/${num2} = ${d}`);

function increment(n) {
  n++;
  return n;
}
//let e = increment(num1);
//console.log(`increment ${num1} ==> ${e}`);

function decrement(n) {
  n--;
  return n;
}
//let f = decrement(num1);
//console.log(`decrement ${num1} ==> ${f}`);

function makeInt(n){
  return parseInt(n, 10);
}
//let g = makeInt(num1);
//console.log(g)

function preserveDecimal(n){
  return parseFloat(n);
}
//let h = preserveDecimal(num1);
//console.log(h)