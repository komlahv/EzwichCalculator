//check status every 15 
let logsView;
//localStorage.removeItem('logs');
let clicked = false;
let loadedCount = localStorage.getItem("loadedCount") || 0;
let noloadCount = localStorage.getItem("noloadCount") || 0;

updateNow();
setInterval(updateNow, 5000);

function calc() {
  let ufee;
  let amount;
  let balance = document.getElementById("balance").value;
  let remain = document.getElementById("remain").value;
  let btn = document.getElementById("calcbtn");

  //calc fee
  amount = balance - remain;
  ufee = Number((amount * 0.005)).toFixed(2);
  if (amount > 1000) {
    ufee = 5
  }

  //Post fee
  document.getElementById("fee").innerHTML = `GHC ${ufee}`;

  btn.innerHTML = ` GHC ${amount - ufee}`;
  if ((amount - ufee) < 1) {
    btn.innerHTML = "Check Balance"
  }
  return false;
}


function updateNow() {
  console.log("updating...")
  //Update counters
  loadedCount = localStorage.getItem("loadedCount") || 0;
  noloadConut = localStorage.getItem("noloadCount") || 0;
  document.getElementById("loaded").innerHTML = loadedCount;
  document.getElementById("noload").innerHTML = noloadCount;

  //update logs
  document.getElementById("logs").innerHTML = localStorage.getItem("logs") || "...";
  document.getElementById("updatetime").innerHTML = localStorage.getItem("lastUpdate") || "...";
}


//TODO
console.log($("#logs").length);
while($("#logs").length > 2){
  document.getElementById("logs").removeChild(document.getElementById("logs").children[2]);
}


document.getElementById("balance").addEventListener("click", function() {
  document.getElementById("calcbtn").innerHTML = "Calculate";
  document.getElementById("balance").value = "";
});

document.getElementById("remain").addEventListener("click", function() {
  document.getElementById("calcbtn").innerHTML = "Calculate";
  document.getElementById("remain").value = "";
});

//loaded button
document.getElementById("alawa").addEventListener("click", function() {
  if(clicked == true) return;
  clicked = true;
  //get time
  let d = moment.tz('Africa/Accra').format("dddd, MMMM Do YYYY, h:mm:ss a");
  document.getElementById("updatetime").innerHTML = d;
  localStorage.setItem("lastUpdate", d);

  //add to log
  $('#logs').prepend(`<li><span style="color:green">I loaded successfully</span> on ${d}</li><hr/>`);
  logsView = document.getElementById("logs").innerHTML;
  localStorage.setItem("logs", logsView)

  //add to count
  loadedCount++;
  localStorage.setItem("loadedCount", loadedCount);

  updateNow()
});

//no load button
document.getElementById("alawa2").addEventListener("click", function() {
  if(clicked == true) return;
  clicked = true;
  //get time
  let d = moment.tz('Africa/Accra').format("dddd, MMMM Do YYYY, h:mm:ss a");
  document.getElementById("updatetime").innerHTML = d;
  localStorage.setItem("lastUpdate", d);

  //add to log
  $('#logs').prepend(`<li><span style="color:red">No funds to be loaded </span> on ${d}</li><hr/>`);
  logsView = document.getElementById("logs").innerHTML;
  localStorage.setItem("logs", logsView)

  //add to count
  noloadCount++;
  localStorage.setItem("noloadCount", noloadCount);

  updateNow()
});


//scroll to top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}