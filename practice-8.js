// Задание 8 - Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
let vegetarianFood = new Map([['fruit', 'orange'], ['vegetable', 'cucumber'], 
                              ['berry', 'blueberry'], ['nuts', 'peanuts']]);

let z = (value, key) => console.log(`Ключ - ${key}, Значение - ${value}`);

vegetarianFood.forEach(z);//обход Map-объекта