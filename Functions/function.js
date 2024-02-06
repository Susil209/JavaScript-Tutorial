// basic function

function square(num) {
    return num*num
}

// calling the function
console.log(square(3)); // 9

// function expression

const square1 = function sq(num){
    return num*num
}

console.log(square1(9)); // 81

// anonymous function

const factorial = function (num){
    return num < 2 ? 1 : num * factorial(num-1)
}

console.log(factorial(5)); //120

// passing function and array as parameters to another function

function map(func, arr) {
    const res = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        res[i] = func(arr[i])
    }

    return res
}

const cube = function (num) {
    return num*num*num
}

const nums = [0,2,4,6,8,10]
console.log(map(cube, nums));