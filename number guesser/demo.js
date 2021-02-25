//declaring variables
const submit=document.querySelector("#guess-btn");
const input=document.querySelector("#guess-input");
const para=document.querySelector(".message");
//defining events
submit.addEventListener('click',showResult);
input.addEventListener('click',clearField);
//initialising a count variable
let count=0;
//showResult method
function showResult()
{
  const status=submit.value;
  console.log( status);
  if(status==="play again")
  {
  }
  else{
  //checking for empty entry
  if(input.value==="")
  {
    alert("Please enter your guess number!");
  }
  else{
    //generating random number
let random=Math.random()*10;
let randomInt=Math.trunc(random);
let inputNumber=Number(input.value);
//initialising the count and checking the input value with random number
count=count+1;
if(inputNumber===randomInt)
{
  para.innerHTML='<p>you won!</p>';
  count=0;
}
else{
  if(count<3)
  {
  para.innerHTML='<p>'+'you lost! '+(3-count)+' attempts left.'+'</p>';
}
else{
  para.innerHTML='<p>'+'Game over! The correct guess was '+randomInt+'</p>';
  count=0;
  reset();
}
}
}
  }
  }
//clearField fnc
function clearField()
{
  input.value="";
}
//reset function
function reset()
{
  input.setAttribute('disabled', true);
  submit.setAttribute('value','play Again');
}
