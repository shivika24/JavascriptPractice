//*******************Arrow Function**********************
let me = { 
    name: "Shivika Singla", 
    thisInArrow:() => { 
    console.log("My name is " + this.name); // no 'this' binding here ..Unlike regular functions, arrow functions do not have their own this.
    }, 
    thisInRegular(){ 
    console.log("My name is " + this.name); // 'this' binding works here 
    } 
   };
   me.thisInArrow(); 
   me.thisInRegular();

//******************Default-Parameters*********************
function sum(a, b = 1) {  
    return a + b;
  }
  
  console.log(sum(5, 2));  
  console.log(sum(5));

//********************Rest-Parameter**********************
//can have any number of arguments
function sum(...theArgs) {                          
    let sum=0;
      for(let i=0;i<theArgs.length;i++)
        sum+=theArgs[i];
      return sum;
    }
    
    console.log(sum(1, 2, 3));    
    console.log(sum(1, 2, 3, 4));

//***********************Arguments************************
function func1(a, b) {
    console.log(arguments[0]);  
    console.log(arguments[1]);
  }
  
func1(2, 3);

//************************Getters & Setters*************************
const obj = {
    arr: ['hi1', 'hi2', 'hi3'],
    get data() {
      return this.arr[this.arr.length - 1];
    },
    set current(name) {
        this.log.push(name);
      },
    log: []
  };
  
console.log(obj.data);
obj.current = 'EN';
obj.current = 'FA';

console.log(obj.log);
