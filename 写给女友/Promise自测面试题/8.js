async function async1() {
  await async2();
  console.log('async1 end');
}

async function async2() {
  console.log('async2 end');
}
async1();
console.log(10);