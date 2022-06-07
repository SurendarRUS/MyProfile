function second() {
   var hidden=document.getElementById("secondCard");

   if(hidden.style.display==="none"){ 
       
    hidden.style.display="block";
    document.getElementById("next-btn").innerText="Close";
   }
   else{
    hidden.style.display="none";
    document.getElementById("next-btn").innerText="Next";
   }

}