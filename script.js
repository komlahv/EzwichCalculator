function calc(){
  let ufee;
  let amount;
  let balance = document.getElementById("balance").value;
  let remain = document.getElementById("remain").value;
  let btn = document.getElementById("calcbtn");
  
  //calc fee
  amount = balance - remain;
  ufee = Number((amount * 0.005)).toFixed(2);
  if(amount > 1000){ufee = 5}
  
  //Post fee
  document.getElementById("fee").innerHTML =`GHC ${ufee}`;
  
  btn.innerHTML =` GHC ${amount - ufee}`;
  if((amount - ufee) < 1 ){btn.innerHTML = "Check Balance"}
  return false;
}


document.getElementById("balance").addEventListener("click", function(){
  document.getElementById("calcbtn").innerHTML = "Calculate";
});

document.getElementById("remain").addEventListener("click", function(){
  document.getElementById("calcbtn").innerHTML = "Calculate";
});