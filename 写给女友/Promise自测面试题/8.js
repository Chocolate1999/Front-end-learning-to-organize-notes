// async function async1() {
//   await async2();
//   console.log('async1 end');
// }

// async function async2() {
//   console.log('async2 end');
// }
// async1();
// console.log(10);


async function async1() {
  try {
    await async2();
  } catch (err) {
    console.log('async1 end');
    console.log(err);
  }
}

async function async2() {
  console.log('async2 end');
  return Promise.reject(new Error('error!!!'));
}
async1();
console.log(10);