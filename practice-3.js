//задание 3 - перевернуть строку
let funnyPhrase = "Обиваю двери кожей заказчика"
let massivPhrase = [...funnyPhrase]
let happened = massivPhrase.reverse().join("")

console.log(happened);