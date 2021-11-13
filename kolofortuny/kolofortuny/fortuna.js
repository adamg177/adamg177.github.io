var game = {zdobyte: 0,zycia: 3,};
var wybor = 0;
var znacznik = [];


document.getElementById("Sprawdź litere").addEventListener("click", Sprawdz_Litery);
document.getElementById("zamknij").addEventListener("click", author);

function author() {
  if (document.getElementById("authorinfo").style.display === "none")
    document.getElementById("authorinfo").style.display = "";
  else
    document.getElementById("authorinfo").style.display = "none";
}
function start() {

  document.getElementById("start").addEventListener("click",plansza);
  document.getElementById("autor").addEventListener("click",author);
  document.getElementById("wrap").style.display = "none";
}
function plansza() {
  document.getElementById("panstwa").innerHTML = "";
  document.getElementById("blad").innerHTML = ""
  document.getElementById("wrap").style.display = "";
  document.getElementById("start").style.display="none";
  document.getElementById("autor").style.display="none";

  wybor = random(0, data.length)
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
      addElement(newDiv, data[wybor]['country'][i], style);
  }
  zmianazyc(0);
}


function Sprawdz_Litery() {
  var litera = document.getElementById("wpisz_litere").value;
  var litery = document.getElementsByClassName("litera");
  var zgd = false;

  for (var i = 0; i < litery.length; i += 1) {
    if (litery[i].innerHTML.toUpperCase().localeCompare(litera.toUpperCase()) === 0) {
      litery[i].classList.remove("ukryte");
      zgd = true;
    }
  }

  znacznik.push(litera);
  



function zmianazyc(change) {
  game.zycia += change;
  document.getElementById("zycie").innerHTML = ('Życia: ' + game.zycia);
}

function zmpkt(change) {
  game.zdobyte += change;
  document.getElementById("punkty").innerHTML = ('Odgadnięte państwa: ' + game.zdobyte);
}

  if (zgd) {
    if (wyg()) {
      alert("Odgadłeś państwo :)");
      plansza();
      zmianazyc(5);
      zmpkt(1)
      znacznik= [];
    }
  } else {
    zmianazyc(-1);
    document.getElementById("blad").innerHTML += " " + (litera);
    if (game.zycia === 0) {
      alert("Zacznij od nowa poprawna odpowiedź to:\n " + (data[wybor]['country']).toString());
      plansza();
      zmianazyc(3);
      znacznik= [];
    }
  }
}

function wyg() {
  var litery = document.getElementsByClassName("litera");
  for (let i = 0; i < litery.length; i += 1) {
    if (litery[i].classList.contains("ukryte")) {
      return false;
    }
  }
  return true;
}

function addElement(node, litera, style) {

  var newDiv = document.createElement("span");
  newDiv.innerHTML = litera.toUpperCase();
  node.append(newDiv);

  newDiv.classList.add("litera");
  newDiv.classList.add(style);
}

function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

start();