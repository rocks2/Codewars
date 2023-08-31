// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. 
// If that value has more than one digit, 
// continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.
function digital_root(n) {

  var sNumero = n.toString();
  var sum = 0;


  for (i = 0; i < sNumero.length; i++) {
    sum += parseInt(sNumero[i]);
  }

  if (sum > 9) {
    return digital_root(sum); // missing return here
  }

  return sum;
}

console.log(digital_root(456))