//Задание 1.
//Напишите программу, которая работала бы следующим образом: 
//в prompt вводится значение.С помощью унарного плюса
//(арифметический оператор) необходимо преобразовать 
//его в число, затем проверить с помощью typeof,
// принадлежит ли оно к множеству Number.
//Если это число, то вывести в консоль чётное оно
//или нечётное.
//Если передано не число, выведите:
// «Упс, кажется, вы ошиблись».

let a = prompt('Введите число');
a = +a;
console.log(typeof a);
function even_or_odd(a) {
   return a % 2 === 0 ? "Чётное" : "Не чётное"
} 
if (a = +a) {
   console.log(even_or_odd(a));
} else {
   console.log('NaN это не число !');
   console.log(isNaN(a));
   alert('Упс, кажется, вы ошиблись')
}

