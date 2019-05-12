// let login = prompt('Введите имя', ' ');
// let message = (login == 'Вася') ? 'Привет' :
//     (login == 'Директор') ? 'Здравтсвуйте' :
//         (login == '') ? 'Нет логина' :
//             ''; {
//     alert(message);
// }

// let sum1 = 0;
// while(true) {
//     let value = +prompt('Введите число','');
//     if(!value) break;
//     sum1 +=value;
// }
// alert('Сумма:'+sum1)


// for(let i=2; i<=10; i++) {
//     if (i % 2 == 1) continue;
//     alert(i);}


// let i = 0;
// while(i<3) {
//     alert('Номер'+ i +'!');
//     i++;
// }


// let i;
// do {
//     i = prompt('Введите число болшее 100',0);
// } while(i<100 && i != null);


//нахождение простого числа
// nextPrime:  
// for(let i=1000000; i<=200000000; i++){
//     for(let j=2; j<i; j++){
//         if(i%j == 0) continue nextPrime;
//     }
//     alert(i);
// }

// let mess = ' тебе ';
// let age;
// function checkAge(age){
//     age = prompt('Укажите возраст', ' ');
//     return (age>18) || confirm('Родители разрешили' + mess + '?');
// }
// checkAge(age);


// function min(a,b){
//     if (a<b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// function pow(x,n){
//     let result = x;
//     for (let i=1;i<n;i++) {
//         result=x*result;
//     }
//     return result;
// }

// let x = prompt('x?',' ');
// let n = prompt('степень?',' ');
// if (n<=1){
//     alert('Введите целое число больше 1');
// } else {
//     alert(pow);
// }

// function sumTo(n){
//     let sum=0;
//     for (let i=1;i<=n;i++){
//         sum=i+sum;
//     }
//     return sum;
// }
// alert(sumTo(99));

    

// const box = [];

// box.push(item1, wheel, alertSight);

// console.log('box:', box);
// var div = document.getElementById('id_1');



// for(let i = 0; i < box.length; i++) {
//     div.innerHTML += box[i];
//     div.innerHTML += '<br>';
// }
// div.innerHTML += '<br> New array <br>';
// box.forEach((item) => {
//     div.innerHTML += item;
//     div.innerHTML += '<br>';
// });
// let summ1 = 0;

// for (let i = 10; i < 20; i++) {
//     summ1 += i;
    // div.innerHTML += i;
    // div.innerHTML += '<br>';
    // //const line1 = `${i}-${Math.random()}`;
    // // const line1= `i-Math.random()`;
    // box.push(i);

//     console.log('i:', i, box);
// }
// div.innerHTML += '<br> Cymma 1 ';
// div.innerHTML = (div.innerHTML + summ1);
// div.innerHTML += '<br>';

// let summ = 0;

// div.innerHTML += '<br> New array <br>';
// box.forEach((someAwesomeItem) => {
//     summ = (summ + someAwesomeItem);
//     div.innerHTML += someAwesomeItem;
//     div.innerHTML += '<br>';
// });
// div.innerHTML += '<br> Cymma ';
// div.innerHTML += box.length;
// div.innerHTML += '<br>';
// box.push('Ihar');
// div.innerHTML += box[box.length-1];

// let max = 10, min = -10;
// alert(min + Math.random()*(max-min));

//Создание объекта
//  let user = {};
//  user['name'] = 'Вася';
// user.name = 'Вася';
// user.surname = 'Петров';
// user['surname'] = 'Петров';
//  alert(user.name + ' ' + user.surname);
//  user.name = 'Сергей';
//  alert(user.name);
//  delete user.name;

// function isEmpty(obj) {
// for (let key in obj) {
//     return false;
// }
// return true;
// }
// let schdule = {};
// alert (isEmpty(schdule));
// schdule['8:30'] = 'Подъём';
// alert(isEmpty(schdule));



//СПРОСИТЬ!
// let salaries = {
//     Вася : 100,
//     Петя :200,
//     Даша : 300
// };   
// // let sum = 0;
// let max = 0;
// let maxName = "";
// for (let key in salaries) {
//     if (max < salaries[key]) {
//         max = salaries[key];
//         maxName = key;

//     }

    // sum = sum+salaries[key];
// }
// alert(maxName + ' ' + max || 'No body');
// delite salaries.Даша;
// alert(maxName + ' ' + max || 'No body');

// // alert(sum);


// Массив
// let styles = ['Джаз','Блюз'];
// styles.push('Рок-н-Ролл');
// styles[styles.length-2] = 'Классика';
// styles.shift();
// alert(styles);
// styles.unshift('Рэп','Регги');
// alert(styles);

//Случайный элемент массива
// let arr = [1,2,3,4,5,6];
// let rand = Math.floor(Math.random() * arr.length);
// alert(arr[rand]);

// let arr = [];
// while (true) {
//     var a = prompt("Введите число", 0);
//     if (a === "" || a === null || isNaN(a)) 
//     break;
//     arr.push(+a);
// }
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// alert(sum);

// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let arrLenght = arr.map(function(name) {
//     return name.length;
// });
// alert(arrLenght);

// var date = new Date();

// var options = {
//     era: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     weekday: 'short',
//     timezone: 'UTC',
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
// };
// alert( date.toLocaleString("ru", options) ); 

// let value = 123;
// function f() {
//     let value = 321;
//     return value;
// }
// alert(f());
// d=f();
// alert(value);
// alert(d);



// function Calculator(){
//     this.read = function(){
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     };
//     this.sum = function(){
//        return this.a + this.b;
//     };
//     this.mul = function(){
//        return this.a * this.b;
//     };

// }
// let calculator = new Calculator();
// calculator.read();
// alert("Сумма = " + calculator.sum());
// alert("Произведение = " + calculator.mul());

// function Accumulator(startingValue){
//     this.value = startingValue;
//     this.read = function(){
//         this.value += +prompt('Сколько будем добавлять', 0);
//     };
// };
// let accumulator = new Accumulator(10);
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

// function User(fullName){
//     this.fullName = fullName;

//     Object.defineProperties(this,{
//         firstName: {
//             get: function(){
//                 return this.fullName.split(' ')[0];
//             },
//             // set: function(newFirstName) {
//             //     this.fullName = newFirstName + ' ' + this.lastName;
//             // }
//         },
//         lastName: {
//             get: function(){
//                 return this.fullName.split(' ')[1];
//             },
//             // set: function(newLastName) {
//             //     this.fullName = this.firstName + ' ' + newLastName;
//             // }
            
//         }
//     });
// }
// let vasya = new User("Василий Попкин");

// alert(vasya.firstName);
// alert(vasya.lastName);

// vasya.lastName = 'Сидоров';
// vasya.firstName = 'Геннадий';
// alert(vasya.fullName);










