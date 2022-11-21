//задание 5 -  вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива
let arrColor = ["yellow","orange", "red", "purple", "blue", "green"];
console.log(arrColor.length);

arrColor.forEach(function(array_item, index) {
    console.log(array_item);
});