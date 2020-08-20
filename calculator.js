const calculator = {
    plus: function(a, b){
       return a + b;},
    minus: function(a, b){
      return a - b;},
    div: function(a, b){
      return a / b;},
    multi: function(a, b){
      return a * b;}
   }
   
   // console.log(greetNicolas)
   const plus = calculator.plus(5, 5)
   const minus = calculator.minus(5,5)
   const div = calculator.div(5,5)
   const multi = calculator.multi(5,5)
   
   console.log(plus, minus, div, multi)