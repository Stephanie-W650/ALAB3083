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
// I asked my classmates suggestions to use split which you also showed us together with slice during the class. Thank you!
let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\’s Assistant,26"

let rows = csv.split("\n")

for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].split(',')
    let cell1 = cells[0];
    let cell2 = cells[1];
    let cell3 = cells[2];
    let cell4 = cells[3];

    console.log(cell1, cell2, cell3, cell4);


}



let string = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232";
let strRow = string.split("\n");

for (let n = 0; n < strRow.length; n++) {
    let strCells = strRow[n].split(',')
    let strCell1 = strCells[0];
    let strCell2 = strCells[1];
    let strCell3 = strCells[2];
    let strCell4 = strCells[3];

    console.log(strCell1, strCell2, strCell3, strCell4);
}



