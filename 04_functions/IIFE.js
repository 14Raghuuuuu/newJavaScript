// ====> IMMEDIATELY INVOKED FUNCTION EXPRESSION 

(function chai () {         // named IIFE
     console.log(`DB CONNECTED`)
}) ();

( (name) =>  {
    console.log(`TWO DB CONNECTED ${name}`);
    
} ) ("raghu")