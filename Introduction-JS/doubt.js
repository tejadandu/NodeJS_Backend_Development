// for every datatype we pass to the typeof(typeof(datatype))
// always returns string
// it follows the idempotency for example: abs(absolute value)

console.log(typeof(typeof(12)));
console.log(typeof(typeof("stirng")));
console.log(typeof(typeof({'name':"teja"})))
console.log(typeof(typeof(undefined)));
console.log(typeof(typeof(null)));
console.log(typeof(typeof(Symbol(171))));
console.log(typeof(typeof(NaN)));
console.log(typeof(typeof(true)));
