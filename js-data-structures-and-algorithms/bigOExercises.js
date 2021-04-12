// Exercise 1
const someFunction1 = n => {
	let total = 0;
	for (let i = 0; i < 1000 * n; i++) {
		// This block of code is 1000f(n) => O(n)
		for (let j = 0; j < 20 * n; j++) {
			total = total + 1; // This block of code is 20f(n) => O(n)
		}
	}
	// The whole function is 1000f(n) * 20f(n) => 20000f(n^2) => O(n^2)
	return total;
};

console.log(someFunction1(1));

// Exercise 2
const someFunction2 = n => {
	let total = 0;
	for (let i = 0; i < n; i++) {
		// This block of code is f(n) => O(n)
		for (let j = 0; j < n; j++) {
			// This block of code is f(n) => O(n)
			for (let k = 0; k < n; k++) {
				// This block of code is f(n) => O(n)
				for (let l = 0; l < 10; l++) {
					// This block of code is f(10) => O(1)
					total = total + 1;
				}
			}
		}
	}
	// The whole function is f(n) * f(n) * f(n) * f(10)=> 10f(n^3) => O(n^3)
	return total;
};

console.log(someFunction2(10));

// Exercise 3
const someFunction3 = n => {
	let total = 0;
	for (let i = 0; i < 1000; i++) {
		total += 1; // This block of code is f(1000) => O(1)
	}
	return total;
	// The whole function is f(1000) => O(1)
};

console.log(someFunction3(100));

// Exercise 4
const someFunction4 = n => {
	let total = 0;
	for (let i = 0; i < 10 * n; i++) {
		total += 1; // This block of code is 10f(n) => O(n)
	}
	return total;
	// The whole function is 10f(n) => O(n)
};

console.log(someFunction4(100));

// Exercise 5
const someFunction5 = n => {
	let total = 0;
	for (let i = 1; i < n; i = i * 2) {
		total += 1; // This block of code is f(log(n)) => O(log(n))
	}
	return total;
	// The whole function is O(log(n))
};

console.log(someFunction5(5));

// Exercise 6
const someFunction6 = n => {
	let total = 0;
	while (true) {
		total += 1; // This block is an infinite loop
	}
	return total;
	// The whole function is an infinite loop
};

//console.log(someFunction6(5));
