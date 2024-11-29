console.log("hello world!");

// funktioner!!!

// om programmering är att skriva instruktioner så måste vi ha "kommandon" att ge
// då är det ju bra om vi kan skapa egna kommandon...

const a = function () {
	console.log("hej");
};

// detta är ett anrop , funtion call
a();

const b = function (x) {
	console.log(`Det är gott med ${x}`);
};

b("pannkaka");

const c = function (a, b) {
	return a + b;
};

console.log(c(1, 2));

const d = function () {
	return [];
};

// ---------------------------------------
// en version av c ovan

const createUser = function (a, b, c) {
	return {
		name: a,
		age: b,
		hobby: c,
		//greeting: alert("Hello, my name is: " + this.name),
	};
};

const u = createUser("Stina", 12, "virka");

// u.greeting();

// ---------------------------------------

const x = () => "Detta är en arrow function!";

console.log(x());

const y = (a, b) => a + b;

console.log(y(1, 2));
