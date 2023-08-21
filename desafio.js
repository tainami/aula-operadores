// 1

let celsius = 0
let fahrenheit = celsius *(9/5) + 32
let kelvin = ((fahrenheit - 32) * (5/9)) + 273.15

fahrenheit = 77 
console.log("77°F em  K é", kelvin + "°K")

celsius = 80
fahrenheit = celsius *(9/5) + 32
console.log("80°C em °F é", fahrenheit + "°F")

celsius = 30
fahrenheit = celsius *(9/5) + 32
kelvin = ((fahrenheit - 32) * (5/9)) + 273.15
console.log("30°C em °F e K é", fahrenheit + "°F", "e", kelvin + "°K")
