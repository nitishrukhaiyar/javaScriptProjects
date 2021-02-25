//Declaring variables
const submit=document.querySelector(".btn-block");
const amount=document.querySelector("#amount");
const interest=document.querySelector("#interest");
const years=document.querySelector("#years");
const monthlypayment=document.querySelector("#monthly-payment");
const totalpayment=document.querySelector("#total-payment");
const totalinterest=document.querySelector("#total-interest");

//Hiding result and loading image div
document.querySelector("#results").style.display="none";
document.querySelector("#loading").style.display="none";

//adding event listener to the variables
submit.addEventListener("click",calculate);

//calculate fnc
function calculate(e)
{
  e.preventDefault();
  if(amount.value===""||interest.value===""||years.value==="")
  {
  alert("please fill all the fields!");
  } 
  else{
     //Enable showing load image
  document.querySelector("#loading").style.display="block";
  setTimeout(calculteResults,2000);

}
}


//calculteResults fnc
function calculteResults()
{
  totalpayment.value=Number((amount.value*interest.value*years.value)/100)+Number(amount.value);
  monthlypayment.value=totalpayment.value/12;
  totalinterest.value=(amount.value*interest.value*years.value)/100
  //make results visible
  document.querySelector("#results").style.display="block";
  //make loader image invisible
  document.querySelector("#loading").style.display="none";
}


