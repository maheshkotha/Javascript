/* source from MDN
 Storing the information you need variables
 variable is container for value
 To use a variable, you've first got to create it — more accurately,
 we call this declaring the variable. To do this, we type the keyword var or let followed by the name 
 you want to call your variable: */


 // Declaring variables;
//  let myName;
//  var myId;
// Variables are case sensitive

 // Initializing variables;

 let myName = "mahesh"
 var myId = 27

 // Don't use numbers at the start of variables. This isn't allowed and causes an error.
// avoid using JavaScript reserved words 

// updating variable

myName = "Mahesh Babu";
myId = "158w1f0027";


//  variables types
// Numbers
var num = 27;
console.log(typeof(num));   // 'number'

// Strings
var str = 'mahesh';
console.log(typeof(str));   // 'string'

// Booleans

var bool = true;
console.log(typeof(bool));      //'boolean'

//Array
var arr = [1, 2, 3, 'a', 'b', 'c', true, [1, 2, 'a', 'b'], {name: 'abc', add: 'xyz'}]
console.log(arr[1]);        //2
console.log(arr[4]);        //b
console.log(typeof(arr));   // 'object'

// Object 

var obj = {
    naem: 'mahesh',
    add: 'kkl',
    id: 27,
    phone: '1234567890'
};

console.log(obj.add);       //'kkl'
console.log(obj.name);      // 'mahesh'

console.log(typeof(obj));       // 'object'

// keywork const => canot change variable value

const id = 27;
console.log(id);

 
id = '12345'; // can not changed;

console.log(id);



