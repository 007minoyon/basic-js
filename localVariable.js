function greet(){
    let userName ="Noyon"; // local variable example
    console.log("Hello "+ userName);
}
//greet();




let userName ="Noyon"; // global variable example
function greet(){
     
    console.log("Hello "+ userName);
}
// greet();
// console.log(userName);


//Immidiatley invokable function expressions 

(function(name){
    console.log(name) //example
})("Noyon");