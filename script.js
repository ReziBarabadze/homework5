'use strict'


// დავალება 1 - 1.მოცემულია მასიცი:
// let array2 = [14, 150, 'css', null, 'javascript', 25];

// შექმენით ახალი მასივი map ფუნქციის საშუალებით შემდეგი ლოგიკით: თუ ელემენტი არის რიცხვი, ამ მასივში უნდა იყოს ამ რიცხვის კვადრატი. თუ ელემენტი არის სტირნგი, მაშინ ახალ მასივში უნდა იყოს ეს ტექსტი დიდი ასოებით. სხვა შემთხვევაში ელემენტი უნდა დაემატოს უცვლელად.


// let array2 = [14, 150, 'css', null, 'javascript', 25];


// let numbersArray = array2.map(function(item) {
//   if (item => (typeof item === 'number' ? item : null))
// })


 

// console.log(numbersArray);
























//დავალება 2 prompt ფუნქციის საშუალებით კითხეთ მომხმარებელს შემდეგი კითხვა: საქართველოს დედაქალაქი? სწორი პასუხი ჩაწერეთ პატარა ასობიეთ და  შეინახეთ ცვლადში. როდესაც მიიღებთ პასუხს მომხმარებლისგან, გადაიყვანეთ ეს პასუხი პატარა ასოებად და შეადარეთ სწორ პასუხს. თუ მომხმარებლის პასუხი სწორია, დაბეჭდეთ სწორია, თუ არა მაშინ დაბეჭდეთ არასწორია.
































//დავალება 3 -  მოცემულია მასივი:
// let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];
// map-ის გამოყენებით შექმენით ახალი მასივი, რომელშიც array მასივიდან თითოეული ელემენტი იქნება 3-ზე გაყოფილი;


let  array5 = [12, 25, 3, 6, 8, 14, 7, 23];


let newNumbersArray =  array5.map(function(item) {
  return item / 3;
});

console.log(newNumbersArray);































//დავალება 4 -  .მოცემულია მასივი, შემდეგი მნიშვნელობებით - let array1 =[“hello1”, 14,24, “hello2”] გამოიტანეთ მარტო ციფრები მეთოდის საშუალებით;



let array1 =['hello1', 14, 24, 'hello2'];


function onlyNumbers(arr) {
  
  let output = [];
  
arr.forEach(e => {if (typeof (e) === 'number') {output.push(e)}})
  return output
} 

console.log(onlyNumbers(array1));
























//დავალება 5 - .მოცემულია მასივი:
// let languages = ['html', 'css', 'javascript', ‘python’, 'php'];
// ფილტრის საშულებით გაფილტრეთ და გამოიტანეთ მარტო ის სიტყვა რომლის სიმბოლოების რაოდენობა იქნება 3-ზე მეტი;

let languages = ['html', 'css', 'javascript', 'python', 'php'];


let newArray = languages.filter(function(item1) {
  return item1.length > 3;
});

console.log(newArray);






























//დავალება 6 - .მოცემულია მასივი:
// let words = ['Madrid', 'rome', 'Milan', 'berlin'];
// filter მეთოდის საშუალებით დააბრუნეთ მასივი, რომელიც შედგება ისეთი სიტყვებისგან რომელიც შეიცავს ასო m-ს ან M-ს;

let words = ['Madrid', 'rome', 'Milan', 'berlin'];


let newArray1 = words.filter(function(item2) {
  return item2.includes('M', 'm'); //ეს მეორე m ვეღარ ავამუშავე :/
})

console.log(newArray1);































//დავალება 7 - მოცემულია: let link = “https://google.com”. დაწერეთ ფუნქცია, რომელიც პარამეტრად იღებს ამ ცვლადს, და შეამოწმეთ მეთოდის საშუალებით არის თუ არა ამ ცვლადში “https://“. თუ კი გამოიტანეთ - კი მოიცავს, თუ არა - არა, არ მოიცავს




// let link = 'https://google.com';

// let incLetter = link.includes(function(link) {
//   return link.includes('https://');

// })


// console.log(link);























//დავალება 8 - . შეამოწმეთ მოცემულ მასივში let array6 = [-1, -2, -3, 4]; არის თუ არა ერთი მაინც დადებითი რიცხვი some მეთოდით.



// let array6 = [-1, -2, -3, 4];


// let result = Numbers.some(positive)

// function positive(item) {
//   return item >= 0;

// }
// console.log(result);




























//დავალება 9 - .მოცემულია სტრინგი - ‘12345’, გაიგეთ ამ რიცხვებსის ჯამი. ( უნდა გადაიყავნოთ მასივში, გათ
// ვალოთ ჯამი, და შემდგ თითოეული სტრინგი გადაიყავნოთ რიცხვში)

function stringInfo(str){

let stringInfo = '12345';

let result1 = stringInfo.split('');
let sum = result1.reduce(function(total, num){
  return parseFloat(total) + parseFloat(num);
});
return sum;

}





















//დავალება 10 - Გამოთვალეთ ნებისმიერი რიცხვებს ჯამი reduce მეთოდით



// let array7 = [[23, 11], [5, 221, 19], [44, 56, 72], [17, 39]].reduce(function(accumulator, currentValue) {
//   return accumulator.concat(currentValue);
// }, 0)

// console.log(array7);






















//დავალება 11 - 
// Გაერთიანეთ სამი მასივის მნიშვენლობები let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
//  Ერთ მასივში


let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];

let concatArray = arr1.concat(arr2, arr3);
console.log(concatArray);
