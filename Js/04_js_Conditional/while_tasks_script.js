let output = "";
let i = 0;
while (i < 5) {
    output += "* ";
    console.log(output);
    i++;
}
console.log();

output = "";
i = 1;
while (i <= 5) {
    output += i +" ";
    console.log(output);
    i++;
}
console.log();

output = "";
i = 1;
while (i <= 5) {
    let  j = 1;
    while (j <= i) {
        output += i + " ";
        j++;
    }
    console.log(output);
    output = "";
    i++;
}
console.log();

output ="";
i = 5;
while (i > 0) {
    let j = i;
    while (j > 0) {
        output += j + " ";
        j--;
    }
    console.log(output);
    output = "";
    i--;
}
console.log();

output = "";
let maxVal = 6;
i = 1;
while (i < maxVal) {
    let j = 1;
    while (j <= maxVal-i) {
        output += j + " ";
        j++;
    }
    console.log(output);
    output ="";
    i++;
}
console.log();

output = "";
i = 5;
while (i > 0) {
    let j = i;
    while (j > 0) {
        output += i + " ";
        j--;
    }
    console.log(output);
    output ="";
    i--;
}
console.log('')