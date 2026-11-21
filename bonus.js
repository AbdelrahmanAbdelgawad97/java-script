
let init = 5 ;

var createCounter = function(x) {
    
    function increment() {
        return ++ x   ;
    }

    function decrement() {
        return -- x  ;
    }

    function reset() {
        return x ;
    }

    return  { increment: increment(), decrement: decrement(), reset: reset() }
};

console.log(createCounter(init));