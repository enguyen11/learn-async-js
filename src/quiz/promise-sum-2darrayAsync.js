const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
//Create a promise that returns the sum of each row and add all the rows. NOT DONE

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



async function calculateSum (){
    const rowSumPromises = [];
    for (let x =0; x < array2D.length; x++){
        rowSumPromises.push(sumRow(array2D,x))
    }
    try{
        const rowSums = await Promise.all(rowSumPromises);
        let sum = 0;
        rowSums.forEach(rowSum =>
            {
                sum+= rowSum;
            }
        );
        console.log(`Sum = ${sum}`);
        return `done`;
    }
    catch (error) {
        console.log(`Error Msg: ${error}`);
        return `failed`;
    }
}
calculateSum().then((status) => console.log(status));
