const sampleArr = new Array(1500);

const exampleLinear = n => {
	console.time("exampleLinear");
	let total = 0;
	for (let i = 0; i < n.length; i++) {
		total = total + 1;
	}
	console.timeEnd("exampleLinear");
	return total;
};

const exampleQuadratic = n => {
	console.time("exampleQuadratic");
	let total = 0;
	for (let i = 0; i < n.length; i++) {
		for (let j = 0; j < n.length; j++) {
			total = total + 1;
		}
	}
	console.timeEnd("exampleQuadratic");
	return total;
};

const exampleCubic = n => {
	console.time("exampleCubic");
	let total = 0;
	for (let i = 0; i < n.length; i++) {
		for (let j = 0; j < n.length; j++) {
			for (let k = 0; k < n.length; k++) {
				total = total + 1;
			}
		}
	}
	console.timeEnd("exampleCubic");
	return total;
};

const exampleLogarithmic = n => {
	console.time("exampleLogarithmic");
	let total = 0;
	for (let i = 2; i <= n.length; i = i * 2) {
		total = total + 1;
	}
	console.timeEnd("exampleLogarithmic");
	return total;
};

console.log(exampleLogarithmic(sampleArr));
console.log(exampleLinear(sampleArr));
console.log(exampleQuadratic(sampleArr));
console.log(exampleCubic(sampleArr));
