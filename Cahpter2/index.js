// typeof diz que tipo de variável foi definida: string, number, boolean etc

var a = 'hello world'
typeof a

var b = 52
typeof b

// Objects objetos são definidos por {}
var objeto = {
    a: 'hello world',
    b: 52,
    c: true
}

objeto.a;		// "hello world"
objeto.b;		// 52
objeto.c;		// true

object['a']       // 'hello world'

var c = "a";

obj[c];			// "hello world"
obj["c"];		// 52

// Array um array é definido po []. Um array é um objeto que retém valores
var arr = [
	"hello world",
	42,
	true
];

arr[0];			// "hello world"
arr[1];			// 42
arr[2];			// true
arr.length;		// 3

typeof arr;		// "object"

// Condições

if (a == 2) {
	// do something
}
else if (a == 10) {
	// do another thing
}
else if (a == 42) {
	// do yet another thing
}
else {
	// fallback to here
}

var a = 42;

var b = (a > 41) ? "hello" : "world";

// similar to:

// if (a > 41) {
//    b = "hello";
// }
// else {
//    b = "world";
// }

// Functions como valores
function foo() {
	// ..
}

var foo = function() {
	// ..
};

var x = function bar(){
	// ..
};