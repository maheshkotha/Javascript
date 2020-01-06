let output = "";
let i = 0;
do {
    output += "* ";
    console.log(output);
    i++;
}while (i < 5);
console.log();

output = "";
i = 1;
do {
    output += i +" ";
    console.log(output);
    i++;
} while (i <= 5);
console.log();

output = "";
let maxVal = 6;
i = 1;
do {
    let j = 1;
    while (j <= maxVal-i) {
        output += j + " ";
        j++;
    }
    console.log(output);
    output ="";
    i++;
} while (i < maxVal);
console.log();

output = "";
i = 1;
do {
    let  j = 1;
    while (j <= i) {
        output += i + " ";
        j++;
    }
    console.log(output);
    output = "";
    i++;
} while (i <= 5);
console.log();

output = "";
i = 5;
do {
    let j = i;
    while (j > 0) {
        output += i + " ";
        j--;
    }
    console.log(output);
    output ="";
    i--;
} while (i > 0);
console.log('')

output ="";
i = 5;
do {
    let j = i;
    while (j > 0) {
        output += j + " ";
        j--;
    }
    console.log(output);
    output = "";
    i--;
} while (i > 0);
console.log();

output = "";
i = 1;
do {
    output += i +" ";
    console.log(output);
    i++;
} while (i <= 5);
console.log();
