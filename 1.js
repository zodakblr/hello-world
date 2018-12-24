// let login = prompt('Введите имя', ' ');
// let message = (login == 'Вася') ? 'Привет' :
//     (login == 'Директор') ? 'Здравтсвуйте' :
//         (login == '') ? 'Нет логина' :
//             ''; {
//     alert(message);
// }
const box = [];

// box.push(item1, wheel, alertSight);

console.log('box:', box);
var div = document.getElementById('id_1');



// for(let i = 0; i < box.length; i++) {
//     div.innerHTML += box[i];
//     div.innerHTML += '<br>';
// }
// div.innerHTML += '<br> New array <br>';
// box.forEach((item) => {
//     div.innerHTML += item;
//     div.innerHTML += '<br>';
// });
let summ1 = 0;

for (let i = 10; i < 20; i++) {
    summ1 += i;
    div.innerHTML += i;
    div.innerHTML += '<br>';
    //const line1 = `${i}-${Math.random()}`;
    // const line1= `i-Math.random()`;
    box.push(i);

    console.log('i:', i, box);
}
div.innerHTML += '<br> Cymma1 ';
div.innerHTML = (div.innerHTML + summ1);
div.innerHTML += '<br>';

let summ = 0;

div.innerHTML += '<br> New array <br>';
box.forEach((someAwesomeItem) => {
    summ = (summ + someAwesomeItem);
    div.innerHTML += someAwesomeItem;
    div.innerHTML += '<br>';
});
div.innerHTML += '<br> Cymma ';
div.innerHTML += box.length;
div.innerHTML += '<br>';
box.push('Ihar');
div.innerHTML += box[box.length-2];



