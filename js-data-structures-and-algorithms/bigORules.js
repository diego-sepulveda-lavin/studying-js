// Coefficient Rule "Get rid of Constants"
// If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0.

const coefficientA = n => {
	let count = 0;
	for (let i = 0; i < n; i++) {
		count = count + 1; // This block has a f(n)
	}
	return count;
	// The whole function has a f(n) => O(n)
};

const coefficientB = n => {
	let count = 0;
	for (let i = 0; i < 5 * n; i++) {
		count = count + 1; // This block has a 5f(n)
	}
	return count;
	// The whole function has 5f(n) => O(n)
};

const coefficientC = n => {
	let count = 0;
	for (let i = 0; i < 5 * n; i++) {
		count = count + 1; // This block has a 5f(n)
	}
	count = count + 3; // This line has a f(1)
	return count;
	// The whole function has a 5f(n+1) => O(n)
};

// All Functions have a 0(n)
console.log("coefficientA:", coefficientA(5));
console.log("coefficientB:", coefficientB(5));
console.log("coefficientC:", coefficientC(5));

// Sum Rule "Add Big-Os Up"
// If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n))

const sumA = n => {
	let count = 0;
	for (let i = 0; i < n; i++) {
		count = count + 1; // This block has a f(n)
	}

	for (let i = 0; i < 5 * n; i++) {
		count = count + 1; // This block has a 5f(n)
	}
	return count;
	// The whole function has a f(n) + 5f(n) => 6f(n) => O(n)
};

// Function has a 0(n)
console.log("sumA:", sumA(5));

// Product Rule "Multiply Big-Os"
// If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n))

const productA = n => {
	let count = 0;
	for (let i = 0; i < n; i++) {
		count = count + 0; // This block has a f(n)
		for (let j = 0; j < 5 * n; j++) {
			count = count + 1; // This block has a 5f(n)
		}
	}
	return count;
	// The whole function has a f(n) * 5f(n) => 5f(n^2) => O(n^2)
};

// Function has O(n^2)
console.log("productA:", productA(5));

// Polynomial Rule: “Big-O to the Power of k"
// If f(n) is a polynomial of degree k, then f(n) is O(n k )

const polynomialA = n => {
	let count = 0;
	for (let i = 0; i < n * n; i++) {
		count = count + 1; // This block has a f(n^2)
	}
	return count;
	// The whole function has a f(n^2) => O(n^2)
};

// Function has O(n^2)
console.log("polynomialA:", polynomialA(5));
