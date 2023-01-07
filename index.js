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


//21.Temporal Dead Zone (Vaqtinchalik o'lik zona) nima

// Vaqtinchalik o'lik zona - bu JavaScriptda o'zgaruvchini let va const kalit so'zlari 
//bilan e'lon qilishda yuzaga keladigan xatti-harakatlar, lekin var bilan emas. ECMAScript 6 da 
//letyoki consto'zgaruvchiga uning e'lon qilinishidan oldin (uning doirasi doirasida) kirish 
//ReferenceErrorga olib keladi. Bu sodir bo'ladigan vaqt oralig'i, o'zgaruvchining bog'lanishi 
//yaratilishi va uning e'lon qilinishi o'rtasidagi vaqt oralig'i vaqtinchalik o'lik zona deb ataladi.

//  function somemethod() {
//   console.log(counter1); // undefined
//   console.log(counter2); // ReferenceError
//   var counter1 = 1;
//   let counter2 = 2;
// }
// somemethod()

// 23.  JavaScriptda URL-manzilni qanday dekodlash yoki enkodlash mumkin?
// encodeURI()funksiyasi URL manzilini kodlash uchun ishlatiladi. Bu funksiya parametr sifatida URL 
//satrini talab qiladi va kodlangan qatorni qaytaradi. decodeURI()funksiya URL manzilini ochish uchun 
//ishlatiladi. Bu funksiya parametr sifatida kodlangan URL satrini talab qiladi va bu dekodlangan qatorni 
//qaytaradi.

// Note: encodeURI()funksiyasi URL manzilini kodlash uchun ishlatiladi. Bu funksiya parametr sifatida URL 
// satrini talab qiladi va kodlangan qatorni qaytaradi. decodeURI()funksiya URL manzilini ochish uchun 
// ishlatiladi. Bu funksiya parametr sifatida kodlangan URL satrini talab qiladi va bu dekodlangan qatorni 
// qaytaradi.

// let uri = 'employeeDetails?name=john&occupation=manager';
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log(decoded_uri);

//24 Memoization nima
// Memoizatsiya - bu avvaldan hisoblangan natijalarni keshlash orqali funktsiyaning ishlashini oshirishga 
//harakat qiladigan dasturlash usuli. Har safar xotirada saqlangan funksiya chaqirilganda, uning
// parametrlari keshni indekslash uchun ishlatiladi. Agar ma'lumotlar mavjud bo'lsa, uni butun funktsiyani
// bajarmasdan qaytarish mumkin. Aks holda funktsiya bajariladi va natija keshga qo'shiladi. Keling, 
//xotira bilan funksiya qo'shishga misol keltiraylik,

// const memoizAddition = () => {
//   let cache = {};
//   return (value) => {
//     if (value in cache) {
//       console.log('Fetching from cache');
//       return cache[value]; // Here, cache.value cannot be used as property name starts with the number which is not a valid JavaScript  identifier. Hence, can only be accessed using the square bracket notation.
//     } else {
//       console.log('Calculating result');
//       let result = value + 20;
//       cache[value] = result;
//       return result;
//     }
//   };
// };
// // returned function from memoizAddition
// const addition = memoizAddition();
// console.log(addition(20)); //output: 40 calculated
// console.log(addition(20)); //output: 40 cached

//25.Hoisting nima
// Yuk ko'tarish JavaScript mexanizmi bo'lib, unda kod bajarilishidan oldin o'zgaruvchilar va funksiya 
//deklaratsiyasi o'z doirasining yuqori qismiga ko'chiriladi. Esda tutingki, JavaScript faqat 
//deklaratsiyalarni ko'taradi, ishga tushirishni emas. Keling, o'zgaruvchan yuk ko'tarishning 
//oddiy misolini olaylik,

// console.log(message); //output : undefined
// var message = 'The variable Has been hoisted';
// // Yuqoridagi kod tarjimon uchun quyidagi kabi ko'rinadi,

// var message;
// console.log(message);
// message = 'The variable Has been hoisted'

//26. ES6 da qanday class(siniflar) mavjud
// ES6 da Javascript sinflari JavaScript-ning mavjud prototipiga asoslangan merosiga nisbatan asosan 
//sintaktik shakar hisoblanadi. Masalan, prototipga asoslangan meros quyidagi funksiya ifodasida yozilgan,

// function Bike(model, color) {
//   this.model = model;
//   this.color = color;
// }

// Bike.prototype.getDetails = function () {
//   return this.model + ' bike has' + this.color + ' color';
// };
// ES6 sinflari esa muqobil sifatida belgilanishi mumkin

// class Bike {
//   constructor(color, model) {
//     this.color = color;
//     this.model = model;
//   }

//   getDetails() {
//     return this.model + ' bike has' + this.color + ' color';
//   }
// }

//27
// function Welcome(name) {
//   var greetingInfo = function (message) {
//     console.log(message + ' ' + name);
//   };
//   return greetingInfo;
// }
// var myFunction = Welcome('John');
// myFunction('Welcome '); //Output: Welcome John
// myFunction('Hello Mr.'); //output: Hello Mr.John

//40 Javascriptda qamrov(scope) nima
//Amal qilish doirasi - bu ish vaqtida kodingizning ma'lum bir qismidagi o'zgaruvchilar, funktsiyalar va objektlarga kirish imkoniyati. Boshqacha qilib aytganda, qamrov sizning kodingiz sohalarida o'zgaruvchilar va boshqa resurslarning ko'rinishini aniqlaydi.


// 41 Veb-xotiraga(web storage) qanday kirish mumkin
// Window obyekti mos ravishda (window.localStorage) va (window.sessionStorage) xossalariga ega bo'lgan WindowLocalStorageva WindowSessionStorageobjektlarini amalga oshiradi. Ushbu xususiyatlar Saqlash objektining namunasini yaratadi, bu orqali ma'lum domen va saqlash turi (sessiya yoki mahalliy) uchun ma'lumotlar elementlarini o'rnatish, olish va o'chirish mumkin. Masalan, siz mahalliy saqlash objektlarida quyida ko'rsatilganidek o'qishingiz va yozishingiz mumkinlocalStoragesessionStorage

// 42localStorage.setItem('logo', document.getElementById('logo').value);
// localStorage.getItem('logo');
// 

// 43 Session storageda qanday usullar mavjud
// Window obyekti mos ravishda 
//(window.localStorage) va (window.sessionStorage) 
//xossalariga ega bo'lgan WindowLocalStorageva WindowSessionStorageobjektlarini 
//amalga oshiradi. Ushbu xususiyatlar Saqlash objektining namunasini yaratadi, 
//bu orqali ma'lum domen va saqlash turi (sessiya yoki mahalliy) uchun ma'lumotlar 
//elementlarini o'rnatish, olish va o'chirish mumkin. Masalan, siz mahalliy saqlash 
//objektlarida quyida ko'rsatilganidek o'qishingiz va yozishingiz mumkinlocalStoragesessionStorage

// Save data to sessionStorage
// sessionStorage.setItem('key', 'value');

//  Get saved data from sessionStorage
// let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
// sessionStorage.removeItem('key');

//Remove all saved data from sessionStorage
// sessionStorage.clear();


// 45 Saqlash hodisasi nima va uning voqea ishlovchisi (storage event and
//   StorageEvent - bu boshqa hujjat kontekstida saqlash joyi o'zgartirilganda paydo bo'ladigan hodisa. Holbuki, saqlash xususiyati saqlash hodisalarini qayta ishlash uchun EventHandler hisoblanadi. Sintaksis quyidagi kabi bo'ladi
  
  // window.onstorage = functionRef;
//   Keling, saqlash kaliti va uning qiymatlarini qayd qiluvchi xotira hodisasi ishlovchisidan foydalanish misolini olaylik
  
  // window.onstorage = function (e) {
  //   console.log(
  //     'The ' +
  //       e.key +
  //       ' key has been changed from ' +
  //       e.oldValue +
  //       ' to ' +
  //       e.newValue +
  //       '.'
  //   );
  // };
//   
  
//   Nima uchun sizga veb-xotira kerak
//   Veb-saqlash yanada xavfsizroq va katta hajmdagi ma'lumotlar veb-sayt ishlashiga ta'sir qilmasdan mahalliy sifatida saqlanishi mumkin. Bundan tashqari, ma'lumotlar hech qachon serverga o'tkazilmaydi. Shuning uchun bu Cookie-fayllarga qaraganda ko'proq tavsiya etilgan yondashuv.
  
//   ⬆ Back to Top
  
//   Veb-xotira brauzerining yordamini qanday tekshirish mumkin
//   Veb-xotiradan foydalanishdan oldin brauzerning localStorage va sessionStorage uchun qo'llab-quvvatlanishini tekshirishingiz kerak,
  
//   ```javascript
//   if (typeof Storage !== 'undefined') {
//     // Code for localStorage/sessionStorage.
//   } else {
//     // Sorry! No Web Storage support..
//   }
//   ```
  
//   **[⬆ Back to Top](#table-of-contents)**
//   Veb-workersning brauzer qo'llab-quvvatlashini qanday tekshirish
//   Uni ishlatishdan oldin veb-xodimlar uchun brauzer yordamini tekshirishingiz kerak
  
//   if (typeof Worker !== 'undefined') {
//     // code for Web worker support.
//   } else {
//     // Sorry! No Web Worker support..
//   }
//   ⬆ Back to Top
  
//   Veb-workerga misol keltiring
//   Hisoblash misolida veb ishchilaridan foydalanishni boshlash uchun quyidagi bosqichlarni bajarishingiz kerak
  
//   Veb ishchi faylini yarating: Hisoblash qiymatini oshirish uchun skript yozishingiz kerak. Keling, uni counter.js deb nomlaymiz
//   let i = 0;
  
//   function timedCount() {
//     i = i + 1;
//     postMessage(i);
//     setTimeout('timedCount()', 500);
//   }
  
//   timedCount();
//   Bu yerda postMessage() usuli xabarni HTML sahifasiga qaytarish uchun ishlatiladi
  
//   Veb ishchi objektini yaratish: Brauzer qo'llab-quvvatlashini tekshirish orqali veb-ishchi objektini yaratishingiz mumkin. Keling, bu faylni web_worker_example.js deb nomlaymiz
//   if (typeof w == 'undefined') {
//     w = new Worker('counter.js');
//   }
//   va biz veb-ishchidan xabarlar olishimiz mumkin
  
//   w.onmessage = function (event) {
//     document.getElementById('message').innerHTML = event.data;
//   };
//   Veb ishchini tugatish: Veb ishchilari xabarlarni tinglashda davom etadilar (hatto tashqi skript tugagandan keyin ham) u tugatilmaguncha. Siz xabarlarni tinglashni tugatish uchun terminate() usulidan foydalanishingiz mumkin.
//   w.terminate();
//   Veb ishchisini qayta ishlatish: Agar ishchi o'zgaruvchini aniqlanmagan qilib qo'ysangiz, kodni qayta ishlatishingiz mumkin
//   w = undefined;
//   ⬆ Back to Top
  
//   Web-ishchilarning DOM-da qanday cheklovlari bor
//   WebWorkers quyida joylashgan JavaScript obyektlariga kirish huquqiga ega emas, chunki ular tashqi fayllarda aniqlangan
  
//   1. Window object
//   2. Document object
//   3. Parent object
  
//   


// 'use strict';
//  x = 3.14;
// console.log(x);

//74
// let count=null;
// console.log(count+1);


// 75 Eval nima
// eval() funktsiyasi satr sifatida taqdim etilgan JavaScript kodini baholaydi.
//  Satr JavaScript ifodasi, o'zgaruvchi, bayonot yoki bayonotlar ketma-ketligi bo'lishi mumkin.
// console.log(eval('1 + 2')); 

