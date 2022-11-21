// задание 6 - проверить все ли одинаковые элементы в массиве
let arr5 = ["orange", "orange", "orange"];
let similar 

 for(let i = 0; i < arr5.length-1; i=i+1){
   if (arr5[i] == arr5[i+1]){
     similar = true
    } else {
    similar = false
    }
 }

console.log(similar);