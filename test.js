// Sir, I did the JS Events Exercises in the HTML File, you can check from there.

// JS String
// Excercise 1
let text="this is text";
console.log(text.length);

// Excercise 2 
let text1="Hello world"
text1[0]="A";
console.log(text1);

// Excercise 3
let text2=document.getElementById('Demo1').innerHTML=
'This is p1'+
'This is p2';

// JS Methods
// Excercise 1
let x='Hello World';
console.log(x.toUpperCase());

// Excercise 2
let x1='    Hello World    ';
let y=x1.trim()
console.log(x.length);
console.log(y.length);

// Excercise 3
let text3='Hello World';
let replace=text3.replace('World','Everyone');
console.log(replace);

// JS String Search
// Excercise 1
let text4='Hello, World World';
console.dir(text.indexOf('World'));

// Excercise 2
let text5='Hello World';
console.log(text5.includes("World"));

// Excercise 3

let x2='Hello World';
let y2=x2.slice(1,5);
console.log(y2);

// JS String Templates
// Excercise 1
let firstname="Jhon";
let age=25;
let text6 =`The person's name is :${firstname} and his age is :${age}`;
console.log(text6);

// Excercise 2
let text7=`Using backticks to create a multiline string`;
console.log(text7);

// Excercise 3
let x3=10;
let y3=0.30;
let total=`Total:${x3*(1+y3)}`;
console.log(total);

// JS Numbers
// Excercise 1
let f=3.57;
let g=4;
console.log(f);
console.log(g);

// Excercise 2
let x4=(0.4*10+0.2*10)/10;
console.log(x4);

// Excercise 3
let a=Number('1000');
console.log(a);

// JS BigInt
// Excercise 1
let x5=BigInt(99999999999999);
let y5=99999999999999n;
console.log(x5);
console.log(y5);

// Excercise 2
let d=6n;
let e=Number(x)+3;
console.log(e);

// Excercise 3
let result=99999999999999n;
console.log('my BigInt is', result.toString());

// JS Number Methods
// Excercise 1
let b=Math.round(65.95);
console.log(b);

// Excercise 2
let num = 10;
let text8 = num.toString();
console.log(text8);

// Excercise 3
let c=Number.parseFloat(10.33);
console.log(c);

// JS Number properties
// Excercise 1

let x7 = Number.MAX_VALUE;
console.log(x7);

// Excercise 2
let x8= Number.MIN_VALUE;
console.log(x8);

// Excercise 3
let x9= Number.NaN;
console.log(x9);

