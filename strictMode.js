//function supporTheProblem() {
//    "use strict"
//    for (i = 0; i < 10; i++) {
//		console.log("Hello")
//    }
//}

//Uncatched ReferencedError:

function supporTheProblem() {
    "use strict"
    for (let i = 0; i < 10; i++) {
		console.log("Hello");
    }
}
function person(name) {
	this.name = name;
}
let fed = person ("fed");
console.log(name);
// feb

"use strict"
function per(name) {
	this.name = name;
}
let f = per('feb');
console.log(name)

// Uncaught TypeError: Cannot set property 'name' of undefined

//"this" will not refer to a newly constructed object:
