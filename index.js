//Part 1: Fizz Buzz
//Loop through all numbers from 1 to 100
for (let i = 1; i <= 100; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}

// Part 2: Prime Time


let n;
let i;
let result = n % i
for (n = 13; n < 17; n++) {

    for (i = 2; i < n; i++) {
        if (result == 0) {

            console.log(false);
             break;
        } 
        if (result != 0){
            console.log(n);


        }     

    }
}


// Part 3: Feeling Loopy

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\’s Assistant,26"

let cell;


for (let i = 0; i < csv.length; i++) {
     let x = csv.slice(i, i+1)
    if (x == ",") {
     console.log(cell)
    }
}


