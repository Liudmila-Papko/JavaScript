//1-33
let item_1 = 5;
let item_2 = 3;
console.log(item_2);
let item_3 = item_1 + item_2;
console.log(item_3);
let item_4 = "Yolochka";
console.log(item_4);
console.log(item_3 + item_4);
console.log(item_3 * item_4);
let item_5 = item_3;
let item_6 = 15;
let item_6_type = typeof item_6;
console.log("—— item_6 == ", item_6, "item_6_type == ", item_6_type, "——");
let item_7 = String(item_6);
let item_7_type = typeof item_7;
console.log( "——  item_7 == ",  item_7, "item_7_type == ",  item_7_type, "——");
//or
console.log( "item_7 == ",  item_7, "item_7_type == ",  item_7_type);
//or
console.log(item_7, item_7_type);
let age_1 = 10;
let age_2 = 18;
let age_3 = 60;

if (age_1 < age_2) {
    console.log("You don't have access cause your age is " + age_1 + " It's less then " + age_2)
}
else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome !")
}
else if (age_1 > age_3) {
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work");
}

//1*
const checkAge = function(age) { //const название-функции age - функция принимает аргумент 
    const age_2 = 18; //постоянное условие
    const age_3 = 60;
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " It's less then " + age_2) 
    }
    else if (age >= age_2 && age < age_3) {//&& - И то, и то условие должно соблюдаться
        console.log("Welcome !")
    }
    else if (age > age_3) {
        console.log("Keep calm and look Culture channel")}
     else {
        console.log("Technical work");
    }}
checkAge(17); //вызов функции и ее аргументы
checkAge(18);
checkAge(61);

// 2*
const checkAge = function(age) {
    const age_2 = 18;
    const age_3 = 60;
if (typeof age !== "number") {  //не равно
    console.log("Error, not number");
    return; //останавливает функцию, если условие не совпадает
  }
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " It's less then " + age_2) 
    }
    else if (age >= age_2 && age < age_3) {
        console.log("Welcome !")
    }
    else if (age > age_3) {
        console.log("Keep calm and look Culture channel")}
     else {
        console.log("Technical work");
    }}
checkAge(17);
checkAge(18);
checkAge(61);
checkAge("Abd");
checkAge("@34");

//3**
const checkAge = function(age) {
    age = parseInt(age); //переводит строки в целые числа или Number
    const age_2 = 18;
    const age_3 = 60;
if (typeof age !== "number" || isNaN(age)) { //isNaN отсеивает строки с не цифрами, преобразованные number
    console.log("Error, not number");
    return; //останавливает функцию, если условие не совпадает
  }
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " It's less then " + age_2) 
    }
    else if (age >= age_2 && age < age_3) {
        console.log("Welcome !")
    }
    else if (age > age_3) {
        console.log("Keep calm and look Culture channel")}
     else {
        console.log("Technical work");
    }}
checkAge(17);
checkAge(18);
checkAge(61);
checkAge("Abd");
checkAge("2");

//4****
const checkAge = function() {
    let age = prompt("Enter your Age:");// prompt открывает модальное окно в браузере, предлагая пользователю ввести данные. 

    age = parseInt(age); //переводит строки в целые числа или Number

    const age_2 = 18;
    const age_3 = 60;
if (typeof age !== "number" || isNaN(age)) { //isNaN отсеивает строки с не цифрами, преобразованные number
    console.log("Error, not number");
    return; //останавливает функцию, если условие не совпадает
  }
    if (age < age_2) {
        console.log("You don't have access cause your age is " + age + " It's less then " + age_2) 
    }
    else if (age >= age_2 && age < age_3) {
        console.log("Welcome !")
    }
    else if (age > age_3) {
        console.log("Keep calm and look Culture channel")}
     else {
        console.log("Technical work");
    }}
    
//JS. HM2
const validateString = function(str) {
    let validStr = true;
    if (typeof str !== "string") {
    console.log(str, "Error, not string");
    return; 
  }
  const strLenght = str.length;
    if (strLenght < 5) {
        console.log(str, "Field should contains min 5 symbols") 
        validStr = false;
    }
    if (strLenght > 64) {
        console.log(str, "Field should contains max 64 symbols") 
        validStr = false;
    }
    const letters = /^[A-Za-z\d@]+$/;
   if (!str.match(letters)) {
      console.log(str, "Error, only symbols, numbers and @")
      validStr = false;
   } 
   const upperLetter = /[A-Z]/;
   if (!str.match(upperLetter)) {
        console.log(str, "Field should contains one or more letter in uppercase")
        validStr = false;
   }
   const number = /[\d]/;
   if (!str.match(number)) {
        console.log(str, "Field should contains one or more numbers")
        validStr = false;
   }
   const at = /[@]/; //проверка, что можно только одну /^[^@]*@[^@]*$/ 
   if (!str.match(at)) {
        console.log(str, "Field should contains @")
        validStr = false;
   }
   if (str.trim() === "") {
    console.log(str, "Field is empty")
    validStr = false;
   }
   if (validStr == true) {
    console.log("It's OK")
   }
}
    
validateString("Abc");
validateString(123);
validateString("123dddfg@Afdfgrthtyjukolpgggggggggggggggggggggggghjjkiuytrewwwwaaassssssaa");
validateString("asdfghjkl");
validateString("1asdfghjkl");
validateString("1@asdfghjkl");
validateString("");
validateString("   ");
validateString("as1@Ddfghjkl");
