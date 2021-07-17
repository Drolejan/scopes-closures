var hello='Hello';
let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}

anotherFunction();

//Mala practica aca abajo

const hellowWorld2 = () => {
    globalVar = 'im global'
}

hellowWorld2();
console.log(globalVar);

const anotherFunction = () =>{
    var localVar = globalVar = 'Im Global';
}

anotherFunction();
console.log(globalVar);