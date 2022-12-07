// var age=10
// if (age>=65){
// console.log("You get your income from your pension")

// } elseif (age<65 && age>18);{
// console.log("Each month you get a salary")

// } elseif(age<18);{
//     console.log("You get an allowance")
    

// } 
function two() {
    return 2;
}

function one() {
    return 1;
}

function calculate(initialValue, incrementValue) {
    return initialValue() + incrementValue() + incrementValue();
}

console.log(calculate(two, one));

