 
    // random value generated 
    var y = Math.floor(Math.random() * 100 + 1); 
      
    // counting the number of guesses 
    // made for correct Guess 
    var guesses = 0; 
      
    document.getElementById("submitguess").onclick = function(){ 
      
   // number guessed by user      
   var x = document.getElementById("guessField").value; 
  
   if(x == y) 
   {
     if (guesses == 5) {
		    document.getElementById('lose').style.display = 'block';
	      }
      else
      {
        guesses ++;    
       alert("Congratulations!  You got the number correct in "
               + guesses + " guesses! "); 
        document.getElementById('win').style.display = 'block';
			document.getElementById('seconds_to_spare').innerHTML = "Your guesses: " + guesses;
      }
   } 
   else if(x > y) /* if guessed number is greater 
                   than actual number*/ 
   {     
       guesses++; 
       if (guesses == 5) {
		    document.getElementById('lose').style.display = 'block';
	      }
       else
       {
       alert("The number is smaller."); 
       }
   } 
   else
   {
     guesses++;
     if (guesses == 5) {
		    document.getElementById('lose').style.display = 'block';
	      }
      else
      { 
       alert("The number is greater.") 
      }
   } 
} 

function restart() {
  window.location.reload();
}