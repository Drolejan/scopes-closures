//Hoisting : elevamiento de las declaraciones
//Solo en declaraciones, no en inicializaciones

a = 2;
var a;
console.log(a) //Resultado: 2

console.log(b);
var b = 2; // Resultado: undefined


nameOfDog('Doge') //Resultado: Doge

function nameOfDog(name){
    console.log(name)
}