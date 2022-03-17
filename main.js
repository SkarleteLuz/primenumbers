function isPrime(number) {
	if (number <= 1) return false;
	if (number === 2) return true;
	else {
	  for (let i = 2; i < number; i++) {
		if (number % i === 0) return false;
	  }
	  return true;
	}
  }
  console.log(isPrime(4)); //false 
  
  function getNprimes(n) {
	const arr = [];
	let i = 2
  
	while (arr.length < n) {
	  if (isPrime(i)) {
		arr.push(i)
	  }
	  i++
	}
	return arr;
  }
  console.log(getNprimes(100)); 
  
  const sumOfNPrimes = (num) => {
	let sum = getNprimes(num).reduce((a, b) => a + b);
	return sum
  }
  console.log(sumOfNPrimes(100));