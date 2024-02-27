const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//Create a promise that returns the sum of each row and add all the rows. NOT DONE
function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            resolve(arr);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

function sumRow (row) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(row)) {
            let sum = 0;
            for (let i = 0; i < row.length; i++) {
                sum += row[i];
            }
            resolve(sum);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
    });
}

const sumPromise1 = sum2DArray(array2D);
sumPromise1.then((arr) =>
    {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                sum += arr[i][j];
            }
        }
        console.log('resolving ... ');
        console.log(sum);
    }

    )
    .catch((err) => console.log(err));
