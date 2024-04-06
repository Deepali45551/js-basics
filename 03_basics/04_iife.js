// Immediately Invoked Function Expressions(IIFE)
(function chai() // named iife
{
    console.log(`DB connnected`);//DB connnected//first->function defi//second->execution call
})();//global scope ko pollution ko htane ke liye iife ka use krte

(function aurcode () {
    console.log(`DB Connected TWO`);//DB Connected TWO
})();

( (name)=>{ //simple iife
    console.log(`DB connect ${name}`);// DB connect deepali
})('deepali')