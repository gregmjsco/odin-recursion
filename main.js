console.log("Test")

function fib(n) {
    let result = [0];

    for (let i = 1; result.length < n; i++) {
        result.push(i + result[i - 1])
    }
    console.log("Result: " + result)
}

fib(8);


function fibRec(n, result = [0, 1]) {
    if (n <= 0) {
        return [];
    }

    if (result.length >= n) {
        return result.slice(0, n);
    }

    result.push((result[result.length - 1] + result[result.length - 2]))
    return fibRec(n, result)
}

console.log(fibRec(8))


/*
    if n < 2
     return
    else
     sort left half of elements
     sort right half of elements
     merge sorted halves
*/

function mergeSort(toSortArray) {
    console.log(toSortArray);
    if (toSortArray.length < 2) {
        return 
    } else {
        let leftsideArr = toSortArray.slice(0, toSortArray.length / 2);
        let rightsideArr = toSortArray.slice(toSortArray.length / 2, toSortArray[toSortArray.length - 1])
        mergeSort(leftsideArr);
        console.log(leftsideArr);
        console.log(rightsideArr)

    }
    

}

let x = [2,1,4,3,6,7,8,9]

mergeSort(x)