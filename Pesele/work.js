var year = document.querySelector('#year');
var month = document.querySelector('#month');
var day = document.querySelector('#day');
var numbers = document.querySelector('#numbers');
var validate_button = document.querySelector('#validate');
var show_button = document.querySelector('#show');
var find_button = document.querySelector('#find');

function playsound() {
    var mysound = document.getElementById("mysound");
    mysound.autoplay = 'true';
    mysound.load();
}

if (window.Worker) {

    var show = new Worker("show_pesels.js");
    var find = new Worker("find_pesels.js");
    var validate = new Worker("validate_pesel.js");

    validate_button.onclick = function() {
        validate.postMessage([year.value, month.value, day.value, numbers.value]);
    }

    show_button.onclick = function() {
        show.postMessage([year.value, month.value, day.value]);
    }

    find_button.onclick = function() {
        find.postMessage([numbers.value]);
    }

    validate.onmessage = function(e) {
        if (e.data === true) {
            document.querySelector('#results').innerHTML = "Pesel jest poprawny";
        } else {
            document.querySelector('#results').innerHTML = "Pesel jest niepoprawny";
        }
    }
    show.onmessage = function(e) {
        document.querySelector('#results').innerHTML = e.data.join(", ");
    }
    find.onmessage = function(e) {
        document.querySelector('#results').innerHTML = e.data.join(", ");
    }
} else {
    console.log('Wybierz prosze chrome u mnie działa');
}