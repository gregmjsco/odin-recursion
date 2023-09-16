console.log("Test")

function fib(n) {
    let result = [0];

    for (let i = 1; result.length < n; i++) {
        result.push(i + result[i - 1])
    }
    console.log("Result: " + result)
}

// fib(8);


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

// console.log(fibRec(8))


/*
    if n < 2
     return
    else
     sort left half of elements
     sort right half of elements
     merge sorted halves
*/

function mergeSort(toSortArray) {
    if (toSortArray.length < 2) {
        return toSortArray
    } else {
        let leftsideArr = toSortArray.slice(0, toSortArray.length / 2);
        let rightsideArr = toSortArray.slice(toSortArray.length / 2);

        return merge(mergeSort(leftsideArr), mergeSort(rightsideArr));
      
        
    }
}

function merge(leftArr, rightArr) {
    const mergedArr = [];

    let leftCounter = 0;
    let rightCounter = 0;

    while(leftCounter < leftArr.length && rightCounter < rightArr.length) {
        if(leftArr[leftCounter] < rightArr[rightCounter]) {
            mergedArr.push(leftArr[leftCounter]);
            leftCounter++;
        } else {
            mergedArr.push(rightArr[rightCounter]);
            rightCounter++
        }
    }

    while(leftCounter < leftArr.length) {
        mergedArr.push(leftArr[leftCounter]);
        leftCounter++
    }

    while(rightCounter < rightArr.length) {
        mergedArr.push(rightArr[rightCounter]);
        rightCounter++;
    }

    return mergedArr;
}

let x = [1,4,5,1,3,1,5,0,2,4,6,4,2,2,0,42,0,2,4,2,0,]

console.log(mergeSort(x));