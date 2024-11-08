# JS. HW_2

Напишите валидационный скрипт используя функции  

 1. Скрипт должен на вход принимать строку.  
 2. После проверки строки выводить в консоль сообщение где будет конкретно написано, что не так в ведённой строке.  
 3. Минимум 5 символов в строке  
 4. Максимум 64 символа в строке  
 5. В строке должны быть буквы  
 6. Должна быть хотя бы одна буква в верхнем регистре  
 7. Должна быть хотя бы одна цифра  
 8. Должна быть хотя бы одна @  
 9. Строка не должна быть пустой
```
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
   const at = /[@]/;     //проверка, что можно только одну /^[^@]*@[^@]*$/ 
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
```

