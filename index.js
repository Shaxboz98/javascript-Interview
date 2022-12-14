// 1- va 10-savollarga javoblar
// 1.Obyektlarni yaratishni nexha xil usuli bor
// Obyekt yaratishning 7 xil usuli bor




// Object dan foydalanib obyekt yaratish
// 1. var obj1= new Object();
//2.Objectlarni create metodi  orqali 

// const obj1=Object.create({hello:"salom"});
// console.log(obj1.hello);

// 3. Obyetni literal  syntax

// const obj1={
//   name:"Shaxboz",
//   age:24
// }
// console.log(obj1.name);

// 4. function constructor 

// function Person(name) {
//   this.name=name,
//   this.age=24
// }
// const Person1 = new Person("Shaxboz")
// const strPerson=JSON.stringify(Person1)
// const objPerson=JSON.parse(strPerson)
// console.log(strPerson);
// console.log(objPerson);

// 5 funcion constructor with prototype

// function Person(){}
// Person.prototype.name='Shaxboz';
// Person.prototype.age=24;
// var obj=new Person();
// console.log(obj.name, obj.age);

// 6. ES6 class syntax

// class Person{
//   constructor(name){
//     this.name=name;
//   }
  
// }
// const obj= new Person('Shaxboz');
// console.log(obj.name);

// 7. Singleton pattern
// var obj =new (function(){
//   this.name='Shaxboz';
// })()


// 2-savol : Call  Apply and Bind
// Call 

// const Car={
//   name:"Shaxboz",
//   age: 24,
//   getName(speed){
//     console.log(this.name);
//   }
// }
// const bmw={
//   name: "x6"
// }
// const Lada={
//   name: "Lasa Largus"
// }
// Car.getName.call(Lada,'200')

// Apply

// const Car={
//     name:"Shaxboz",
//     age: 24,
//     getName(speed){
//       console.log(this.name,speed);
//     }
//   }
//   const bmw={
//   name: "x6"
// }
// const Lada={
//   name: "Lasa Largus"
// }

// Car.getName.apply(Lada,['200'])

// Bind

// const Car={
//   name:"Shaxboz",
//   age: 24,
//   getName(speed){
//     console.log(this.name,speed);
//   }
// }
// const bmw={
// name: "x6"
// }
// const Lada={
// name: "Lasa Largus"
// }
// Car.getName.bind(Lada)()
// 5. Slice

// const arr =[1,2,3,4,5];
// const sliceArr=arr.slice(0,3)
// console.log(arr);
// console.log(sliceArr);
// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3 ]

// 6. Splice
// const arr =[1,2,3,4,5];
// const sliceArr=arr.splice(0,3)
// console.log(arr);
// console.log(sliceArr);
// [ 4, 5 ]
// [ 1, 2, 3 ]

// 8 Map 

// let obj ={name:"Shaxboz"};
// let countMap=new Map();
// countMap.set(obj,1998)
// console.log(countMap.get(obj));

// 9  == va === farqi 
// == bu bizga qiymatlarni tekshiradi
// === bu esa qiymatga qushib san turini ham tekshiradi

// const obj1=10
// const obj='10'
// console.log(obj1==obj);   true

// const obj1=10
// const obj='10'
// console.log(obj1===obj); false

// 10 arow function haqida

// funciondan farqi this constructor() super() argument qaytarmaydi

// 11. first  class function

// const arrowFunc= function(){

// }
// function calculation(arrowFunc){

// }
// calculation(arrowFunc)

// Data type (string,number,null,undefined,Boolean,Symbol,BigInt,Object)

// premitiv: string,number,null,undefined,Boolean,Symbol,BigInt
// nopremitiv object 

// premitiv data typelar qiymati Stackda sqlanadi 
//nopremitiv data typelar id hipda value si Stackda saqlanadi

// const obj1={name: "Shaxboz"}
// const obj2={name: "Shaxboz"}
// console.log(obj1==obj2);  false
// console.log(obj1===obj2); false

// const obj1={name: "Shaxboz"}
// const obj2=obj1
// console.log(obj1==obj2); true
// console.log(obj1===obj2); true

// const obj1={name: "Shaxboz"}
// const obj2=obj1

// obj2.name="Quvonch"
// console.log(obj1); Quvonch
// console.log(obj2); Quvonch

// spled oparation

// const obj1={name: "Shaxboz"}
// const obj2={...obj1}


// obj1.name="Maradona"
// obj2.name="Quvonch"
// console.log(obj1);
// console.log(obj2);

// { name: 'Maradona' }
// { name: 'Quvonch' }

// assign

// const obj1={
//   name: "Shaxboz",
//   getName:function(){
//     return this.name
//   }
// }

// const obj2=Object.assign({},obj1)
// obj1.name="Maradona"
// obj2.name="Quvonch"
// console.log(obj1);
// console.log(obj2);

// Deep clone

// const obj1={
//   name: "Shaxboz",
//   adress:{
//     country:'uzbekiston',
//     city: "Shahrisabz"
//   },
//   getName:function(){
//     return this.name
//   }
// }

//const obj2 = JSON.parse(JSON.stringify(obj1)) object ichidagi qiymatlarni oladi function qiymatini ololmaydi
// const obj2={...obj1} bitta obyekt qiymatini uzgartirsak ikkalasi ham uzgaradi function qiymatini oladi
// const obj2=Object.assign({},obj1)
// const obj2=structuredClone(obj1)
// obj1.name="Maradona"
// obj2.name="Quvonch"
// obj2.adress.city='Toshkent'
// console.log(obj1);
// console.log(obj2);




// 12 savol dan 20 -savolgacha

// 12 Birinchi tartibli(first ordered) funksiya nima
// function sayHello() {
//   return "Hello, ";
// }
// function greeting(helloMessage, name) {
//   console.log(helloMessage() + name);
// }

// greeting(sayHello, "JavaScript!");
// 13.Yuqori tartibli (higher order) funktsiya nima
// Yuqori tartibli funktsiya boshqa funktsiyani argument sifatida qabul qiladigan yoki funktsiyani qaytarish qiymati yoki ikkalasini qaytaradigan funktsiyadir.
// const firstOrderFunc = () =>{
//   console.log('Hello, I am a First order function');
// }
// const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
// higherOrder(firstOrderFunc);

// 14 Unar funksiya nima
// Unar funktsiya (ya'ni monad) - aynan bitta argumentni qabul qiladigan funksiya. Bu funktsiya tomonidan qabul qilingan bitta argumentni anglatadi.

// const unaryFunction = (a) => console.log(a + 10);
// unaryFunction(5)


// 15 Currying funksiyasi nima
// Currying - bu bir nechta argumentli funktsiyani olish va uni har birida faqat bitta argumentga ega bo'lgan funktsiyalar ketma-ketligiga aylantirish jarayoni. Currying matematik Xaskell Karri sharafiga nomlangan . Korriingni qo'llash orqali n-ary funksiya uni birlik funktsiyaga aylantiradi
// const multiArgFunction = (a, b, c) => a + b + c;
// console.log(multiArgFunction(1, 2, 3));

// const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
// curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
// curryUnaryFunction(1)(2); // returns a function: c => 3 + c
// curryUnaryFunction(1)(2)(3); // returns the number 6


// 16 Pure(sof) funktsiya nima
// Sof funktsiya - bu qaytariladigan qiymat faqat uning argumentlari bilan hech qanday nojo'ya ta'sirlarsiz aniqlanadigan funktsiyadir. ya'ni, agar siz bir xil argumentlarga ega funktsiyani "n" soni va ilovadagi joylar soni "n" bilan chaqirsangiz, u har doim bir xil qiymatni qaytaradi
// //Impure
// let numberArray = [];
// const impureAddNumber = (number) => numberArray.push(number);
// //Pure
// const pureAddNumber = (number) => (argNumberArray) =>
//   argNumberArray.concat([number]);

//   console.log(impureAddNumber(6)); // returns 1
//   console.log(numberArray); // returns [6]
//   console.log(pureAddNumber(7)(numberArray)); // returns [6, 7]
//   console.log(numberArray); // returns [6]

// 17 Let kalit so'zining maqsadi nima
// Bayonot blok doirasi mahalliy o'zgaruvchinilet e'lon qiladi . Shunday qilib, let kalit so'zi bilan 
//aniqlangan o'zgaruvchilar u ishlatiladigan blok, bayonot yoki ifoda bilan cheklangan. Holbuki, kalit 
//so'z bilan e'lon qilingan o'zgaruvchilar o'zgaruvchini global miqyosda yoki lokal ravishda blok 
//doirasidan qat'i nazar, butun funktsiyani aniqlash uchun ishlatiladi.var

// let counter = 30;
// if (counter === 30) {
//   let counter = 31;
//   console.log(counter); 
// }
// console.log(counter);

// 18 Let va var o'rtasidagi farq nima
// Siz farqlarni jadval shaklida ko'rsatishingiz mumkin

// var	let
// U JavaScript boshidan beri mavjud	ES6 ning bir qismi sifatida taqdim etilgan
// Funktsiya doirasiga ega	U blok doirasiga ega
// O'zgaruvchilar ko'tariladi	Ko'tarilgan, lekin ishga tushirilmagan
// Farqni ko'rish uchun misol keltiramiz,
// function userDetails(username) {
//   if (username) {
//     console.log(salary); // undefined due to hoisting
//     console.log(age); // ReferenceError: Cannot access 'age' before initialization
//     let age = 30;
//     var salary = 10000;
//   }
//   console.log(salary); //10000 (accessible to due function scope)
//   console.log(age); //error: age is not defined(due to block scope)
// }
// userDetails('John');

// 19. Kalit so'z sifatida let nomini tanlashning sababi nimada?
// letScheme va Basic kabi dastlabki dasturlash tillari tomonidan qabul qilingan matematik bayonotdir . U imkon qadar letyaqin an'anaviy kalit so'z sifatida ishlatadigan o'nlab boshqa tillardan olingan .var


// 20 Qanday qilib o'zgaruvchilarni switch blokida xatosiz qayta e'lon qilasiz
// Agar siz a dagi o'zgaruvchilarni qayta e'lon qilishga harakat qilsangiz, switch blocku xatolarga olib keladi, chunki faqat bitta blok mavjud. Misol uchun, quyidagi kod bloki quyidagi kabi sintaksis xatosini keltirib chiqaradi,

// let counter = 1;
// switch (x) {
//   case 0:
//     let name;
//     break;

//   case 1:
//     let name; // SyntaxError for redeclaration.
//     break;
// }

// Ushbu xatolikka yo'l qo'ymaslik uchun siz case bandi ichida ichki blok yaratishingiz va yangi blokli leksik muhitni yaratishingiz mumkin.

// let counter = 1;
// switch (counter) {
//   case 0: {
//     let name;
//     break;
//   }
//   case 1: {
//     let name; // No SyntaxError for redeclaration.
//     break;
//   }
// }

// 21 Temporal Dead Zone (Vaqtinchalik o'lik zona) nima
// Vaqtinchalik o'lik zona - bu JavaScriptda o'zgaruvchini let va const kalit so'zlari bilan e'lon qilishda yuzaga keladigan xatti-harakatlar, lekin var bilan emas. ECMAScript 6 da letyoki consto'zgaruvchiga uning e'lon qilinishidan oldin (uning doirasi doirasida) kirish ReferenceErrorga olib keladi. Bu sodir bo'ladigan vaqt oralig'i, o'zgaruvchining bog'lanishi yaratilishi va uning e'lon qilinishi o'rtasidagi vaqt oralig'i vaqtinchalik o'lik zona deb ataladi.

// Keling, bu xatti-harakatni misol bilan ko'rib chiqaylik,
// function somemethod() {
//   console.log(counter1); // undefined
//   console.log(counter2); // ReferenceError
//   var counter1 = 1;
//   let counter2 = 2;
// }
// somemethod()