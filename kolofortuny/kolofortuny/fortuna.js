
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
  document.getElementById("wrap").style.display = "none";
}
function autor() {
  document.getElementById("autorinfo").addEventListener("autor",autor)
}

function plansza(){
  document.getElementById("autor").style.display="none";
  document.getElementById("start").style.display="none";
  document.getElementById("wrap").style.display="";

}
function sprawdzlit(){
  var litera = document.getElementById("wpisz_litere").value;
  var litery = document.getElementById("litera");
}
function wyg(){
  var litery = document.getElementByClassName("litera")
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
