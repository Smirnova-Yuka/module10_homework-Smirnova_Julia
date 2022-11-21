// задание 2 - определить тип данных
let x = "orange"
let whatType = typeof x

switch(whatType) {
  case "number":
    console.log("х - это число")
    break;
    
  case "string":
    console.log("x - это строка")
    break;
    
  case "boolean":
    console.log("х - это логический тип")
    break;
    
  default:
    console.log("х не определён")
}