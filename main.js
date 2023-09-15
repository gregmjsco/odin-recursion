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