
     
 
        function calculateResult(){
    
    var enteredAmount = document.getElementById("euroAmount").value; 
    var currencyRate = document.getElementById("currencySelect").value;
    
    var result = document.getElementById('result');
       return result.value= enteredAmount * currencyRate;
         
   
     //or print or display in DOM or whatever you want to do with the result
}
             
        
        function rest(){
           document.getElementById("my-form").reset();
            
            }
    
    
    
