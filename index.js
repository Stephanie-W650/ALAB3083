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

//one way when numbers over 10
for (n = 13; n < 100; n++) {

    if (n % 2 != 0 && n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
        if (n > 13) {
            console.log(n)
            break
        }
    }
}


//below is another way, that I am still working on,not sure if I can use boolean true or wrong for this or not which I Googled online
// for (n = 13; n < 100; n++) {

//   for (i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i == 0) {
//     continue;
//       // console.log(n + "is not prime")
//     } else
//       console.log(n)
    

//   }
// }




// Part 3: Feeling Loopy

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\’s Assistant,26"

let rows = csv.split("\n")

let firstrow = rows[0].split(`,`)
let cell1 = firstrow[0]
let cell2 = firstrow[1]
let cell3 = firstrow[2]
let cell4 = firstrow[3]

console.log(cell1, cell2,cell3,cell4)

let secondrow = rows[1].split(`,`)
let cell1R2 = secondrow[0]
let cell2R2 = secondrow[1]
let cell3R2 = secondrow[2]
let cell4R2 = secondrow[3]

console.log(cell1R2, cell2R2,cell3R2,cell4R2)

let thirdrow = rows[2].split(`,`)
let cell1R3 = thirdrow[0]
let cell2R3 = thirdrow[1]
let cell3R3 = thirdrow[2]
let cell4R3 = thirdrow[3]

console.log(cell1R3, cell2R3,cell3R3,cell4R3)

let forthrow = rows[3].split(`,`)
let cell1R4 = forthrow[0]
let cell2R4 = forthrow[1]
let cell3R4 = forthrow[2]
let cell4R4 = forthrow[3]

console.log(cell1R4, cell2R4, cell3R4,cell4R4)

let fifthrow = rows[4].split(`,`)
let cell1R5 = fifthrow[0]
let cell2R5 = fifthrow[1]
let cell3R5 = fifthrow[2]
let cell4R5 = fifthrow[3]

console.log(cell1R5, cell2R5, cell3R5,cell4R5)





