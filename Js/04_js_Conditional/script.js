// Conditional / looping statements

// if-else, switch, for(), while(), do while()
let output = "";
for (let i = 0; i < 5; i++) {
    output += "*";
    console.log(output)
}
output = "";
for (let i =1; i <= 5; i++) {
    output += i;
    console.log(output);
}

output = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        output += i;
    }
    console.log(output);
    output ="";
}

output ="";
for (let i = 5; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        output += j;
    }
    console.log(output);
    output = "";
}

output = "";
let maxVal = 6;
for (let i = 1; i <= maxVal; i++) {
    for (let j = 1; j <= maxVal-i; j++) {
        output += j;
    }
    console.log(output);
    output ="";
}

output = "";
for (let i = 5; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        output += i;
    }
    console.log(output);
    output ="";
}