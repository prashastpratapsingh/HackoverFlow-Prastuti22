var m1=Math.floor(Math.random() * 256);
var m2=Math.floor(Math.random() * 256);
var m3=Math.floor(Math.random() * 256);
var bgColormain = "rgb(" + m1 + "," + " " + m2 + "," + " "+ m3 + ")";
document.getElementById("c1").innerHTML = "(" + m1 + ",";
document.getElementById("c2").innerHTML = m2 + ",";
document.getElementById("c3").innerHTML = m3 + ")";
document.getElementById("g1").style.backgroundColor = random_bg_color();
document.getElementById("g2").style.backgroundColor = random_bg_color();
document.getElementById("g3").style.backgroundColor = random_bg_color();
document.getElementById("g4").style.backgroundColor = random_bg_color();
document.getElementById("g5").style.backgroundColor = random_bg_color();
document.getElementById("g6").style.backgroundColor = random_bg_color();
var n1=Math.floor(Math.random() * 6) + 1;
var n2=Math.floor(Math.random() * 3) + 1
document.getElementById(`g${n1}`).style.backgroundColor = bgColormain;
console.log(bgColormain);
function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = 100+ Math.floor(Math.random() * 256);
    var z = 50+ Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 	  return bgColor;
    }

document.getElementById("b3").addEventListener("click", myFunction1);
function myFunction1() {
  document.getElementById("g4").style.visibility = "hidden";
  document.getElementById("g5").style.visibility = "hidden";
  document.getElementById("g6").style.visibility = "hidden";
  document.getElementById("g1").style.backgroundColor = random_bg_color();
  document.getElementById("g2").style.backgroundColor = random_bg_color();
  document.getElementById("g3").style.backgroundColor = random_bg_color();
  document.getElementById(`g${n2}`).style.backgroundColor = bgColormain;
}
var k1=1;var k2=1;
if(k1 && k2)
{
document.getElementById("g1").addEventListener("click", f11);

function f11(){
  if(bgColormain === document.getElementById("g1").style.backgroundColor )
  {
    document.body.style.backgroundColor = bgColormain;
    alert("You Won");
  }
  else{
    console.log(bgColormain);
    console.log(document.getElementById("g1").style.backgroundColor);
    document.getElementById("g1").style.visibility = "hidden";
    alert("Try Again");
  }
  k2=0;
}
}

var k3=1;var k4=1;
if(k3 && k4)
{
document.getElementById("g2").addEventListener("click", f12);
function f12(){
  if(bgColormain === document.getElementById("g2").style.backgroundColor )
  {
    document.body.style.backgroundColor = bgColormain;
    alert("You Won");
  }
  else{
    console.log(bgColormain);
    console.log(document.getElementById("g2").style.backgroundColor);
    document.getElementById("g2").style.visibility = "hidden";
    alert("Try Again");
  }
  k4=0;
}
}

var k5=1;var k6=1;
if(k5 && k6)
{
document.getElementById("g3").addEventListener("click", f13);
function f13(){
  if(bgColormain === document.getElementById("g3").style.backgroundColor )
  {
    document.body.style.backgroundColor = bgColormain;
    alert("You Won");
  }
  else{
    console.log(bgColormain);
    console.log(document.getElementById("g3").style.backgroundColor);
    document.getElementById("g3").style.visibility = "hidden";
    alert("Try Again");
  }
  k6=0
}
}

document.getElementById("b4").addEventListener("click", myFunction2);
function myFunction2() {
  document.getElementById("g4").style.visibility = "visible";
  document.getElementById("g5").style.visibility = "visible";
  document.getElementById("g6").style.visibility = "visible";
  document.getElementById("g1").style.backgroundColor = random_bg_color();
  document.getElementById("g2").style.backgroundColor = random_bg_color();
  document.getElementById("g3").style.backgroundColor = random_bg_color();
  document.getElementById("g4").style.backgroundColor = random_bg_color();
  document.getElementById("g5").style.backgroundColor = random_bg_color();
  document.getElementById("g6").style.backgroundColor = random_bg_color();
  document.getElementById(`g${n1}`).style.backgroundColor = bgColormain;
}

document.getElementById("g1").addEventListener("click", f1);
function f1(){
  if(k1 && k2)
  {
  if(document.getElementById("g1").style.backgroundColor == bgColormain)
  {
    document.body.style.backgroundColor = bgColormain;
    alert("You Won");
  }
  else{
    console.log(document.getElementById("g1").style.backgroundColor);
    document.getElementById("g1").style.visibility = "hidden";
    alert("Try Again");
  }
}
}



document.getElementById("g2").addEventListener("click", f2);
function f2(){
  if(k3 && k4)
  {
  if(document.getElementById("g2").style.backgroundColor == bgColormain)
  {
    document.body.style.backgroundColor = bgColormain;
    alert("You Won");
  }
  else{
    console.log(document.getElementById("g2").style.backgroundColor);
    document.getElementById("g2").style.visibility = "hidden";
    alert("Try Again");
  }
}
}



document.getElementById("g3").addEventListener("click", f3);
function f3(){
  if(k5 && k6)
  {
  if(document.getElementById("g3").style.backgroundColor == bgColormain)
  {
    document.body.style.backgroundColor = bgColormain;
    alert("You Won");
  }
  else{
    console.log(document.getElementById("g3").style.backgroundColor);
    document.getElementById("g3").style.visibility = "hidden";
    alert("Try Again");
  }
}
}

document.getElementById("g4").addEventListener("click", f4);
function f4(){
  if(document.getElementById("g4").style.backgroundColor == bgColormain)
  {
    document.body.style.backgroundColor = bgColormain;
    alert("You Won");
  }
  else{
    console.log(document.getElementById("g4").style.backgroundColor);
    document.getElementById("g4").style.visibility = "hidden";
    alert("Try Again");
  }
}

document.getElementById("g5").addEventListener("click", f5);
function f5(){
  if(document.getElementById("g5").style.backgroundColor == bgColormain)
  {
    document.body.style.backgroundColor = bgColormain;
    alert("You Won");
  }
  else{
    console.log(document.getElementById("g5").style.backgroundColor);
    document.getElementById("g5").style.visibility = "hidden";
    alert("Try Again");
  }
}

document.getElementById("g6").addEventListener("click", f6);
function f6(){
  if(document.getElementById("g6").style.backgroundColor == bgColormain)
  {
    document.body.style.backgroundColor = bgColormain;
    alert("You Won");
  }
  else{
    console.log(document.getElementById("g6").style.backgroundColor);
    document.getElementById("g6").style.visibility = "hidden";
    alert("Try Again");
  }
}
