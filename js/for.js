// for loop


// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }
//0, 1, 2, 3, 4, ... 9

let i = 0;
for (; i < 10; i = i + 2) {
    console.log(i);
}

let arr = [1, 2, 5, 8, 9];

console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])

function iterateArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}

iterateArray([1, 2, 3])


