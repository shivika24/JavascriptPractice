//****************ASYNC FUNCTION********************              
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
  }
  
  asyncCall();

  //****************BLOCK************************
  var x = 1;
  let y = 1;
  if (true) {
  var x = 2;
  let y = 2;
  }
  console.log(x);
  console.log(y);

  //*************** BREAK************************
  for(let i=0;i<10;i++)
  {
    if(i==3)
    break;
    console.log(i);
  }
   //*************** CONTINUE************************
   for(let i=0;i<10;i++)
   {
     if(i==3)
     continue;
     console.log(i);
   }

   //*****************CLASS*************************
   class Polygon {
    constructor(height, width) {
      this.area = height * width;
    }
  }
  
  console.log("area = "+new Polygon(4, 3).area);

  //******************DO-WHILE**********************
  var text = "";
  var i = 0;
  do {
    console.log(i);
    i++;
  }
  while (i < 5);

  //*******************FOR_LOOP***********************
  for (let i = 0; i < 10; i++) {
    console.log("*");
 }
  //*****************FOR-AWAIT*************************
  function* generator() {
    yield 0;
    yield 1;
    yield Promise.resolve(2);
    yield Promise.resolve(3);
    yield 4;
  }
  
  (async function() {
    for await (let num of generator()) {   
      console.log(num);
    }
  })();
//Output in case of for-of loop
// 0
// 1
// Promise { 2 }
// Promise { 3 }
// 4
//************************For-in******************
const object = { a: 1, b: 2, c: 3 };
for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

//**********************For-of********************
const array1 = ['1a', '2b', '3c'];

for (const element of array1) {
  console.log(element);
}

//**********************FUNCTION*******************
function testNum(a) {
  let result;
  if (a > 0) {
    result = 'positive';
  } else {
    result = 'NOT positive';
  }
  return result;
}

console.log(testNum(-5));

//**********************SWITCH***************************
const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

//************************TRY_CATCH_THROW********************
function getRectArea(width, height) {
  if (isNaN(width) || isNaN(height)) {
    throw 'Parameter is not a number!';
  }
}
try {
  getRectArea(3, 'A');
} catch (e) {
  console.error(e);
}

  