// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
    let c = num > 9 ? 1 : 0;
    while ((num = (num + '').split('').reduce((mul, cv) => mul * +cv, 1)) > 9)
        ++c;
    return c;
}
