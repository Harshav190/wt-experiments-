let value=Math.floor(Math.random()*10+1);
let gusses=0;
document.getElementById("submitbutton").onclick= function() {
  let ans=document.getElementById("guess").value;
  gusses+=1;
  if(value==ans)
    alert(`${ans} is the correct answer and gusses in ${gusses} attempts`);
  else if(ans>value)
  {
    alert(`Too large and have only ${attempts}`);
  }
  else
    alert(`Too small and have only ${attempts}`);
}
if(attempts==0)
{
  alert(`You Have exceeded the number of attempts`)
}
