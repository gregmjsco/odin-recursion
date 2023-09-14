console.log("Test")

function fib(n) {
    let result = [0];

    for (let i = 1; result.length < n; i++) {
        result.push(i + result[i - 1])
    }
    console.log("Result: " + result)
}

fib(8);