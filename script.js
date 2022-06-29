let count = 0;
let cps = 0;
let clicks = 1;
let scale = 0;
let firstLevelAMOUNT = 0;



document.getElementById("worlds").innerHTML = count+" worlds";

function Clicked() {
  count+=clicks;
  scale+=0.1; // scale+=0.01;
  let word= " Worlds";
  document.getElementById("worlds").innerHTML = "";
  let cookieCount = document.getElementById("worlds").innerHTML = count+word;
};

function firstLevel() {
  if (count >= 100) {
    clicks+=1
    count-=100
    let word = " Worlds";
    let worldCount = document.getElementById("worlds").innerHTML = count+word;
    firstLevelAMOUNT+=1
    document.getElementById("firstLevel").innerHTML = firstLevelAMOUNT+" bought!";
  }
  else {
    alert("Você não tem planetas suficientes ainda !")
  }
};

