function second() {
   var hidden=document.getElementById("secondCard");
   hidden.classList.toggle("block");
   if(hidden.style.display==="none"){ 
   
    document.getElementById("next-btn").innerText="Close";
   }
   else{
    
    document.getElementById("next-btn").innerText="Next";
   }

}
function third(){
   document.getElementById("thirdCard").classList.toggle("block");

}