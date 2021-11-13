
var game = {
  zdobyte : 0,
  zycia : 1,
}
var wybor = 0;
var znacznik = [];

document.getElementById("Sprawdz litere".addEventListener("click",Sprawdz_Litery));
document.getElementById("Zamknij".addEventListener("click",autor));

function start(){
  document.getElementById("start").addEventListener("click",plansza);
  document.getElementById("autor").addEventListener("click",autor)
  document.getElementById("wrap").style.display="none";
}
function autor() {
  if document.getElementById("autorinfo").style.display==="none";
    document.getElementById("autorinfo").addEventListener="";
    else
      document.getElementById("autorinfo").style.display="none";

}

function plansza(){
  document.getElementById("autor").style.display="none";
  document.getElementById("start").style.display="none";
  document.getElementById("wrap").style.display="";
  document.getElementById("blad").style.display="";
  document.getElementById("panstwa").style.display="";

  wybor = getRandomInit(0, data.length)
  console.log(data[wybor]['country']);

  var newDiv = document.createElement("div");
  document.getElementById("panstwa").append(newDiv);
  newDiv.classList.add("board");
  for (var i = 0; i < data[wybor]['country'].length; i += 1) {
    var style = "ukryte"
    if (data[wybor]['country'][i].localeCompare(' ') === 0) {
      newDiv = document.createElement("div");
      document.getElementById("panstwa").append(newDiv);
      newDiv.classList.add("board");
      
    } else
      addlitera(newDiv, data[wybor]['country'][i], style);
  }
  zmianazyc(0);
}

function sprawdzlit(){
  var litera = document.getElementById("wpisz_litere").value;
  var litery = document.getElementById("litera");
  var zgd = false;

  for (var i = 0; i < litery.length; i += 1) {
    if (litery[i].innerHTML.toUpperCase().localeCompare(litera.toUpperCase()) === 0) {
      litery[i].classList.remove("ukryte");
      zgd = true;
    }
  }
  znacznik.push(litera);
}
  

function wyg(){
 /*  for (var i = 0; i < data[0]['country'].length; i += 1) {
    console.log(data[0]['country'][i]);  
  }*/

  var litery = document.getElementByClassName("litera")
    for (let i = 0; i < litery.length; i += 1) {
    if (litery[i].classList.contains("ukryte")) {
      return false;
    }
  }
  return true;
}

function addElement(mydiv){

  var newDiv = document.createElement("span");
  newDiv.innerHTML = litera.toUpperCase();
  node.append(newDiv);
  newDiv.classList.add(style);
  newDiv.classList.add("litera")
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function zmianapkt(change){
  game.zdobyte += change;
  document.getElementById("punkty").innerHTML=('Odgadnięte państwa:  ' + game.zdobyte);

}

function zmianazyc(change){
  game.zycia += change;
  document.getElementById("zycie").innerHTML=('Życia:  ' + game.zycia);
}
start()

console.log(data[0]['country']);
var elem = document.getElementById("panstwa");
elem.innerHTML =data[0]['country'];

console.log(data.length);
console.log(data[0]['country'][2]);

 for (var i = 0; i < data[0]['country'].length; i += 1) {
    console.log(data[0]['country'][i]);  
  }


addElement("wrap");
//LISTENERS

document.getElementById("graj").addEventListener("click", Sprawdz_Litery); 
console.log(game.zycia);


//FUNKCJE
