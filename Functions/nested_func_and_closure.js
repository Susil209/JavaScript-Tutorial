
// closure 

function outside(x) {
    function inside(y) {
        return x+y
    }

    return inside
}

const fnInside = outside(3)
console.log(fnInside(4)); // 7
console.log(outside(3)(4)); // 7
console.log(fnInside);

// default parameter
function multiply(x, y=10){
    return x*y
}

console.log(multiply(2)); // 20

// rest parameters

function myFun(multiplier, ...nums){
    return nums.map(x => multiplier*x)
}

console.log(myFun(10,20,30,40)); // [200,300,400]


// Arrow function
