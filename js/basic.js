var a = 1;
//a is a integer
var b = 0.5;
//b is a float
var c = "webdxd";
// c is a sting, ' ' or " "; cannot do calculation
console.log("This is my first javascript file");
console.log(a);
console.log(b);
console.log(c);
var d = "1";
console.log(d);

var arr = [1, 'Learn', 3, 5, true]
console.log(arr);
console.log(arr[0]);
//0 代表它的index（数位）， 从0位开始
var myQuote = "I " + arr[1]; 
//name的时候，第一个字母为小写；第二个单词开头大写；
console.log(myQuote);
a = 8;
a = a + b;
//换数值不用打var, add a(1) to b (0.5) and put the result to a
console.log(a);

var bool = true;
bool = !true;
//! 代表相反
var isTrue =!bool;
console.log(isTrue);
arr = [isTrue, a, b, c];
console.log (arr);
a = 11;
b = 2;
b = a % b;
//%代表取余
console.log(b);
var book1 = {
title: "Harry Potter",
price:29,
description: "A boy who knows magic",
section: ["section1", "section2", "section3"]
}
//{ } 代表object,中间用“,”隔开

var book2 = {
title: "Lord of Ring",
price:50,
description: "A story of a ring"
}

var book3 = {
title: "Lord of Ring 2",
price:49,
description: "A story of a ring 2"
}

var bookCollction = [book2,book3]

//var bookStore = [book1, bookCollction];
var bookStore = [book1, [book2,book3]];

book1.title = "Harry Potter 2";
book1.price += 2;
//increment by a number
book1.price ++;
//increment by 1
book1.price --;
//decrement by 1

console.log(book1);
console.log("Title: " + book1.title);
console.log("Price: " + book1.price);
console.log("Description: " + book1.description);

console.log(bookStore);

console.log(bookStore[0].section[0]);




