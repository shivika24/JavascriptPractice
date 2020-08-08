var str = "hello World";
const str1 = new String("    A String    ");
console.log(str.length);
console.log(str.charAt(0));
console.log(str[0]);
console.log(typeof str);
console.log(typeof str1);
console.log(eval(2+1))
console.log(str.concat("hi"));
console.log(str.indexOf('e'));
console.log(str.endsWith('d'));
console.log(str.lastIndexOf('l'));
console.log(str1.trim());
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str.substring(0,3)); //till end-1
console.log(str.search("Wor")); //-1 in case not found
console.log(str.slice(4, 9));
console.log(str.substring(4, 9)); //substring is similar to slice it cannot accept negative parameters
console.log(str.substr(1, 3)); //second part is the length of the abstracted string
console.log(str.replace('hello', 'hi'));
console.log(str.split(""));

//to compare strings            
let a = 'a'
let b = 'b'
if (a < b) {
console.log(a + ' is less than ' + b)
} else if (a > b) {
console.log(a + ' is greater than ' + b)
} else {
console.log(a + ' and ' + b + ' are equal.')
}
console.log(['1', '7', '11'].map(parseInt));